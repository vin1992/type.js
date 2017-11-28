var type = {
	isString:function(obj) {
		return typeof obj === 'string';
	},
	isBoolean:function (obj) {
		return typeof obj === 'boolean';
	},
	isNumber:function(obj) {
		return '[object Number]' == {}.toString.call(obj) && isFinite(obj);  //摘自百度tangram 非常严谨
	},
	isArray:function(obj) {
		return typeof obj.sort === 'function'; 
	},
	isObject:function(obj) {
		return Object.prototype.toString(obj) === '[object Object]' && !type.isNull(obj)
	},
	isUndefined:function(obj) {
		return obj === void(0);
	},
	isNull:function(obj) {
		return obj === null;
	},
	isNaN:function(obj) {
		return obj !== obj;
	},
	isFunction:function(obj){
		return typeof obj === 'function';
	},

	isArrayLike:function(obj) {
		var length = !!obj && "length" in obj && obj.length;

		if (type.isFunction(obj) || type.isWindow(obj)) return false;

		return type.isArray(obj) || length === 0 || type.isNumber(obj) && length > 0 && (length -1 ) in obj;
	},
	isPlainObject:function(obj) {
		return typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype
	},
	isWindow:function(obj,isIE) {
		if (isIE) {
			if (!obj) return false;
			// 利用IE6-8 window == document 为true document == window 为false  判断
			return obj == obj.document && obj.document != obj;
		}else {
			var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
			return rwindow.test(toString.call(obj));
		}
	},
	isDate:function(obj) {
		return {}.toString.call(obj) === "[object Date]" && obj.toString() !== 'Invalid Date' && !isNaN(obj);
	}
}

