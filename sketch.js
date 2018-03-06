// custom p5js
let face;
let x = 0, y = 0;

function preload(){
	face = createImg("images/head.gif");
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	let w = windowWidth/10;
	let h = 2*w;
	face.size(w,h);
	face.class('unclickable');
    
    
}

function draw(){
	//x = mouseX - (face.width / 2);  //for proper offset so mouse comes from center of gif
	//y = mouseY - (face.height / 2);
    
    //testing
    x = 00;
    y = 00;
	face.position(x,y);
}

function windowResized() {
    w = windowWidth/10;
	h = 2*w;
	face.size(w,h);
  //resizeCanvas(windowWidth, windowHeight);
}
