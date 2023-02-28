import { localizePath } from '../../utils';

export function getItemGroups(groupsData) {
  return {
    weapons: {
      title: 'Weapons',
      type: 'weapon',
      summaryTemplate: 'item-summary/weapon',
      rollType: 'weapon-roll',
      rollLabelKey: 'system.associatedSkill',
      details: [
        {
          title: 'Distance',
          size: 100,
          key: 'system.distance',
          class: 'inject-data',
        },
        {
          title: 'Load',
          size: 80,
          key: 'system.load',
        },
        {
          title: 'Enc.',
          size: 80,
          key: 'system.encumbrance',
          isNumerable: true,
        },
        {
          title: 'Equipped',
          size: 80,
          key: 'system.equipped',
          isCheckbox: true,
        },
        {
          title: 'Carried',
          size: 80,
          key: 'system.carried',
          isCheckbox: true,
        },
      ],
      items: groupsData.weapons,
    },
    armor: {
      title: 'Armor',
      type: 'armor',
      summaryTemplate: 'item-summary/armor',
      details: [
        {
          title: 'DTM',
          size: 80,
          key: 'system.damageThresholdModifier',
        },
        {
          title: 'Enc.',
          size: 80,
          key: 'system.encumbrance',
          isNumerable: true,
        },
        {
          title: 'Equipped',
          size: 80,
          key: 'system.equipped',
          isCheckbox: true,
        },
        {
          title: 'Carried',
          size: 80,
          key: 'system.carried',
          isCheckbox: true,
        },
      ],
      items: groupsData.armor,
    },
    trappings: {
      title: 'Trappings',
      type: 'trapping',
      summaryTemplate: 'item-summary/trapping',
      details: [
        {
          title: 'Category',
          size: 160,
          key: localizePath('system.details.category'),
          filterable: true,
        },
        {
          title: 'Qty.',
          size: 80,
          key: 'system.quantity',
          isNumerable: true,
        },
        {
          title: 'Enc.',
          size: 80,
          key: 'system.encumbrance',
          isNumerable: true,
        },
        {
          title: 'Carried',
          size: 160,
          key: 'system.carried',
          isCheckbox: true,
        },
      ],
      items: groupsData.trappings,
    },
    patrons: {
      title: 'Patrons',
      type: 'patron',
      summaryTemplate: 'item-summary/patron',
      details: [
        {
          title: 'Type',
          size: 140,
          key: 'system.category'
        },
        {
          title: 'Patronage Score',
          size: 120,
          key: 'system.score'
        }
      ],
      items: groupsData.patrons,
    },
    spells: {
      title: 'Vitiations',
      type: 'spell',
      summaryTemplate: 'item-summary/spell',
      rollType: 'spell-roll',
      rollLabel: groupsData.system.stats.secondaryAttributes.magick.associatedSkill,
      details: [
        {
          title: 'Power Level',
          size: 100,
          key: 'system.principle',
        },
        {
          title: 'Tithe Cost',
          size: 80,
          key: 'system.titheCost',
        },
        {
          title: 'Distance',
          size: 200,
          key: 'system.distance',
          class: 'inject-data',
        },
        {
          title: 'Duration',
          size: 100,
          key: 'system.duration',
          class: 'inject-data',
        },
      ],
      items: groupsData.spells,
    },
    rituals: {
      title: 'Wortcunnings',
      type: 'ritual',
      summaryTemplate: 'item-summary/ritual',
      details: [
        {
          title: 'Channel Power As',
          size: 140,
          key: 'system.channelAs',
        },
        {
          title: 'Difficulty',
          size: 200,
          key: 'system.difficulty',
        },
        {
          title: 'Casting Time',
          size: 100,
          key: 'system.castingTime',
          class: 'inject-data',
        },
      ],
      items: groupsData.rituals,
    },
    outsiders: {
      title: 'Outsiders',
      type: 'outsider',
      summaryTemplate: 'item-summary/outsider',
      details: [
        {
          title: 'Court',
          size: 100,
          key: 'system.court'
        },
        {
          title: 'Level',
          size: 100,
          key: 'system.level'
        },
        {
          title: 'Contract',
          size: 100,
          key: 'system.contract'
        },
      ],
      items: groupsData.outsiders,
    },
    conditions: {
      title: 'Passive Conditions',
      type: 'condition',
      summaryTemplate: 'item-summary/condition',
      details: [
        {
          title: 'Category',
          size: 140,
          key: localizePath('system.details.category'),
        },
        {
          title: 'Currently in Effect',
          size: 150,
          key: 'system.active',
          isCheckbox: true,
        },
      ],
      items: groupsData.conditions,
    },
    effects: {
      title: 'Temporary Conditions',
      type: 'effect',
      isEffect: true,
      summaryTemplate: 'item-summary/effect',
      details: [
        {
          title: 'Source',
          size: 140,
          key: localizePath('details.source'),
        },
        {
          title: 'Category',
          size: 140,
          key: localizePath('details.category'),
        },
        {
          title: 'Currently in Effect', // @todo: change this in ZweihanderActiveEffect implementation to be more intuitive
          size: 150,
          key: 'disabled',
          isCheckbox: true,
        },
      ],
      items: groupsData.effects,
    },
    diseases: {
      title: 'Diseases',
      type: 'disease',
      summaryTemplate: 'item-summary/disease',
      details: [
        {
          title: 'Duration',
          size: 140,
          key: 'system.duration',
        },
        {
          title: 'Resist',
          size: 140,
          key: 'system.resist',
        },
        {
          title: 'Currently in Effect',
          size: 150,
          key: 'system.active',
          isCheckbox: true,
        },
      ],
      items: groupsData.diseases,
    },
    injuries: {
      title: 'Injuries',
      type: 'injury',
      summaryTemplate: 'item-summary/injury',
      details: [
        {
          title: 'Recuperation Time',
          size: 140,
          key: 'system.recuperationTime',
          isNumerable: true,
          unit: ' days',
        },
        {
          title: 'Severity',
          size: 140,
          value: function () {
            return CONFIG.ZWEI.injurySeverities[this.system.severity].label;
          },
        },
        {
          title: 'Currently in Effect',
          size: 150,
          key: 'system.active',
          isCheckbox: true,
        },
      ],
      items: groupsData.injuries,
    },
    taints: {
      title: 'Patrons',
      type: 'patron',
      summaryTemplate: 'item-summary/patron',
      details: [
        {
          title: 'Type',
          size: 140,
          key: 'system.category'
        },
        {
          title: 'Patronage Score',
          size: 120,
          key: 'system.score'
        }
      ],
      items: groupsData.patrons,
    },
    professions: {
      title: 'Professions',
      type: 'profession',
      summaryTemplate: 'item-summary/profession',
      details: [
        {
          title: 'Tier',
          size: 130,
          key: 'system.tier',
        },
        {
          title: 'Archetype',
          size: 190,
          key: 'system.archetype',
        }
      ],
      items: groupsData.professions,
    },
    techniques: {
      title: 'Techniques',
      type: 'technique',
      summaryTemplate: 'item-summary/technique',
      details: [
        {
          title: 'Source',
          size: 240,
          key: 'source',
        },
        {
          title: 'Equipped',
          size: 80,
          key: 'system.equipped',
          isCheckbox: true,
        }
      ],
      items: groupsData.techniques,
    },
    drawbacks: {
      title: 'Drawbacks',
      type: 'drawback',
      summaryTemplate: 'item-summary/drawback',
      details: [
        {
          title: 'Source',
          size: 240,
          key: 'source',
        },
      ],
      items: groupsData.drawbacks,
    },
    talents: {
      title: 'Talents',
      type: 'talent',
      summaryTemplate: 'item-summary/talent',
      details: [
        {
          title: 'Source',
          size: 240,
          key: 'source',
        },
        {
          title: 'Equipped',
          size: 80,
          key: 'system.equipped',
          isCheckbox: true,
        }
      ],
      items: groupsData.talents,
    },
    traits: {
      title: 'Boons & Banes',
      type: 'trait',
      summaryTemplate: 'item-summary/trait',
      details: [
        {
          title: 'Source',
          size: 240,
          key: 'source',
        }
      ],
      items: groupsData.traits,
    },
    uniqueAdvances: {
      title: 'Unique Advances',
      type: 'uniqueAdvance',
      summaryTemplate: 'item-summary/uniqueAdvance',
      details: [
        {
          title: 'Type',
          size: 140,
          key: 'system.advanceType',
        },
        {
          title: 'RP Cost',
          size: 100,
          key: 'system.rewardPointCost',
        },
      ],
      items: groupsData.uniqueAdvances,
    },
  };
}

export function attachTabDefinitions(tabData) {
  const $$ = (x) => tabData.itemGroups[x];
  tabData.tabs = {
    trappings: {
      itemGroups: ['weapons', 'armor', 'trappings', 'patrons'].map($$),
    },
    magick: {
      headerTemplate: 'character/tithe',
      footerTemplate: 'character/magick-skill-selector',
      itemGroups: ['spells', 'rituals', 'outsiders'].map($$),
    },
    afflictions: {
      itemGroups: ['effects', 'conditions', 'diseases', 'injuries' /*, 'taints'*/].map($$),
    },
    tiers: {
      itemGroups: ['professions', 'traits', 'techniques', 'talents'].map($$),
    },
  };
}
