//Image
const mImage = function(url) {
    let image = new Image();
    image.src = url
    return image
}
export const MayoImage = mImage

//Vector
import {MayoVector} from './modules/vector.js'
export const Vector = MayoVector

//MayoGL Instance
import {MayoGLRender} from './modules/engine.js' 
export const MayoGL = class MayoGLCanvas extends MayoGLRender {
    setWidth(w){
        this.width = w
        this.canvas.width = w
        return this
    }
    setHeight(h){
        this.height = h
        this.canvas.height = h
        return this
    }
    resize(w,h){
        this.setWidth(w)
        this.setHeight(h)
        return this
    }
    setPixelSize(s){
        this.pixelSize = s
        return this
    }
    setAlpha(a){
        this.alpha = a
        this.ctx.alpha = a
        return this
    }
    setClearColor(c){
        this.clearColor = c
        return this
    }
    setCanvas(c){
        this.canvas = c
        this.ctx = c.getContext('2d', {alpha: this.alpha})
        return this
    }
    setContext(c){
        this.ctx = c
        return this
    }
    setAntiAlias(a){
        this.antiAlias = a
        this.ctx.imageSmoothingEnabled =a
        return this
    }
    image(url){
        return mImage(url)
    }
    loadInCache(obj, name) {
        this.cache[name]=obj
    }
    loadFromCache(name) {
        return this.cache[name]
    }
}
