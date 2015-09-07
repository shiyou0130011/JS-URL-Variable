/**
 * @author Tzuyang Tsai (shiyou0130011)
 * @license Apache-2.0
 */

/**
 * @constructor
 * @param variables {String|Object} An url string or an object
 */
function URLVariables(variables){
	if(!(this instanceof URLVariables)){
		return new URLVariables(variables)
	}
	switch(typeof variables){
		case "string":
			this.decode(variables)
			break
		case "object":
			for(var i in variables){
				this[i] = variables[i];
			}
			break
	}
}
/**
 * Converts the url string to the specified URLVariables object.
 * @return {URLVariables}	this
 */
URLVariables.prototype.decode = function(source){
	if(typeof source != "string")
		return this

	var url = source.split("?");
	var urlvar = url[url.length-1].split("&");
	for(var i in urlvar){
		var data = urlvar[i].split("=")
		this[decodeURIComponent(data[0])] = decodeURIComponent(data[1]);
	}
	return this
}

/**
 * @return The string containing all variables, in the MIME content encoding <i>application/x-www-form-urlencoded</i>.
 */
URLVariables.prototype.toString = function(){
	var urlvar_keys = []
	for(var i in this){
		if(typeof this[i] != "function")
			urlvar_keys.push(i)
	}
	urlvar_keys.sort()

	var l = []
	for(i in urlvar_keys){
		l.push(encodeURIComponent(urlvar_keys[i]) + "=" + encodeURIComponent(this[urlvar_keys[i]]))
	}
	return l.join("&")
}