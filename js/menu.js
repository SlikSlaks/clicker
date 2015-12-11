var menuState={
	preload:function(){

	},
	create:function(){

		menuText=game.add.group();
		var text;
		text=game.add.text(game.world.centerX,40,'Battle',{font:'30px Arial',fill:'#000'});
		text.anchor.setTo(0.5, 0.5);
		text.scale.setTo(0.7,0.7);
		text.inputEnabled = true;
		text.events.onInputDown.add(playOn, this);
		text.events.onInputOver.add(overButton, this);
    	text.events.onInputOut.add(out, this);
    	menuText.add(text);

    	text=game.add.text(game.world.centerX,80,'Inventory',{font:'30px Arial',fill:'#000'});
		text.anchor.setTo(0.5, 0.5);
		text.scale.setTo(0.7,0.7);
		text.inputEnabled = true;
		text.events.onInputDown.add(inventoryOn, this);
		text.events.onInputOver.add(overButton, this);
    	text.events.onInputOut.add(out, this);
		menuText.add(text);

    	text=game.add.text(game.world.centerX,120,'Store',{font:'30px Arial',fill:'#000'});
		text.anchor.setTo(0.5, 0.5);
		text.scale.setTo(0.7,0.7);
		text.inputEnabled = true;
		text.events.onInputDown.add(storeOn, this);
		text.events.onInputOver.add(overButton, this);
    	text.events.onInputOut.add(out, this);    	
    	menuText.add(text);

	},
	update:function(){

	}
}

function playOn(button){
	clearMenu();
	game.state.start('play');
}

function overButton(button){
	button.scale.setTo(1,1);
}

function out(button){
	button.scale.setTo(0.7,0.7);
}

function inventoryOn(button){
	clearMenu();
	game.state.start('inventory');
}

function storeOn(button){
	//game.state.start('store');
}

function clearMenu(){
	menuText.forEach(function(item){
		item.destroy();
	},this);
}