var playState={
	
	preload:function(){
		
		game.load.image('enemy', 'assets/enemy.png');
		game.load.image('respawn', 'assets/respawn.png');
		game.load.image('player', 'assets/player.png');
	},
	
	
	create:function(){

		game.time.advancedTiming=true;
		game.stage.backgroundColor = '#ccc';
		enemyRespawn=true;
		menu=game.add.text(10,10,'Main Menu',{font:'20px Arial',fill:'#000'});
		menu.visible=false;
		menu.inputEnabled = true;
		menu.events.onInputDown.add(mainMenu, this);
		menu.events.onInputUp.add(buttonUp, this);

		respawnStatus=game.add.text(game.world.centerX,40,'Respawn:ON',{font:'30px Courier',fill:'#000'});
		respawnStatus.anchor.setTo(0.5, 0.5);

		//respawnButton=game.add.button(game.world.centerX, 150, 'respawn',toggleRespawn, this);
		respawnButton=game.add.text(game.world.centerX,150,'respawn',{font:'30px Arial',fill:'#000'});
		respawnButton.anchor.setTo(0.5, 0.5);
		respawnButton.inputEnabled = true;
		respawnButton.events.onInputDown.add(toggleRespawn, this);
		respawnButton.events.onInputUp.add(buttonUp, this);

		potion={
			'heal':10,
			'cost':10,
			'upCost':100
		}

		playerHP=game.add.text(10,40,'',{font:'30px Courier',fill:'#000'});

		playerLevelText=game.add.text(10,80,'Level:',{font:'20px Courier',fill:'#000'});
		playerLevel=game.add.text(playerLevelText.x+playerLevelText.width,80,'0',{font:'20px Courier',fill:'#000'});
		playerXpText=game.add.text(10,120,'Exp:',{font:'20px Courier',fill:'#000'});
		playerXP=game.add.text(playerXpText.x+playerXpText.width,120,'0/10',{font:'20px Courier',fill:'#000'});
		playerDamage=game.add.text(10,160,'',{font:'20px Courier',fill:'#000'});
		playerCoinsText=game.add.text(10,200,'Coins: ',{font:'20px Courier',fill:'#000'});
		playerCoins=game.add.text(playerCoinsText.x+playerCoinsText.width,200,'',{font:'20px Courier',fill:'#000'});
		playerHeal=game.add.text(10,240,'Heal '+potion.heal+' HP ('+potion.cost+' coins )',{font:'20px Arial',fill:'#000'});
		playerHeal.inputEnabled = true;
		playerHeal.events.onInputDown.add(drinkPotion, this);
		playerHeal.events.onInputUp.add(buttonUp, this);
		playerHealUp=game.add.text(10,280,'Upgrade Potion('+potion.upCost+" coins )",{font:'20px Arial',fill:'#000'});
		playerHealUp.inputEnabled = true;
		playerHealUp.events.onInputDown.add(upgradePotion, this);
		playerHealUp.events.onInputUp.add(buttonUp, this);


		//player = game.add.button(100, game.world.centerY, 'player',foo, this);
		player=game.add.text(100,game.world.centerY+100,'player',{font:'30px Arial',fill:'#000'});
		player.anchor.setTo(0.5, 0.5);
		player.inputEnabled = true;
		player.events.onInputDown.add(drinkPotion, this);
		player.events.onInputUp.add(buttonUp, this);
		player.level=0;
		player.xp=0;
		player.nextLevel=Math.floor(10*Math.pow(1.1,player.level));
		player.damage=1;
		player.maxHealth=100;
		player.health=player.maxHealth;
		player.coins=0;
		playerCoins.text=player.coins;
		playerDamage.text="Damage:"+player.damage;
		player.inventory=[];

		enemyHP=game.add.text(game.world.width-10,40,'',{font:'30px Courier',fill:'#000'});
		enemyHP.anchor.setTo(1, 0);

		enemyLevel=game.add.text(game.world.width-10,80,'',{font:'20px Courier',fill:'#000'});
		enemyLevel.anchor.setTo(1, 0);
		enemyLevelText=game.add.text(enemyLevel.x-enemyLevel.width,80,'Level: ',{font:'20px Courier',fill:'#000'});
		enemyLevelText.anchor.setTo(1, 0);

		enemyDamage=game.add.text(game.world.width-10,120,'',{font:'20px Courier',fill:'#000'});
		enemyDamage.anchor.setTo(1, 0);
		enemyDamageText=game.add.text(enemyDamage.x-enemyDamage.width,120,'Damage: ',{font:'20px Courier',fill:'#000'});
		enemyDamageText.anchor.setTo(1, 0);


		//enemy = game.add.button(game.world.width-100, game.world.centerY, 'enemy',attack, this);
		enemy=game.add.text(game.world.width-100,game.world.centerY+100,'enemy',{font:'30px Arial',fill:'#000'});
		enemy.inputEnabled = true;
		enemy.events.onInputDown.add(attack, this);
		enemy.events.onInputUp.add(buttonUp, this);
		enemy.anchor.setTo(0.5, 0.5);
		enemy.level=1;
		enemy.damage=1;
		enemy.maxHealth=5;
		enemy.health=enemy.maxHealth;
		enemy.upCost=5;
		enemy.coins=1;
		enemy.rarity='normal';
		enemy.dropChance=10;
		enemyDamage.text="Damage:"+enemy.damage;
		enemyLevel.text=enemy.level;
		game.time.events.loop(Phaser.Timer.SECOND, enemyAttack, this);

		enemyUpText=game.add.text(game.world.width-10,160,'UP! cost:'+enemy.upCost,{font:'20px Arial',fill:'#000'});
		enemyUpText.anchor.setTo(1, 0);
		enemyUpText.inputEnabled = true;
		enemyUpText.events.onInputDown.add(enemyUp, this);
		enemyUpText.events.onInputUp.add(buttonUp, this);
		/*
		for(var i=0;i<100;i++){
			console.log("Level - "+(i+1)+" : "+Math.floor(10*Math.pow(1.1,i)));
		}
*/
		
	},
	
	update:function(){
		playerHP.text=player.health+"/"+player.maxHealth;
		enemyHP.text=enemy.health+"/"+enemy.maxHealth;
		menu.visible=!enemy.alive;


	},
	
	

	
	render:function(){
		//game.debug.text(this.time.fps || '--', 2, 14, "#000");

	}

		
}

	function enemyUp(button){
		buy(enemy.upCost);
		button.scale.setTo(0.7,0.7);
		enemy.level++;
		enemy.maxHealth+=5;
		enemy.health=enemy.maxHealth;
		enemy.damage++;
		enemy.coins++;
		enemy.upCost*=2;
		enemyDamage.text=enemy.damage;
		enemyLevel.text=enemy.level;
		enemyUpText.text="UP! cost:"+enemy.upCost;
	}
	function drinkPotion(button){
		buy(potion.cost);
		player.health+=potion.heal;
		button.scale.setTo(0.7,0.7);
	}
	function upgradePotion(button){
		buy(potion.upCost);
		potion.heal*=2;
		potion.cost*=2;
		potion.upCost*=2;
		playerHeal.text='Heal '+potion.heal+' HP ('+potion.cost+' coins )';
		playerHealUp.text='Upgrade Potion('+potion.upCost+" coins )";
		button.scale.setTo(0.7,0.7);
	}
	function buttonUp(button){
		button.scale.setTo(1,1);
	}

	function buy(itemCost){
		if(!player.alive)
			return;
		if(player.coins-itemCost<0)
			return;
		else
			player.coins-=itemCost;
		playerCoins.text=player.coins;
	}

	function attack (button) {
		if(!player.alive)
			return;
		button.scale.setTo(0.7,0.7);
		enemy.health-=player.damage;
		if(enemy.health<=0){
			kill(enemy);
			
		}
	}
	
	function enemyAttack(){
		if(!enemy.alive||!player.alive)
			return;
		player.health-=enemy.damage;
		if(player.health<=0){
			player.kill();
		}
	}

	function kill(enemy){
		enemy.kill();
		gainXP();
		respawn();
		gainDrop();
	}
	
	function respawn(){
		if(!enemyRespawn)
			return;

		enemy.reset(enemy.x,enemy.y);
		
		enemy.health=enemy.maxHealth;
		enemyDamage.text="Damage:"+enemy.damage;
		enemyLevel.text=enemy.level;
	}

	function toggleRespawn(button){
		button.scale.setTo(0.7,0.7);
		enemyRespawn=!enemyRespawn;
		respawn();
		respawnStatus.text='Respawn:'+(enemyRespawn?"ON":"OFF");
	}

	function gainXP(){
		player.xp+=enemy.level;
		plus(playerXP,enemy.level)
		//player.level=log(player.xp/10,1.1);
		if(player.xp>=player.nextLevel){
			levelUp();
		}
		
		playerXP.text=player.xp+"/"+player.nextLevel;
		playerLevel.text=player.level;

	}

	function levelUp(){
		player.level++;
		player.nextLevel+=Math.floor(10*Math.pow(1.5,player.level));
		player.damage++;
		player.maxHealth+=10;
		player.health+=10;
		playerDamage.text="Damage:"+player.damage;
		plus(playerLevel,1)
	}

	function log(number, base) {
    	return Math.log(number) / Math.log(base);
	}

	function plus(obj,num){
		if(num<0){
			num="-"+num;
		}else{
			num="+"+num;
		}
		var text=game.add.text(obj.x,obj.y-10,num,{font:'20px Courier',fill:'#000'});
		var textTween = game.add.tween(text).to( { y: text.y-20,alpha:0 }, 1000, "Linear", true);
		textTween.onComplete.add(function(){text.destroy();});
	}

	function gainDrop(){
		player.coins+=enemy.coins;
		playerCoins.text=player.coins;
		plus(playerCoins,enemy.coins)
		var chance=game.rnd.integerInRange(0,100);
		if(chance<=enemy.dropChance){
			player.inventory.push(generateItem(enemy));
			plus({x:game.world.centerX,y:game.world.centerY}," "+player.inventory[player.inventory.length-1].rarity+" "+player.inventory[player.inventory.length-1].type);
		}
	}

	function mainMenu(){
		game.state.start('menu');
	}

	function generateItem(enemy){
		var item={};
		var type=['weapon','shield','helmet','chest','pants','arms','boots'];
		item.type=game.rnd.pick(type);
		var rarity=['common','uncommon','rare'];
		if(enemy.rarity=='normal'){
			var rarityChance=game.rnd.integerInRange(0,100);
			if(rarityChance<=80){
				item.rarity='common';
			}else{
				item.rarity='uncommon';
			}
		}
		item.level=enemy.level-game.rnd.integerInRange(0,5);
		if(item.level<=0)
			item.level=1;

		item.damage=game.rnd.integerInRange(1,item.level);
		item.health=game.rnd.integerInRange(1,item.level*4);

		if(item.rarity=='uncommon'){
			item.damage+=game.rnd.integerInRange(1,Math.ceil(item.level/4));
			item.health+=game.rnd.integerInRange(1,item.level*4/4);
		}
		if(item.type=='weapon'){
			item.health=0;
		}else{
			item.damage=0;
		}
		item.cost=item.damage*8+item.health*2;
		return item;
		/*
		var item={
			'type':game.rnd.pick(type),
			'rarity':'common',
			'level':1,
			'damage':3,
			'health':0,
			'regen':0,
			'defence':0,
			'cost':10
		}
		*/
	}