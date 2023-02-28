let ZWEI = {};

ZWEI.debugTitle =
  '\n                                                                     \\\n                Initializing                ---======================]=====O\n                                                                     /\n ________          ________ _____ _    _  _   _  _   _ _____  ______ _____  \n|___  /\\ \\        / /  ____|_   _| |  | |(_)_(_)| \\ | |  __ \\|  ____|  __ \\ \n   / /  \\ \\  /\\  / /| |__    | | | |__| |  / \\  |  \\| | |  | | |__  | |__) |\n  / /    \\ \\/  \\/ / |  __|   | | |  __  | / _ \\ | . ` | |  | |  __| |  _  / \n / /__    \\  /\\  /  | |____ _| |_| |  | |/ ___ \\| |\\  | |__| | |____| | \\ \\ \n/_____|    \\/  \\/   |______|_____|_|  |_/_/   \\_\\_| \\_|_____/|______|_|  \\_\\\n\n      /\nO=====[======================---         Grim & Perilous RPG System         \n      \\';

ZWEI.templates = {
  skill: 'systems/zweihander/src/templates/chat/chat-skill.hbs',
  spell: 'systems/zweihander/src/templates/chat/chat-spell.hbs',
  weapon: 'systems/zweihander/src/templates/chat/chat-weapon.hbs',
  skillConfigurationDialog: 'systems/zweihander/src/templates/dialog/dialog-skill-configuration.hbs',
};

ZWEI.testTypes = {
  skill: 'skill',
  spell: 'spell',
  parry: 'parry',
  dodge: 'dodge',
  weapon: 'weapon',
};

ZWEI.testModes = {
  standard: {
    label: 'Standard',
    rollMode: CONST.DICE_ROLL_MODES.PUBLIC,
  },
  assisted: {
    label: 'Assisted',
    rollMode: CONST.DICE_ROLL_MODES.PUBLIC,
  },
  opposed: {
    label: 'Opposed',
    rollMode: CONST.DICE_ROLL_MODES.PUBLIC,
  },
  private: {
    label: 'Private',
    help: 'Visible for GM & you',
    rollMode: CONST.DICE_ROLL_MODES.PRIVATE,
  },
  secret: {
    label: 'Secret',
    help: 'Visible for GM',
    rollMode: CONST.DICE_ROLL_MODES.BLIND,
  },
  'secret-opposed': {
    label: 'Secret Opposed',
    help: 'Visible for GM',
    rollMode: CONST.DICE_ROLL_MODES.BLIND,
  },
  self: {
    label: 'Self',
    help: 'Visible for you',
    rollMode: CONST.DICE_ROLL_MODES.SELF,
  },
};

ZWEI.alignmentRanks = 9;
ZWEI.perilOptions = [
  'INCAPACITATED!',
  'Ignore 3 Skill Ranks',
  'Ignore 2 Skill Ranks',
  'Ignore 1 Skill Rank',
  'Imperiled',
  'Anxious',
  'Unhindered',
];
ZWEI.damageOptions = [
  'SLAIN!',
  'Grievously Wounded',
  'Seriously Wounded',
  'Moderately Wounded',
  'Lightly Wounded',
  'Barely Wounded',
  'Unharmed',
];
ZWEI.tiers = {
  1: 'Basic',
  2: 'Intermediate',
  3: 'Advanced',
};
ZWEI.tiersInversed = {
  Basic: 1,
  Intermediate: 2,
  Advanced: 3,
};

ZWEI.primaryAttributes = ['combat', 'brawn', 'agility', 'perception', 'intelligence', 'willpower', 'fellowship'];

ZWEI.primaryAttributeIcons = {
  combat: 'ra ra-croc-sword',
  brawn: 'ra ra-muscle-up',
  agility: 'fa fa-running',
  perception: 'ra ra-aware',
  intelligence: 'ra ra-book',
  willpower: 'ra ra-crystal-ball',
  fellowship: 'ra ra-double-team',
};

ZWEI.supportedGameSystems = {
  zweihander: 'Zweihander',
  fof: 'Flames of Freedom',
};

ZWEI.replacedDefaultCoreIcons = ['icons/svg/mystery-man.svg', 'icons/svg/item-bag.svg'];

const d = 'systems/zweihander/assets/icons';
ZWEI.defaultItemIcons = {
  _default: `${d}/swap-bag.svg`,
  trapping: `${d}/swap-bag.svg`,
  condition: `${d}/abstract-024.svg`,
  injury: `${d}/bandaged.svg`,
  disease: `${d}/half-dead.svg`,
  disorder: `${d}/card-joker.svg`,
  profession: `${d}/abstract-082.svg`,
  ancestry: `${d}/dna2.svg`,
  armor: `${d}/leather-armor.svg`,
  weapon: `${d}/sword-hilt.svg`,
  spell: `${d}/wizard-staff.svg`,
  ritual: `${d}/pentacle.svg`,
  trait: `${d}/character.svg`,
  talent: `${d}/fist.svg`,
  technique: `${d}/achievement.svg`,
  drawback: `${d}/spiked-halo.svg`,
  quality: `${d}/flint-spark.svg`,
  skill: `${d}/skills.svg`,
  outsider: `${d}/card-joker.svg`,
  taint: `${d}/character.svg`,
};

ZWEI.defaultActorIcons = {
  _default: `${d}/cowled.svg`,
  character: `${d}/character.svg`,
  creature: `${d}/daemon-skull.svg`,
  npc: `${d}/cowled.svg`,
};

ZWEI.packSets = {
  zweihander: {
    base: {
      ancestry: 'zweihander.zh-ancestries',
      armor: 'zweihander.zh-armor',
      condition: 'zweihander.zh-conditions',
      disease: 'zweihander.zh-diseases',
      disorder: 'zweihander.zh-disorders',
      drawback: 'zweihander.zh-drawbacks',
      injury: 'zweihander.zh-injuries',
      profession: 'zweihander.zh-professions',
      ritual: 'zweihander.zh-rituals',
      spell: 'zweihander.zh-magick',
      taint: 'zweihander.zh-taints',
      talent: 'zweihander.zh-talents',
      trapping: 'zweihander.zh-trappings',
      weapon: 'zweihander.zh-weapons, zweihander.zh-weapons-alt-damage',
      patron: 'zweihander.zh-patrons',
      outsider: 'zweihander.zh-outsiders',
      manifestations: 'zweihander.zh-odic-manifestations',
    },
    creature: {
      trait: 'zweihander.zh-creature-traits',
    },
    npc: {
      trait: 'zweihander.zh-creature-traits, zweihander.zh-ancestral-traits',
    },
    character: {
      trait: 'zweihander.zh-ancestral-traits',
    },
  }
};

ZWEI.archetypes = [
  { name: 'The Path of Bow & Blade', unlockedBonuses: ['CB', 'BB'], unlockedSkills: ['Athletics', 'Melee', 'Ranged', 'Toughness', 'Warfare'] }, 
  { name: 'The Path of Charm & Manipulation', unlockedBonuses: ['FB', 'WB'], unlockedSkills: ['Bargain', 'Charm', 'Guile', 'Leadership', 'Rumor'] }, 
  { name: 'The Path of Craft & Expertise', unlockedBonuses: ['IB', 'PB'], unlockedSkills: ['Education', 'Handle Animal', 'Heal', 'Navigation', 'Scrutinize', 'Strategy', 'Tradecraft', 'Handle Vehicle'] }, 
  { name: 'The Path of Od & Ritual', unlockedBonuses: ['IB', 'WB'], unlockedSkills: ['Bargain', 'Folklore', 'Odweft', 'Resolve', 'Wortcunning'] }, 
  { name: 'The Path of Shadow & Subterfuge', unlockedBonuses: ['AB', 'PB'], unlockedSkills: ['Awareness', 'Coordination', 'Disguise', 'Eavesdrop', 'Gamble', 'Skulduggery', 'Stealth', 'Survival'] }
];

ZWEI.injurySeverities = [
  { value: 0, label: 'Moderate' },
  { value: 1, label: 'Serious' },
  { value: 2, label: 'Grievous' },
];

ZWEI.outsiderCourts = [
  { value: 'Ignorance', label: 'Ignorance' },
  { value: 'Joy', label: 'Joy' },
  { value: 'Peace', label: 'Peace' },
  { value: 'Silence', label: 'Silence' },
  { value: 'Truth', label: 'Truth' },
  { value: 'Nameless', label: 'Nameless' },
];

ZWEI.outsiderLevels = [
  { value: 'Imp', label: 'Imp' },
  { value: 'Villein', label: 'Villein' },
  { value: 'Lord', label: 'Lord' },
];

ZWEI.outsiderContracts = [
  { value: 'Rapport', label: 'Rapport' },
  { value: 'Communion', label: 'Communion' },
  { value: 'Pact', label: 'Pact' },
];

ZWEI.weaponConditions = [
  { value: 0, label: 'Undamaged', description: '', damageModifier: '', hitModifier: '' },
  { value: 1, label: 'Worn', description: 'Suffer a ‒1 penalty to Total Damage and  a ‒10 Base Chance to hit.', damageModifier: '-1', hitModifier: '-10' },
  { value: 2, label: 'Frail', description: 'Suffer a ‒2 penalty to Total Damage and  a ‒20 Base Chance to hit.', damageModifier: '-2', hitModifier: '-20' },
  { value: 3, label: 'Ruined', description: 'Suffer a ‒3 penalty to Total Damage and  a ‒30 Base Chance to hit.', damageModifier: '-3', hitModifier: '-30' },
];

ZWEI.armorConditions = [
  { value: 0, label: 'Undamaged', description: '', thresholdModifier: '' },
  { value: 1, label: 'Worn', description: 'Subtract ‒1 from the Damage Threshold to a minimum of 1.', thresholdModifier: '-1' },
  { value: 2, label: 'Frail', description: 'Half the Damage Threshold to a minimum of 0.', thresholdModifier: '*.5' },
  { value: 3, label: 'Ruined', description: 'Doesn’t add to Damage Threshold at all', thresholdModifier: '*0' },
];

ZWEI.statusEffects = [
  {
    id: 'dead',
    label: 'EFFECT.StatusDead',
    icon: 'systems/zweihander/assets/icons/death-skull.svg',
  },
  {
    id: 'blind',
    label: 'EFFECT.StatusBlind',
    icon: 'systems/zweihander/assets/icons/sight-disabled.svg',
  },
  {
    id: 'choke',
    label: 'EFFECT.StatusChoked',
    icon: 'systems/zweihander/assets/icons/slipknot.svg',
  },
  {
    id: 'defenseless',
    label: 'EFFECT.StatusDefenseless',
    icon: 'systems/zweihander/assets/icons/broken-shield.svg',
  },
  {
    id: 'disarmed',
    label: 'EFFECT.StatusDisarmed',
    icon: 'systems/zweihander/assets/icons/sword-break.svg',
  },
  {
    id: 'helpless',
    label: 'EFFECT.StatusHelpless',
    icon: 'systems/zweihander/assets/icons/handcuffed.svg',
  },
  {
    id: 'inspired',
    label: 'EFFECT.StatusInspired',
    icon: 'systems/zweihander/assets/icons/armor-upgrade.svg',
  },
  {
    id: 'intimidated',
    label: 'EFFECT.StatusIntimidated',
    icon: 'systems/zweihander/assets/icons/armor-downgrade.svg',
  },
  {
    id: 'knocked',
    label: 'EFFECT.StatusKnockedOut',
    icon: 'systems/zweihander/assets/icons/knockout.svg',
  },
  {
    id: 'prone',
    label: 'EFFECT.StatusProne',
    icon: 'systems/zweihander/assets/icons/falling.svg',
  },
  {
    id: 'stun',
    label: 'EFFECT.StatusStunned',
    icon: 'systems/zweihander/assets/icons/stoned-skull.svg',
  },
  {
    id: 'surprised',
    label: 'EFFECT.StatusSurprised',
    icon: 'systems/zweihander/assets/icons/surprised.svg',
  },
  {
    id: 'burning',
    label: 'EFFECT.StatusBurning',
    icon: 'systems/zweihander/assets/icons/flame.svg',
  },
  {
    id: 'bleeding',
    label: 'EFFECT.StatusBleeding',
    icon: 'systems/zweihander/assets/icons/bleeding-wound.svg',
  },
];

export { ZWEI };

// this exact if statement guarantees vite will tree-shake this out in prod
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    ZWEI = newModule.ZWEI;
  });
}
