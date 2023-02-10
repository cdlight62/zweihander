import * as ZweihanderDice from '../dice';

export default class OdicTracker extends Application {
  static INSTANCE = undefined;

  static get PARAMS() {
    const size = 'compact';
    switch (size) {
      case 'compact':
        return {
          compact: true,
          tokenSize: 25,
          padding: 0,
          areaSize: 80,
        };
      case 'normal':
        return {
          tokenSize: 64,
          padding: 5,
          areaSize: 120,
        };
      case 'big':
        return {
          tokenSize: 83,
          padding: 10,
          areaSize: 180,
        };
      case 'huge':
        return {
          tokenSize: 125,
          padding: 15,
          areaSize: 300,
        };
    }
  }
  // business logic

  #waiting = false;

  #state = {
    total: 0
  };

  #socket;

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: 'systems/zweihander/src/templates/app/odic-tracker.hbs',
      popOut: true,
      minimizable: false,
      resizable: false,
      title: 'Odic Dice Pool',
      id: 'odicTrackerApp',
      classes: ['zweihander'],
      width: OdicTracker.PARAMS.areaSize * 2,
      height: OdicTracker.PARAMS.areaSize,
      top: 50,
      left: 80,
    });
  }

  constructor(socket) {
    super();
    const that = this;
    function requestSyncOdicDice(state, requestingUserId) {
      if (state) {
        socket.executeForEveryone('broadcastOdicState', state);
        // let validationError = that.validate(state, requestingUserId);
        // if (!validationError) {
        //   socket.executeForEveryone('broadcastOdicState', state);
        // } else {
        //   socket.executeForEveryone('broadcastOdicState', that.state);
        //   socket.executeAsUser('showIllegalStateNotification', requestingUserId, validationError);
        // }
      }
      return that.state;
    }

    function broadcastOdicState(state) {
      that.state = state;
    }

    function showIllegalStateNotification(validationError) {
      ui.notifications.error(validationError);
    }

    socket.register('requestSyncOdicDice', requestSyncOdicDice);
    socket.register('broadcastOdicState', broadcastOdicState);
    socket.register('showIllegalStateNotification', showIllegalStateNotification);

    this.#socket = socket;
  }

  get resetRule() {
    return 'Set total odic dice to zero.';
  }

  get state() {
    return {
      total: this.#state.total
    };
  }

  set state(updatedState) {
    this.#waiting = false;
    this.#state = updatedState;
    if (game.users.get(game.userId).isGM) {
      game.settings.set('zweihander', 'odicTrackerPersistedState', updatedState);
    }
    this.render(!this.closable);
  }

  get total() {
    return this.#state.total;
  }

  increaseTotal(num = 1) {
    const s = this.state;
    s.total += num;
    return s;
  }

  decreaseTotal(num = 1) {
    const s = this.state;
    s.total = s.total > 0 ? s.total - num : s.total;
    return s;
  }

  //TODO implement different rule systems
  validate(updatedState, requestingUserId) {
    // console.log(this.state);
    // console.log(updatedState);
    const user = game.users.get(requestingUserId);
    if (updatedState.total !== this.total && !user.isGM) {
      return 'You are not privileged to change the total amount of odic dice in the game!';
    } else {
      return false;
    }
  }

  // Foundry methods
  getData() {
    return {
      odicDice: {
        value: this.total
      },
      waiting: this.#waiting,
      params: OdicTracker.PARAMS,
    };
  }

  async syncStateOdicDice() {
    if (game.users.get(game.userId).isGM) {
      this.#state = game.settings.get('zweihander', 'odicTrackerPersistedState');
      this.#waiting = false;
      this.#socket.executeForOthers('broadcastOdicState', this.state);
    } else {
      this.#state = await this.requestSyncOdicDice();
    }
    this.render(!this.closable);
  }

  resetStateOdicDice() {
    if (game.users.get(game.userId).isGM) {
      this.state = {
        total: 0,
      };
      this.#socket.executeForOthers('broadcastOdicState', this.state);
    } else {
      ui.notifications.error(
        'Only the GM may reset the odic tracker. Keep your dirty hands to yourself, foolish thing!'
      );
    }
  }

  async requestSyncOdicDice(updatedState, rethrow = false) {
    try {
      if (updatedState) {
        return await this.#socket.executeAsGM('requestSyncOdicDice', updatedState, game.userId);
      } else {
        return await this.#socket.executeAsGM('requestSyncOdicDice');
      }
    } catch (e) {
      if (!e?.name || e.name !== 'SocketlibNoGMConnectedError') {
        console.error(e);
      }
      this.#waiting = true;
      this.render(!this.closable);
      ui.notifications.warn('Odic Tracker is waiting for a GM to (re)connect.');
      if (rethrow) {
        throw e;
      }
      return this.state;
    }
  }

  async close(event) {
    // Delegate closing event (which I assume to be triggered by pressing ESC)
    //TODO remove this after fortune tracker redesign
    if (game.user.isGM && canvas.activeLayer && Object.keys(canvas.activeLayer.controlled).length) {
      if (!canvas.activeLayer.preview?.children.length) canvas.activeLayer.releaseAll();
      return true;
    }
    ui.menu.toggle();
    // Save the fog immediately rather than waiting for the 3s debounced save as part of commitFog.
    if (canvas.ready) canvas.fog.save();
  }

  activateListeners(html) {
    const app = html.parents('#odicTrackerApp');
    let totalDiceTrigger;
    if (!app.find('#odicTrackerAppTotal').length) {
      app.find('a.header-button.close').before(`
        <a id="odicTrackerAppTotal" class="waiting-${this.#waiting}">
          Total: ${this.total}
        </a>
        <a class="odic-tracker-reset" title="${this.resetRule}">
          <i class="fas fa-sync-alt"></i>
        </a>
      `);
      let resetTrigger = app.find('.odic-tracker-reset');
      resetTrigger.click((event) => {
        event.preventDefault();
        this.resetStateOdicDice();
      });
      totalDiceTrigger = app.find('#odicTrackerAppTotal');
      app.find('a.header-button.close').remove();
    } else {
      app
        .find('#odicTrackerAppTotal')
        .replaceWith(`<a id="odicTrackerAppTotal" class="waiting-${this.#waiting}">Total: ${this.total}</a>`);
        totalDiceTrigger = app.find('#odicTrackerAppTotal');
    }
    totalDiceTrigger.click((event) => {
      event.preventDefault();
      this.requestSyncOdicDice(this.increaseTotal());
    });
    totalDiceTrigger.contextmenu((event) => {
      event.preventDefault();
      this.requestSyncOdicDice(this.decreaseTotal());
    });

    let odicTrigger = html.find('.odic-tracker-odic-trigger');
    odicTrigger.click((event) => {
      event.preventDefault();
      if (this.total > 0)
        ZweihanderDice.rollOdicDice(this.total);
    });
  }
}
