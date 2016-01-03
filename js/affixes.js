// strongSword = sword + strong * lvl * rnd(0.8-1.2)
affixes = [];
template = {
	name : "template",
	rarity : "", //uncommon , rare 
	usage : "", // weapon, armor(offhand, helmet, chesplate, pants, gloves, boots)
	dmg : 0,
	defence : 0,
	health : 0,
	str : 0,
	dex : 0,
	'int' : 0,
	hpReg : 0,
	dodge : 0,
	critChance : 0,
	critDmg : 0,
	strMod : 0, // str atack modifier 
	dexMod : 0, // dex atack modifier
	intMod : 0, // int atack modifier

}
//--------------UNCOMMON WEAPON--------------------------------------
strong = template;
strong.name = "strong";
strong.rarity = "uncommon";
strong.usage = "weapon";
strong.str = 1.2;
affixes.push(strong);
	
durable = template;
durable.name = "durable";
durable.rarity = "uncommon";
durable.usage = "weapon";
durable.str = 2;
affixes.push(durable);

tiny = template;
tiny.name = "tiny";
tiny.rarity = "uncommon";
tiny.usage = "weapon";
tiny.dmg = 1;
tiny.dex = 1;
affixes.push(tiny);

light = template;
light.name = "light";
light.rarity = "uncommon";
light.usage = "weapon";
light.dex = 2;
affixes.push(light);

big = template;
big.name = "big";
big.rarity = "uncommon";
big.usage = "weapon";
big.dmg = 2;
big.str = 1;
affixes.push(big);

wise = template;
wise.name = "wise";
wise.rarity = "uncommon";
wise.usage = "weapon";
wise['int'] = 2;
affixes.push(wise);

sharp = template;
sharp.name = "sharp";
sharp.rarity = "uncommon";
sharp.usage = "weapon";
sharp.dmg = 2;
affixes.push(sharp);


//--------------RARE WEAPON------------------------------------------

cruel = template;
cruel.name = "cruel";
cruel.rarity = "rare";
cruel.usage = "weapon";
cruel.str = 2;
cruel.critDmg = 2;
affixes.push(cruel);

deadly = template;
deadly.name = "deadly";
deadly.rarity = "rare";
deadly.usage = "weapon";
deadly.dex = 3;
deadly.critDmg = 5;
affixes.push(deadly);

//--------------UNCOMMON ARMOR---------------------------------------

warm = template;
warm.name = "warm";
warm.rarity = "uncommon";
warm.usage = "armor";
warm.health = 5;
warm.hpReg = 1;
affixes.push(warm);

iron = template;
iron.name = "iron";
iron.rarity = "uncommon";
iron.usage = "armor";
iron.defence = 2;
iron.health = 10;
affixes.push(iron);

//--------------RARE ARMOR------------------------------------------

steel = template;
steel.name = "steel";
steel.rarity = "rare";
steel.usage = "armor";
steel.defence = 3;
steel.health = 20;
steel.str = 3;
affixes.push(steel);
