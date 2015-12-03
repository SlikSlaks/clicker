var playState={
	
	preload:function(){
		
		game.load.image('button', 'assets/button.png');
		
	},
	
	
	create:function(){
		game.time.advancedTiming=true;
		game.stage.backgroundColor = '#fff';
		
		button = game.add.button(400, 300, 'button',actionOnClick, this);
		button.anchor.setTo(0.5, 0.5);	

		counter = 0;
		
	},
	
	update:function(){

	},
	
	

	
	render:function(){
		game.debug.text(this.time.fps || '--', 2, 14, "#000");

	}

		
}


	function actionOnClick () {
		counter++;
		console.log(counter);
	}
	
	