var profileState={
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
		profileUI=game.add.group();

		back=game.add.text(10,10,'Main Menu',{font:'20px Arial',fill:'#000'});
		back.inputEnabled = true;
		back.events.onInputDown.add(function(){
			clearInventoryVars();
			mainMenu();
		}, this);
		profileUI.add(back);

		statPointsText=game.add.text(10,40,'Free points: ',{font:'20px Courier',fill:'#000'});
		statPoints=game.add.text(statPointsText.x+statPointsText.width,40,playerInfo.statPoints,{font:'20px Courier',fill:'#000'});


		strText=game.add.text(10,80,'STR: ',{font:'20px Courier',fill:'#000'});
		str=game.add.text(strText.x+strText.width,80,playerInfo.str+ " + "+(playerStr()-playerInfo.str),{font:'20px Courier',fill:'#000'});
		plusStr=game.add.text(str.x+str.width+20,80,'+',{font:'20px Arial',fill:'#000'});
		plusStr.inputEnabled = true;
		plusStr.events.onInputDown.add(upStr, this);
		plusStr.events.onInputUp.add(buttonUp, this);
		
		dexText=game.add.text(10,120,'DEX: ',{font:'20px Courier',fill:'#000'});
		dex=game.add.text(dexText.x+dexText.width,120,playerInfo.dex+ " + "+(playerDex()-playerInfo.dex),{font:'20px Courier',fill:'#000'});
		plusDex=game.add.text(dex.x+dex.width+20,120,'+',{font:'20px Arial',fill:'#000'});
		plusDex.inputEnabled = true;
		plusDex.events.onInputDown.add(upDex, this);
		plusDex.events.onInputUp.add(buttonUp, this);

		intelligenceText=game.add.text(10,160,'INT: ',{font:'20px Courier',fill:'#000'});
		intelligence=game.add.text(intelligenceText.x+intelligenceText.width,160,playerInfo.int+ " + "+(playerInt()-playerInfo.int),{font:'20px Courier',fill:'#000'});
		plusIntelligence=game.add.text(intelligence.x+intelligence.width+20,160,'+',{font:'20px Arial',fill:'#000'});
		plusIntelligence.inputEnabled = true;
		plusIntelligence.events.onInputDown.add(upInt, this);
		plusIntelligence.events.onInputUp.add(buttonUp, this);

	},
	update:function(){


	}
}

function upStr(button){
	if(playerInfo.statPoints>0){
		playerInfo.str++;
		playerInfo.statPoints--;
		button.scale.setTo(0.7,0.7);
		str.text=playerInfo.str+ " + "+(playerStr()-playerInfo.str);
		statPoints.text=playerInfo.statPoints;
		saveGameState();
		return;
	}
		
}

function upDex(button){
	if(playerInfo.statPoints>0){
		playerInfo.dex++;
		playerInfo.statPoints--;
		button.scale.setTo(0.7,0.7);
		dex.text=playerInfo.dex+ " + "+(playerDex()-playerInfo.dex);
		statPoints.text=playerInfo.statPoints;
		saveGameState();
	}
		
}
function upInt(button){
	if(playerInfo.statPoints>0){
		playerInfo.int++;
		playerInfo.statPoints--;
		button.scale.setTo(0.7,0.7);
		intelligence.text=playerInfo.int+ " + "+(playerInt()-playerInfo.int);
		statPoints.text=playerInfo.statPoints;
		saveGameState();
	}
		
}
