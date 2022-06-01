import './style.css'
import '../lib.js'
import { MayoGL, Vector } from '../lib.js'

var disp = new MayoGL(document.getElementById("screen"),{width: window.innerWidth, height: window.innerHeight, alpha: true, clearColor: '#cefffd', pixelSize: 1, antiAlias: true})

window.onresize = function() {
	disp.resize(window.innerWidth, window.innerHeight)
}
var x=disp.width/2
var y=60
var wi=100
var h=100
var maxYVelocity = 100
var maxXVelocity = 50
var velocity = {x:0,y:1}
var clicked = false
disp.loop((d,delta,w)=>{
	d.clear()
	//need to implement stroke
	/* d.rect({
		x:d.width/2,
		y:d.height/2,
		w:d.width,
		h:d.height
	}) */
	//draginging
	if (d.mouse.down || clicked) {
		if (!d.mouse.down) {
			clicked = false
		} else if (d.mouse.x>=x-50 && d.mouse.x<=x+50 && d.mouse.y>=y-50 && d.mouse.y<=y+50  || clicked){
			velocity.x = (d.mouse.x - x)/2
			velocity.y = (d.mouse.y - y)/2
			clicked = true
		}
	} else {
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
