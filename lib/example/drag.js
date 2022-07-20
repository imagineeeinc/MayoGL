import './style.css'
import '../lib.js'
import { MayoGL, Vector } from '../lib.js'

var disp = new MayoGL(document.getElementById("screen"),{width: window.innerWidth, height: window.innerHeight, alpha: true, clearColor: '#cefffd', antiAlias: true})

window.onresize = function() {
	disp.resize(window.innerWidth, window.innerHeight)
}
function buttonPressed(b) {
	if (typeof(b) == "object") {
		return b.pressed;
	}
	return b == 1.0;
  }
  function gamepad() {
	const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
	if (!gamepads[0]) {
		return;
	}
  
	const gp = gamepads[0];
	if (buttonPressed(gp.buttons[0])) {
		a++;
	} else {
		a = 0;
	}
	if (a >= 1 && gp.axes[0] != 0) {
		jx = gp.axes[0]
		heldx += 1*jx
	} else {
		jx = null
		heldx = 0
	}
	if (a >= 1 && gp.axes[1] != 0) {
		jy = gp.axes[1]
		heldy += 1*jy
	} else {
		jy = null
		heldy = 0
	}
	if (heldx > 20) heldx = 20
	if (heldy > 20) heldy = 20
	if (heldx < -20) heldx = -20
	if (heldy < -20) heldy = -20
  }
var x=disp.width/2
var y=60
var wi=100
var h=100
var jx = null
var heldx = 0
var jy = null
var heldy = 0
var maxYVelocity = 100
var maxXVelocity = 50
var velocity = {x:0,y:1}
var clicked = false
var a = 0
disp.loop((d,delta,w)=>{
	d.rect({x:window.innerWidth/2,y:window.innerHeight/2,w:window.innerWidth,h:window.innerHeight,color:'rgba(206,255,253,0.3)'})
	//need to implement stroke
	/* d.rect({
		x:d.width/2,
		y:d.height/2,
		w:d.width,
		h:d.height
	}) */
	//gamepad
	gamepad()
	//draginging
	if (d.mouse.down || clicked) {
		if (!d.mouse.down && a == 0) {
			clicked = false
		} else if (d.mouse.x>=x-50 && d.mouse.x<=x+50 && d.mouse.y>=y-50 && d.mouse.y<=y+50  || clicked){
			velocity.x = (d.mouse.x - x)/2
			velocity.y = (d.mouse.y - y)/2
			clicked = true
		}
	} else if (a >= 1) {
		velocity.x = jx+heldx
		velocity.y = jy+heldy
	}else {
		clicked = false
		if (y+50>=d.height){
			velocity.x -= velocity.x/4
		} else {
			velocity.x -= velocity.x/15
		}
	}
	//y calculations
	y += velocity.y
	if(velocity.y>maxYVelocity){
		velocity.y = maxYVelocity
	}
	if(velocity.y<-(maxYVelocity/4)){
		velocity.y = -(maxYVelocity/4)
	}
	velocity.y += 1
	if (y+(h/2)>=d.height){
		velocity.y=0
		y=d.height-(h/2)
	} else if (y-(h/2)<=0){
		velocity.y=0
		y=(h/2)+1
	}
	//x calculations
	x += velocity.x
	if(velocity.x>maxXVelocity){
		velocity.x = maxXVelocity
	}
	if (x+(wi/2)>=d.width){
		velocity.x=0
		x=d.width-(wi/2)
	} else if (x-(wi/2)<=0){
		velocity.x=0
		x=wi/2
	}
	//drawing
	d.rect({x:x,y:y,w:wi,h:h,color:d.color(10,20,30)})
	//grass
	d.line({
		x:0,
		y:d.height-5,
		x2:d.width,
		y2:d.height-5,
		color:d.color(0, 225, 87),
		w:10
	})
})

window.addEventListener("gamepadconnected", function(e) {
	console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
		e.gamepad.index, e.gamepad.id,
		e.gamepad.buttons.length, e.gamepad.axes.length);
  });
  window.addEventListener("gamepaddisconnected", function(e) {
	console.log("Gamepad disconnected from index %d: %s",
		e.gamepad.index, e.gamepad.id);
  });