/**
 * @author Tzuyang Tsai (shiyou0130011)
 * @version 1.1
 * @license Apache-2.0
 */

/**
 * @constructor
 * @param variables {String|Object} An url string or an object
 */
function URLVariables(variables) {
	if (!(this instanceof URLVariables)) {
		return new URLVariables(variables)
	}
	this.decode(variables)
}
/**
 * Converts the url string or object to the specified URLVariables object.
 * @param {String|Object}	An url string or an object
 * @example var u = new URLVariables;
 *          u.decode("a=1&b=2&c=3&a=2")
 *          u.decode({a: [1, 2], b: 2, c: 3})
 * @return {URLVariables}	this
 */
URLVariables.prototype.decode = function (source) {
	switch (typeof source) {
		case "string":
			var url = source
			var urlvar 
			if(url.indexOf("?") >= 0){
				url = url.substr(url.indexOf("?") + 1) 
			}else if(url.indexOf("=") < 0){
				url = ""
			}
			
			if(url.length > 0){
				urlvar = url.split("&")
			}else{
				urlvar = {}
			}
			
			
			for (var i in urlvar) {
				var data = urlvar[i].split("=")
				var name = data[0] === undefined? "": decodeURIComponent(data[0]), 
				    value = data[1] === undefined? "": decodeURIComponent(data[1])
				if (!(this[name] instanceof Array)) {
					if (this[name]) {
						this[name] = [this[name]]
					}
					this[name] = [value]
					
				}else{
					this[name].push(value)
				}
			}
			break
		case "object":
			for(var i in source) {
				if (this[i] != undefined) {
					if (!(this[i] instanceof Array)) {
						this[i] = [this[i]]
					}
				}else{
					this[i] = []
				}
				
				if (source[i] instanceof Array) {
					[].push.apply(this[i], source[i])
				}else{
					this[i].push(source[i])
				}
			}
	}
	return this
}

/**
 * @return {String} The string containing all variables, in the MIME content encoding <i>application/x-www-form-urlencoded</i>.
 */
URLVariables.prototype.toString = function () {
	var urlvar_keys = []
	for(var i in this) {
		if (typeof this[i] != "function" && !URLVariables.prototype[i])
			urlvar_keys.push(i)
	}
	urlvar_keys.sort()

	var l = []
	for (i in urlvar_keys) {
		var key = urlvar_keys[i]
		if (!(this[key] instanceof Array)){
			this[key] = [this[key]]
		}
		
		this[key].sort()
		this[key].forEach(function(val, index, array) {
			l.push(encodeURIComponent(key) + "=" + encodeURIComponent(val))
		})
	}
	return l.join("&")
}