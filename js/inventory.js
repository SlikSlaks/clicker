var inventoryState={
	preload:function(){

	},
	create:function(){
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

		sell=game.add.text(game.world.width-10,10,'Sell',{font:'30px Arial',fill:'#000'});
		sell.anchor.set(1,0);
		inventoryUI.add(sell);

		weapon=game.add.text(10,70,'',{font:'20px Arial',fill:'#000'});
		weapon.name='weapon';
		weapon.inputEnabled = true;
		weapon.events.onInputDown.add(unequip,this);
		if(playerInfo.equipment.weapon){
			weapon.text='Weapon: '+playerInfo.equipment.weapon.rarity+" "+playerInfo.equipment.weapon.type;
		}else{
			weapon.text='Weapon: None';
		}
		
		inventoryUI.add(weapon);

		offhand=game.add.text(10,100,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.offhand){
			offhand.text='Offhand: '+playerInfo.equipment.offhand.rarity+" "+playerInfo.equipment.offhand.type;
		}else{
			offhand.text='Offhand: None';
		}
		inventoryUI.add(offhand);

		helmet=game.add.text(10,130,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.helmet){
			helmet.text='Helmet: '+playerInfo.equipment.helmet.rarity+" "+playerInfo.equipment.helmet.type;
		}else{
			helmet.text='Helmet: None';
		}
		inventoryUI.add(helmet);

		chestplate=game.add.text(10,160,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.chestplate){
			chestplate.text='Chestplate: '+playerInfo.equipment.chestplate.rarity+" "+playerInfo.equipment.chestplate.type;
		}else{
			chestplate.text='Chestplate: None';
		}
		inventoryUI.add(chestplate);

		pants=game.add.text(10,190,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.pants){
			pants.text='Pants: '+playerInfo.equipment.pants.rarity+" "+playerInfo.equipment.pants.type;
		}else{
			pants.text='Pants: None';
		}
		inventoryUI.add(pants);

		gloves=game.add.text(10,220,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.gloves){
			gloves.text='Gloves: '+playerInfo.equipment.gloves.rarity+" "+playerInfo.equipment.gloves.type;
		}else{
			gloves.text='Gloves: None';
		}
		inventoryUI.add(gloves);

		boots=game.add.text(10,250,'',{font:'20px Arial',fill:'#000'});
		if(playerInfo.equipment.boots){
			boots.text='Boots: '+playerInfo.equipment.boots.rarity+" "+playerInfo.equipment.boots.type;
		}else{
			boots.text='Boots: None';
		}
		inventoryUI.add(boots);

		text=[];
		labels=[];
		over=[];

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
	if(playerInfo.inventory[text.indexOf(obj)].type=='shield'){
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
}

function outItem(obj){
	obj.text=labels[obj.ind];
	sell.text="Sell";

	weapon.fill='#000';
	offhand.fill='#000';
	helmet.fill='#000';
	chestplate.fill='#000';
	pants.fill='#000';
	gloves.fill='#000';
	boots.fill='#000';
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
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='shield'&&obj.overlap(offhand)){
		if(playerInfo.equipment.offhand){
			playerInfo.inventory.push(playerInfo.equipment.offhand);
		}
		playerInfo.equipment.offhand=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		offhand.text="Offhand: "+playerInfo.equipment.offhand.rarity+" "+playerInfo.equipment.offhand.type;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='helmet'&&obj.overlap(helmet)){
		if(playerInfo.equipment.helmet){
			playerInfo.inventory.push(playerInfo.equipment.helmet);
		}
		playerInfo.equipment.helmet=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		helmet.text="Helmet: "+playerInfo.equipment.helmet.rarity+" "+playerInfo.equipment.helmet.type;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='chestplate'&&obj.overlap(chestplate)){
		if(playerInfo.equipment.chestplate){
			playerInfo.inventory.push(playerInfo.equipment.chestplate);
		}
		playerInfo.equipment.chestplate=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		chestplate.text="Chestplate: "+playerInfo.equipment.chestplate.rarity+" "+playerInfo.equipment.chestplate.type;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='pants'&&obj.overlap(pants)){
		if(playerInfo.equipment.pants){
			playerInfo.inventory.push(playerInfo.equipment.pants);
		}
		playerInfo.equipment.pants=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		pants.text="Pants: "+playerInfo.equipment.pants.rarity+" "+playerInfo.equipment.pants.type;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='gloves'&&obj.overlap(gloves)){
		if(playerInfo.equipment.gloves){
			playerInfo.inventory.push(playerInfo.equipment.gloves);
		}
		playerInfo.equipment.gloves=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		gloves.text="Gloves: "+playerInfo.equipment.gloves.rarity+" "+playerInfo.equipment.gloves.type;
	}
	if(playerInfo.inventory[text.indexOf(obj)].type=='boots'&&obj.overlap(boots)){
		if(playerInfo.equipment.boots){
			playerInfo.inventory.push(playerInfo.equipment.boots);
		}
		playerInfo.equipment.boots=playerInfo.inventory[text.indexOf(obj)];
		playerInfo.inventory.splice(text.indexOf(obj),1);
		boots.text="Boots: "+playerInfo.equipment.boots.rarity+" "+playerInfo.equipment.boots.type;
	}

	saveGameState();
	showInventory();
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


}