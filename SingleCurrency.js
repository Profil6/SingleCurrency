Hooks.on('renderActorSheet5eCharacter', (sheet, html) => {
  html.find('.currency-convert.rollable').remove()
  html.find('.denomination.cp').remove();
  html.find('[name="system.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="system.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="system.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="system.currency.pp"]').remove();
});

Hooks.on('renderLootSheet5eNPC', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="system.currency.cp.value"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="system.currency.sp.value"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="system.currency.ep.value"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="system.currency.pp.value"]').remove();
});

Hooks.on('renderActorSheet5eVehicle', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="system.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="system.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="system.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="system.currency.pp"]').remove();
});

Hooks.on('renderItemSheet5eWithBags', (sheet, html) => {
  html.find('.denomination.cp').remove();
  html.find('[name="system.currency.cp"]').remove();
  html.find('.denomination.sp').remove();
  html.find('[name="system.currency.sp"]').remove();
  html.find('.denomination.ep').remove();
  html.find('[name="system.currency.ep"]').remove();
  html.find('.denomination.pp').remove();
  html.find('[name="system.currency.pp"]').remove();
});