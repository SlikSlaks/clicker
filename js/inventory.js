var inventoryState={
	preload:function(){

	},
	create:function(){
		text=[];
		labels=[];
		over=[];
		colors={
			common:'#666',
			uncommon:'#090',
			rare:'#009'
		}
		inventoryUI=game.add.group();

		back=game.add.text(10,10,'Main Menu',{font:'20px Arial',fill:'#000'});
		back.inputEnabled = true;
		back.events.onInputDown.add(function(){
			clearInventoryVars();
			mainMenu();
		}, this);
		inventoryUI.add(back);

		coinsText=game.add.text(10,40,'Coins: ',{font:'20px Courier',fill:'#000'});
		coins=game.add.text(coinsText.x+coinsText.width,40,playerInfo.coins,{font:'20px Courier',fill:'#000'});

		sell=game.add.text(game.world.width-10,10,'Drag to Sell',{font:'40px Arial',fill:'#000'});
		sell.anchor.set(1,0);
		inventoryUI.add(sell);

		sellAllText=game.add.text(game.world.width-10,60,'Sell All Items',{font:'20px Arial',fill:'#000'});
		sellAllText.anchor.set(1,0);
		sellAllText.inputEnabled = true;
		sellAllText.events.onInputDown.add(sellAll, this);
		inventoryUI.add(sellAllText);

		weapon=game.add.text(10,70,'',{font:'20px Arial',fill:'#000'});
		weapon.name='weapon';
		weapon.inputEnabled = true;
		weapon.events.onInputDown.add(unequip,this);
		weapon.events.onInputOver.add(slotOver, this);
    	weapon.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.weapon){
			weapon.text='Weapon: '+playerInfo.equipment.weapon.rarity+" "+playerInfo.equipment.weapon.type;
			weapon.fill=colors[playerInfo.equipment.weapon.rarity];
		}else{
			weapon.text='Weapon: None';
		}
		
		inventoryUI.add(weapon);

		offhand=game.add.text(10,100,'',{font:'20px Arial',fill:'#000'});
		offhand.name='offhand';
		offhand.inputEnabled = true;
		offhand.events.onInputDown.add(unequip,this);
		offhand.events.onInputOver.add(slotOver, this);
    	offhand.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.offhand){
			offhand.text='Offhand: '+playerInfo.equipment.offhand.rarity+" "+playerInfo.equipment.offhand.type;
			offhand.fill=colors[playerInfo.equipment.offhand.rarity];
		}else{
			offhand.text='Offhand: None';
		}
		inventoryUI.add(offhand);

		helmet=game.add.text(10,130,'',{font:'20px Arial',fill:'#000'});
		helmet.name='helmet';
		helmet.inputEnabled = true;
		helmet.events.onInputDown.add(unequip,this);
		helmet.events.onInputOver.add(slotOver, this);
    	helmet.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.helmet){
			helmet.text='Helmet: '+playerInfo.equipment.helmet.rarity+" "+playerInfo.equipment.helmet.type;
			helmet.fill=colors[playerInfo.equipment.helmet.rarity];
		}else{
			helmet.text='Helmet: None';
		}
		inventoryUI.add(helmet);

		chestplate=game.add.text(10,160,'',{font:'20px Arial',fill:'#000'});
		chestplate.name='chestplate';
		chestplate.inputEnabled = true;
		chestplate.events.onInputDown.add(unequip,this);
		chestplate.events.onInputOver.add(slotOver, this);
    	chestplate.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.chestplate){
			chestplate.text='Chestplate: '+playerInfo.equipment.chestplate.rarity+" "+playerInfo.equipment.chestplate.type;
			chestplate.fill=colors[playerInfo.equipment.chestplate.rarity];
		}else{
			chestplate.text='Chestplate: None';
		}
		inventoryUI.add(chestplate);

		pants=game.add.text(10,190,'',{font:'20px Arial',fill:'#000'});
		pants.name='pants';
		pants.inputEnabled = true;
		pants.events.onInputDown.add(unequip,this);
		pants.events.onInputOver.add(slotOver, this);
    	pants.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.pants){
			pants.text='Pants: '+playerInfo.equipment.pants.rarity+" "+playerInfo.equipment.pants.type;
			pants.fill=colors[playerInfo.equipment.pants.rarity];
		}else{
			pants.text='Pants: None';
		}
		inventoryUI.add(pants);

		gloves=game.add.text(10,220,'',{font:'20px Arial',fill:'#000'});
		gloves.name='gloves';
		gloves.inputEnabled = true;
		gloves.events.onInputDown.add(unequip,this);
		gloves.events.onInputOver.add(slotOver, this);
    	gloves.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.gloves){
			gloves.text='Gloves: '+playerInfo.equipment.gloves.rarity+" "+playerInfo.equipment.gloves.type;
			gloves.fill=colors[playerInfo.equipment.gloves.rarity];
		}else{
			gloves.text='Gloves: None';
		}
		inventoryUI.add(gloves);

		boots=game.add.text(10,250,'',{font:'20px Arial',fill:'#000'});
		boots.name='boots';
		boots.inputEnabled = true;
		boots.events.onInputDown.add(unequip,this);
		boots.events.onInputOver.add(slotOver, this);
    	boots.events.onInputOut.add(slotOut, this);
		if(playerInfo.equipment.boots){
			boots.text='Boots: '+playerInfo.equipment.boots.rarity+" "+playerInfo.equipment.boots.type;
			boots.fill=colors[playerInfo.equipment.boots.rarity];
		}else{
			boots.text='Boots: None';
		}
		inventoryUI.add(boots);



		showInventory();

	},
	update:function(){

	}
}

function overItem(obj){
	obj.text=over[obj.ind];
	sell.text=playerInfo.inventory[text.indexOf(obj)].cost+' coins';
	if(playerInfo.inventory[text.indexOf(obj)].type=='weapon'){
		weapon.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='offhand'){
		offhand.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='helmet'){
		helmet.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='chestplate'){
		chestplate.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='pants'){
		pants.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='gloves'){
		gloves.fill='#a60';
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='boots'){
		boots.fill='#a60';
	}
	slotOver({name:playerInfo.inventory[text.indexOf(obj)].type});
}

function outItem(obj){
	obj.text=labels[obj.ind];
	sell.text="Sell";

/*
	weapon.fill='#000';
	offhand.fill='#000';
	helmet.fill='#000';
	chestplate.fill='#000';
	pants.fill='#000';
	gloves.fill='#000';
	boots.fill='#000';
	*/
	slotOut({name:playerInfo.inventory[text.indexOf(obj)].type});
}

function clearInventoryVars(){
	
	for(var i=0;i<text.length;i++){
		text[i].destroy();
	}
	for(var i=0;i<over.length;i++){
		over[i]=null;
	}
	for(var i=0;i<labels.length;i++){
		labels[i]=null;
	}
	back=null;
	text=null;
	over=null;
	labels=null;
}

function onDragStart(obj,pointer){
	obj.old_x=obj.x;
	obj.old_y=obj.y;
	sell.text=playerInfo.inventory[text.indexOf(obj)].cost+' coins';
	sell.fill='#a60';
	
}

function onDragStop(obj,pointer){

	obj.x=obj.old_x;
	obj.y=obj.old_y;
	sell.text="Sell";
	sell.fill='#000';
	if(obj.overlap(sell)){
		sellItem(obj);
		return;
	}

	if(playerInfo.inventory[text.indexOf(obj)].type=='weapon'&&obj.overlap(weapon)){
		if(playerInfo.equipment.weapon){
			playerInfo.inventory.push(playerInfo.equipment.weapon);
		}
		playerInfo.equipment.weapon=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		weapon.text="Weapon: "+playerInfo.equipment.weapon.rarity+" "+playerInfo.equipment.weapon.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='offhand'&&obj.overlap(offhand)){
		if(playerInfo.equipment.offhand){
			playerInfo.inventory.push(playerInfo.equipment.offhand);
		}
		playerInfo.equipment.offhand=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		offhand.text="Offhand: "+playerInfo.equipment.offhand.rarity+" "+playerInfo.equipment.offhand.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='helmet'&&obj.overlap(helmet)){
		if(playerInfo.equipment.helmet){
			playerInfo.inventory.push(playerInfo.equipment.helmet);
		}
		playerInfo.equipment.helmet=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		helmet.text="Helmet: "+playerInfo.equipment.helmet.rarity+" "+playerInfo.equipment.helmet.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='chestplate'&&obj.overlap(chestplate)){
		if(playerInfo.equipment.chestplate){
			playerInfo.inventory.push(playerInfo.equipment.chestplate);
		}
		playerInfo.equipment.chestplate=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		chestplate.text="Chestplate: "+playerInfo.equipment.chestplate.rarity+" "+playerInfo.equipment.chestplate.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='pants'&&obj.overlap(pants)){
		if(playerInfo.equipment.pants){
			playerInfo.inventory.push(playerInfo.equipment.pants);
		}
		playerInfo.equipment.pants=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		pants.text="Pants: "+playerInfo.equipment.pants.rarity+" "+playerInfo.equipment.pants.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='gloves'&&obj.overlap(gloves)){
		if(playerInfo.equipment.gloves){
			playerInfo.inventory.push(playerInfo.equipment.gloves);
		}
		playerInfo.equipment.gloves=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		gloves.text="Gloves: "+playerInfo.equipment.gloves.rarity+" "+playerInfo.equipment.gloves.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='boots'&&obj.overlap(boots)){
		if(playerInfo.equipment.boots){
			playerInfo.inventory.push(playerInfo.equipment.boots);
		}
		playerInfo.equipment.boots=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		boots.text="Boots: "+playerInfo.equipment.boots.rarity+" "+playerInfo.equipment.boots.type;
		obj.destroy();
		text.splice(text.indexOf(obj),1);
		showInventory();
		saveGameState();
		return;
	}


	
}

function sellItem(obj){
	playerInfo.coins+=playerInfo.inventory[text.indexOf(obj)].cost;
	plus(coins,playerInfo.inventory[text.indexOf(obj)].cost);
	playerInfo.inventory.splice(text.indexOf(obj),1);
	coins.text=playerInfo.coins;
	obj.destroy();
	text.splice(text.indexOf(obj),1);
	saveGameState();
	showInventory();
}

function showInventory(){
	for(var i=0;i<text.length;i++){
		text[i].destroy();
	}
	for(var i=0;i<over.length;i++){
		over[i]=null;
	}
	for(var i=0;i<labels.length;i++){
		labels[i]=null;
	}

	text=[];
	labels=[];
	over=[];

	var color='';
	for(var i=0;i<playerInfo.inventory.length;i++){
		labels[i]=''+playerInfo.inventory[i].rarity+' '+playerInfo.inventory[i].type+'( '+playerInfo.inventory[i].level+' level )';
		over[i]='';
		if(playerInfo.inventory[i].damage!=0)
			over[i]+='Damage: '+playerInfo.inventory[i].damage+" ";
		if(playerInfo.inventory[i].health!=0)
			over[i]+='Health: '+playerInfo.inventory[i].health;
		if(playerInfo.inventory[i].rarity=='common'){
			color='#666';
		}
		if(playerInfo.inventory[i].rarity=='uncommon'){
			color='#090';
		}
		if(playerInfo.inventory[i].rarity=='rare'){
			color='#009';
		}
		text[i]=game.add.text(game.world.centerX,i*20+20,labels[i],{font:'15px Courier',fill:color});
		text[i].anchor.setTo(0.5, 0.5);
		text[i].inputEnabled = true;
		text[i].input.enableDrag();
		text[i].events.onDragStart.add(onDragStart, this);
		text[i].events.onDragStop.add(onDragStop, this);
		//text[i].events.onInputDown.add(inventory, this);
		text[i].events.onInputOver.add(overItem, this);
    	text[i].events.onInputOut.add(outItem, this);
    	text[i].ind=i;

	}

}

function unequip(obj){
	if(obj.name=='weapon'){
		if(playerInfo.equipment.weapon){
			playerInfo.inventory.push(playerInfo.equipment.weapon);
		}
		playerInfo.equipment.weapon=null;
		obj.text="Weapon: None";

	}
	if(obj.name=='offhand'){
		if(playerInfo.equipment.offhand){
			playerInfo.inventory.push(playerInfo.equipment.offhand);
		}
		playerInfo.equipment.offhand=null;
		obj.text="Offhand: None";
	}
	if(obj.name=='helmet'){
		if(playerInfo.equipment.helmet){
			playerInfo.inventory.push(playerInfo.equipment.helmet);
		}
		playerInfo.equipment.helmet=null;
		obj.text="Helmet: None";
	}
	if(obj.name=='chestplate'){
		if(playerInfo.equipment.chestplate){
			playerInfo.inventory.push(playerInfo.equipment.chestplate);
		}
		playerInfo.equipment.chestplate=null;
		obj.text="Chestplate: None";
	}
	if(obj.name=='gloves'){
		if(playerInfo.equipment.gloves){
			playerInfo.inventory.push(playerInfo.equipment.gloves);
		}
		playerInfo.equipment.gloves=null;
		obj.text="Gloves: None";
	}
	if(obj.name=='pants'){
		if(playerInfo.equipment.pants){
			playerInfo.inventory.push(playerInfo.equipment.pants);
		}
		playerInfo.equipment.pants=null;
		obj.text="Pants: None";
	}
	if(obj.name=='boots'){
		if(playerInfo.equipment.boots){
			playerInfo.inventory.push(playerInfo.equipment.boots);
		}
		playerInfo.equipment.boots=null;
		obj.text="Boots: None";
	}
	saveGameState();
	showInventory();
}

function slotOver(obj){
	obj.fill="#400";
	if(obj.name=='weapon'&&playerInfo.equipment.weapon){
		weapon.text='Weapon:';
		if(playerInfo.equipment.weapon.damage!=0){
			weapon.text+=' damage : '+playerInfo.equipment.weapon.damage;
		}
		if(playerInfo.equipment.weapon.health!=0){
			weapon.text+=" health : "+playerInfo.equipment.weapon.health;
		}
	}
	if(obj.name=='offhand'&&playerInfo.equipment.offhand){
		offhand.text='Offhand:';
		if(playerInfo.equipment.offhand.damage!=0){
			offhand.text+=' damage : '+playerInfo.equipment.offhand.damage;
		}
		if(playerInfo.equipment.offhand.health!=0){
			offhand.text+=" health : "+playerInfo.equipment.offhand.health;
		}
	}
	if(obj.name=='helmet'&&playerInfo.equipment.helmet){
		helmet.text='Helmet:';
		if(playerInfo.equipment.helmet.damage!=0){
			helmet.text+=' damage : '+playerInfo.equipment.helmet.damage;
		}
		if(playerInfo.equipment.helmet.health!=0){
			helmet.text+=" health : "+playerInfo.equipment.helmet.health;
		}
	}
	if(obj.name=='chestplate'&&playerInfo.equipment.chestplate){
		chestplate.text='Chestplate:';
		if(playerInfo.equipment.chestplate.damage!=0){
			chestplate.text+=' damage : '+playerInfo.equipment.chestplate.damage;
		}
		if(playerInfo.equipment.chestplate.health!=0){
			chestplate.text+=" health : "+playerInfo.equipment.chestplate.health;
		}
	}
	if(obj.name=='gloves'&&playerInfo.equipment.gloves){
		gloves.text='Gloves:';
		if(playerInfo.equipment.gloves.damage!=0){
			gloves.text+=' damage : '+playerInfo.equipment.gloves.damage;
		}
		if(playerInfo.equipment.gloves.health!=0){
			gloves.text+=" health : "+playerInfo.equipment.gloves.health;
		}
	}
	if(obj.name=='pants'&&playerInfo.equipment.pants){
		pants.text='Pants:';
		if(playerInfo.equipment.pants.damage!=0){
			pants.text+=' damage : '+playerInfo.equipment.pants.damage;
		}
		if(playerInfo.equipment.pants.health!=0){
			pants.text+=" health : "+playerInfo.equipment.pants.health;
		}
	}
	if(obj.name=='boots'&&playerInfo.equipment.boots){
		boots.text='Boots:';
		if(playerInfo.equipment.boots.damage!=0){
			boots.text+=' damage : '+playerInfo.equipment.boots.damage;
		}
		if(playerInfo.equipment.boots.health!=0){
			boots.text+=" health : "+playerInfo.equipment.boots.health;
		}
	}
}

function slotOut(obj){

	if(obj.name=='weapon'&&playerInfo.equipment.weapon){
		weapon.text='Weapon: '+playerInfo.equipment.weapon.rarity+" "+playerInfo.equipment.weapon.type;
		weapon.fill=colors[playerInfo.equipment.weapon.rarity];
	}
	if(obj.name=='offhand'&&playerInfo.equipment.offhand){
		offhand.text='Offhand: '+playerInfo.equipment.offhand.rarity+" "+playerInfo.equipment.offhand.type;
		offhand.fill=colors[playerInfo.equipment.offhand.rarity];
	}
	if(obj.name=='helmet'&&playerInfo.equipment.helmet){
		helmet.text='Helmet: '+playerInfo.equipment.helmet.rarity+" "+playerInfo.equipment.helmet.type;
		helmet.fill=colors[playerInfo.equipment.helmet.rarity];
	}
	if(obj.name=='chestplate'&&playerInfo.equipment.chestplate){
		chestplate.text='Chestplate: '+playerInfo.equipment.chestplate.rarity+" "+playerInfo.equipment.chestplate.type;
		chestplate.fill=colors[playerInfo.equipment.chestplate.rarity];
	}
	if(obj.name=='gloves'&&playerInfo.equipment.gloves){
		gloves.text='Gloves: '+playerInfo.equipment.gloves.rarity+" "+playerInfo.equipment.gloves.type;
		gloves.fill=colors[playerInfo.equipment.gloves.rarity];
	}
	if(obj.name=='pants'&&playerInfo.equipment.pants){
		pants.text='Pants: '+playerInfo.equipment.pants.rarity+" "+playerInfo.equipment.pants.type;
		pants.fill=colors[playerInfo.equipment.pants.rarity];
	}
	if(obj.name=='boots'&&playerInfo.equipment.boots){
		boots.text='Boots: '+playerInfo.equipment.boots.rarity+" "+playerInfo.equipment.boots.type;
		boots.fill=colors[playerInfo.equipment.boots.rarity];
	}
	
}

function sellAll(){
	for(var i=text.length-1;i>=0;i--){
		sellItem(text[i]);
	}
}