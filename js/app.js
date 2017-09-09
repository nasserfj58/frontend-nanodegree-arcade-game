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
	this.speed=getRandomNum(40,100);
	console.log(this.speed);
	
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
		this.x=-100;
		//new Enemy(this.x,this.y);
		this.speed+=getRandomNum(30,100);
		console.log(this.speed);
		//this.render;
		
	   }
	this.x=this.x+(this.speed*dt);
	console.log("onse");
	//this.render;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
	//console.log(this.x,this.y);
};

Player.prototype.handleInput = function(key){
	//console.log(this.y);
	var xy=this.y;
	switch(key){
			
			
			
		   case 'left':
			if(this.x<=400 && this.x>=0){
				if(this.x==400||this.x==300||this.x==200||this.x==100)
				this.x-=100;
				this.render;
				break;
			}	
			
			case 'right':
			if(this.x<=400 && this.x>=0){
				if(this.x==300||this.x==200||this.x==100||this.x==0)
				this.x+=100;
				this.render;
				break;
			}	
			
			case 'up':
			if(this.y<=400 && this.y>=50){
				console.log(this.y);
				this.y=changeHight(xy,"up");;
				if(this.y===400){
					console.log("y is 4--");
					var p=document.getElementsByTagName("p")[0];
					var a = parseInt(p.innerHTML)+1;
					p.innerHTML=a;
					//p.innerHTML+=1;
					this.x=200;
				}
				this.render;
				break;
			}
			case 'down':
			if(this.y<400 && this.y>=50){
			   	this.y=changeHight(xy,"down");;
				console.log(this.y);
				this.render;
				break;
			  }
			
	}
	
	
};

function changeHight(hight,where){
	console.log(hight);
	if(where === "up"){
		
			switch(hight){
					
					case 400:
						return hight-100;
						break;
								
					case 300:
						return hight-70;
						break;
				
					case 230:
						return hight-80;
						break;
				
					case 150:
						return hight-100;
						break;
					default:
						return 400;
				
		    }
	}
	else{
		
			switch(hight){
					
					case 50:
						return hight+100;
						break;

					case 150:
						return hight+80;
						break;

					case 230:
						return hight+70;
						break;

					case 300:
						return hight+100;
						break;
					
			}
			
		}
	
}
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,400);

//-2,
var allEnemies = [];
function putEnemies () {
  allEnemies.push(new Enemy(-100, 60));
  allEnemies.push(new Enemy(-100, 100));
 // allEnemies.push(new Enemy(-100, 80));
//  allEnemies.push(new Enemy(-100, 120));
  allEnemies.push(new Enemy(-100,140));
	allEnemies.push(new Enemy(-100,190));
	
  allEnemies.push(new Enemy(-100,230));
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
