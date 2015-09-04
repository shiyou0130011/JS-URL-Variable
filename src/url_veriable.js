/**
 * @param variables {String|Object}
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
 *
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