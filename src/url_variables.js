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
 * @param	{String}		source	
 * @return	{URLVariables}		this
 */
URLVariables.prototype.decode = function(source){
	if(typeof source != "string")
		return this

	var url = source.split("?");
	var urlvar = url[url.length-1].split("&");
	for(var i in urlvar){
		var data = urlvar[i].split("=")
		var name = data[0], value = data[1]
		if(name.indexOf("[") > 0 && name.indexOf("]") > 0 && name.indexOf("]") > name.indexOf("[")){
			// it is an Array
			var blockIndex = [name.indexOf("["), name.indexOf("]")]
			var index = name.substr(blockIndex[0] + 1, blockIndex[1]-blockIndex[0] - 1)
			name = decodeURIComponent(name.substr(0, blockIndex[0]))
			this[name] = (this[name] instanceof Array)? this[name]: []
			
			if(index){
				this[name][index] = value
			}else{
				this[name].push(value)
			}
			
		}else{
			this[decodeURIComponent(name)] = decodeURIComponent(value);
		}
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
		var key = urlvar_keys[i], value = this[key]
		key = encodeURIComponent(key)
		if(typeof value != "object"){
			l.push(key + "=" + encodeURIComponent(value))
		}else{
			var result_arr = []
			for(var i in value){
				result_arr.push(key + "[" + i + "]=" + encodeURIComponent(value[i]))
			}
			l.push(result_arr.join("&"))
		}
	}
	return l.join("&")
}