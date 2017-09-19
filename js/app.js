// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	//var obj=Object.create(Enemy.prototype);
    this.sprite = 'images/enemy-bug.png';
	this.x=x;
	this.y=y;
	this.speed=getRandomNum(0,100);
	//console.log(this.speed);
	
	//return obj;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	//this.location=this.location*this.speed*dt;
	if(this.x>=505){
		this.reset();
		return;
		//new Enemy(this.x,this.y);
		//this.speed=getRandomNum(40,100);
		//console.log(this.speed);
		//this.render;
	   }
	this.speed+=getRandomNum(0,30);
	
	if(this.x<0)
		this.speed+=10;
	
	this.x=this.x+(this.speed*dt);
	//console.log("onse");
	//this.render;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.reset=function(){
	this.x=-100;
	this.y=getRandomNum(60,220);
	this.speed=getRandomNum(40,100);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
	this.location=0;
	this.speed=0;
	this.x=x;
	this.y=y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.location=this.location*this.speed*dt;
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
	var xy=this.y;
	switch(key){

		   case 'left':
			if(this.x<=400 && this.x>=0){
				if(this.x===400||this.x===300||this.x===200||this.x===100)
				this.x-=100;
				this.render;
				break;
			}	
			
			case 'right':
			if(this.x<=400 && this.x>=0){
				if(this.x===300||this.x===200||this.x===100||this.x===0)
				this.x+=100;
				this.render;
				break;
			}	
			
			case 'up':
			if(this.y<=400 && this.y>=50){
				//console.log(this.y);
				this.y=changeHight(xy,"up");;
				if(this.y===400){
					//console.log("y is 4--");
					var x1=document.getElementsByTagName("h1")[0];
					var a = parseInt(x1.innerHTML)+1;
					x1.innerHTML=a;
					//p.innerHTML+=1;
					this.x=200;
				}
				//this.render;
				break;
			}
			case 'down':
			if(this.y<400 && this.y>=50){
			   	this.y=changeHight(xy,"down");;
				//console.log(this.y);
				this.render;
				break;
			  }
	}
	
	
};
Player.prototype.reset=function(){
	this.x=200;
	this.y=400;
};


function changeHight(hight,where){
	
	var num=-1;
	if(where === "up"){
		
			switch(hight){
					
					case 400:
						num = hight-100;
						
								
					case 300:
						num = hight-70;
						
				
					case 230:
						num = hight-80;
				
					case 150:
						num = hight-100;
						break;
					default:
						num = 400;
		    }
	}
	
	else{
		
			switch(hight){
					
					case 50:
						num = hight+100;

					case 150:
						num = hight+80;
				
					case 230:
						num = hight+70;
					

					case 300:
						num = hight+100;
					
			}
			
		}
	
	return num;
	
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,300);

//-2,
var allEnemies = [];

function putEnemies () {
	
  allEnemies.push(new Enemy(-100, 60));
  allEnemies.push(new Enemy(-100, 100));
  allEnemies.push(new Enemy(-100,140));
  allEnemies.push(new Enemy(-100,180));
  allEnemies.push(new Enemy(-100,220));
};

putEnemies();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	//console.log(allowedKeys[e.keyCode]);
    player.handleInput(allowedKeys[e.keyCode]);
});
