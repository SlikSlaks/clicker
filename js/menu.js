var menuState={
	preload:function(){

	},
	create:function(){
		battleText=game.add.text(game.world.centerX,40,'Battle',{font:'30px Arial',fill:'#000'});
		battleText.anchor.setTo(0.5, 0.5);
		battleText.scale.setTo(0.7,0.7);
		battleText.inputEnabled = true;
		battleText.events.onInputDown.add(play, this);
		battleText.events.onInputOver.add(over, this);
    	battleText.events.onInputOut.add(out, this);


    	inventoryText=game.add.text(game.world.centerX,80,'Inventory',{font:'30px Arial',fill:'#000'});
		inventoryText.anchor.setTo(0.5, 0.5);
		inventoryText.scale.setTo(0.7,0.7);
		inventoryText.inputEnabled = true;
		inventoryText.events.onInputDown.add(inventoryOn, this);
		inventoryText.events.onInputOver.add(over, this);
    	inventoryText.events.onInputOut.add(out, this);

    	storeText=game.add.text(game.world.centerX,120,'Store',{font:'30px Arial',fill:'#000'});
		storeText.anchor.setTo(0.5, 0.5);
		storeText.scale.setTo(0.7,0.7);
		storeText.inputEnabled = true;
		storeText.events.onInputDown.add(storeOn, this);
		storeText.events.onInputOver.add(over, this);
    	storeText.events.onInputOut.add(out, this);
	},
	update:function(){

	}
}

function play(button){
	game.state.start('play');
}

function over(button){
	button.scale.setTo(1,1);
}

function out(button){
	button.scale.setTo(0.7,0.7);
}

function inventoryOn(button){
	game.state.start('inventory');
}

function storeOn(button){
	//game.state.start('store');
}