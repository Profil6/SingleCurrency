Hooks.on('renderActorSheet5eCharacter', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="data.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="data.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="data.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="data.currency.pp"]').remove();
});

Hooks.on('renderLootSheet5eNPC', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="data.currency.cp.value"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="data.currency.sp.value"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="data.currency.ep.value"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="data.currency.pp.value"]').remove();
});

Hooks.on('renderActorSheet5eVehicle', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="data.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="data.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="data.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="data.currency.pp"]').remove();
});

Hooks.on('renderItemSheet5eWithBags', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="data.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="data.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="data.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="data.currency.pp"]').remove();
});

// TODO TODO add links to journal entry







// Hooks.on('renderActorSheet5eVehicle', (sheet, html) => {
//   html.find('.denomination.ep').remove();
//   html.find('[name="data.currency.ep"]').remove();
// });

// Container
// Backpack

// Hooks.on('renderTidy5eSheet', (sheet, html) => {
//     html.find('.denomination.ep').parent().remove();
//     html.find('.denomination.ep').remove();
//     html.find('[name="data.currency.ep"]').remove();
// });
// Hooks.on('renderDNDBeyondCharacterSheet5e', (sheet, html) => {
//   html.find('.denomination.ep').remove();
//   html.find('[name="data.currency.ep"]').remove();
// });

// Hooks.once('ready', () => {
//   CONFIG.Actor.sheetClasses.character['dnd5e.ActorSheet5eCharacter'].cls.prototype._onConvertCurrency = _onMyConvertCurrency;
// });

//   function _onMyConvertCurrency(event) {
//     event.preventDefault();
//     const curr = duplicate(this.actor.data.data.currency);
//     console.log(curr);
//     const convert = {
//       cp: {into: "sp", each: 10},
//       sp: {into: "gp", each: 100},
//       gp: {into: "pp", each: 100}
//     };
//     for ( let [c, t] of Object.entries(convert) ) {
//       let change = Math.floor(curr[c] / t.each);
//       curr[c] -= (change * t.each);
//       curr[t.into] += change;
//     }
//     return this.actor.update({"data.currency": curr});
//  };
