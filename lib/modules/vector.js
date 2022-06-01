export const MayoVector = class Vector {
	constructor(x,y) {
			this.x = x
			this.y = y
			return this
	}
	get() {
			return {x:this.x,y:this.y}
	}
	set(x,y) {
			this.x = x
			this.y = y
			return this
	}
	add(v) {
			this.x += v.get().x
			this.y += v.get().y
			return this
	}
	sub(v) {
			this.x -= v.get().x
			this.y -= v.get().y
			return this
	}
	mul(v) {
			this.x *= v.get().x
			this.y *= v.get().y
			return this
	}
	div(v) {
			this.x /= v.get().x
			this.y /= v.get().y
			return this
	}
}