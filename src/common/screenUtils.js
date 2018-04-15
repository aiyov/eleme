var ReactNative = require('react-native');
var Dimensions = require('Dimensions');

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

var fontScale = ReactNative.PixelRatio.getFontScale();
var pixelRatio = ReactNative.PixelRatio.get();

const r2 = 2;
const w2 = 750/r2;
const h2 = 1334/r2;

/*
设置text为sp
@param size sp
@returns {Number} dp
*/
const DEFAULT_DENSITY = 2;
function setSpText(size:Number) {
    var scaleWidth = screenW / w2;
    var scaleHeight = screenH / h2;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size*scale+0.5) / fontScale);
    return size;
}

/*
屏幕适配，缩放size
@param size
@returns {Number}
@constructor
*/
function scaleSize(size:Number) {
    var scaleWidth = screenW / w2;
    var scaleHeight = screenH / h2;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size*scale + 0.5);
    console.log(screenW, scaleWidth, scale, size)
    return size/DEFAULT_DENSITY;
}

export {screenW , screenH, pixelRatio, DEFAULT_DENSITY, setSpText, scaleSize}