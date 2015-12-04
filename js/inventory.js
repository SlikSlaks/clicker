var inventoryState={
	preload:function(){

	},
	create:function(){
		back=game.add.text(10,10,'Main Menu',{font:'20px Arial',fill:'#000'});
		back.inputEnabled = true;
		back.events.onInputDown.add(function(){game.state.start('menu')}, this);
		text=[];
		labels=[];
		over=[];
		color='';
		for(var i=0;i<player.inventory.length;i++){
			labels[i]=''+player.inventory[i].rarity+' '+player.inventory[i].type+'( '+player.inventory[i].level+' level )';
			over[i]='';
			if(player.inventory[i].damage!=0)
				over[i]+='Damage: '+player.inventory[i].damage+' | ';
			if(player.inventory[i].health!=0)
				over[i]+='Health: '+player.inventory[i].health;
			if(player.inventory[i].rarity=='common'){
				color=='#999';
			}
			if(player.inventory[i].rarity=='uncommon'){
				color=='#090';
			}
			if(player.inventory[i].rarity=='uncommon'){
				color=='#009';
			}
			text[i]=game.add.text(game.world.centerX,i*20+20,labels[i],{font:'15px Courier',fill:color});
			text[i].anchor.setTo(0.5, 0.5);
			text[i].inputEnabled = true;
			//text[i].events.onInputDown.add(inventory, this);
			text[i].events.onInputOver.add(overItem, this);
	    	text[i].events.onInputOut.add(outItem, this);
	    	text[i].ind=i;
		}
	},
	update:function(){

	}
}

function overItem(button){
	button.text=over[button.ind];
}

function outItem(button){
	button.text=labels[button.ind];
}
