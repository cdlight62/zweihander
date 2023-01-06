export default class ZweihanderCombatTracker extends CombatTracker {
  get template() {
    return 'systems/blackbird/src/templates/combat/combat-tracker.hbs';
  }

  activateListeners(html) {
    super.activateListeners(html);
  }
}
