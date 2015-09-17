# JS-URL-Variable	[![Apache License 2.0](http://img.shields.io/badge/license-apache2-red.svg)](http://www.apache.org/licenses/)

JS-URL-Variable is a javascript code used for parse url query string into an object.

## Table of Contents

 - [About](#about)
 - [Documentation](#documentation)
 - [Example](#example)
	 - [Parse Full URL](#parse-full-url)
	 - [Parse Object](#parse-object)
	 - [Get Query String](#get-query-string)


##  About

This is the code I wrote for my another project [paginate-blogger-posts](https://sourceforge.net/p/paginate-blogger-posts/)

## Documentation

- [JSDoc](http://shiyou0130011.github.io/JS-URL-Variable/jsdoc/)
  
  Documentation generated by [JSDoc 3](https://github.com/micmath/jsdoc) using [jsdoc3Template](https://github.com/danyg/jsdoc3Template).

## Example

### Parse Full URL
	
	<script src="/The/Path/of/The/File/url_variable.js"></script>
	<script>
	var urlVariables = new URLVariables("http://example.com/?var1=A&var2=B&var3=https%3A%2F%2Fexample.com");
	console.log(urlVariables);	// will log an object: 
					// {
					//	"var1": ["A"],
					//	"var2": ["B"],
					//	"var3": ["https://example.com"]
					// }
	</script>

### Parse Object

	<script src="/The/Path/of/The/File/url_variable.js"></script>
	<script>
	var urlVariables = new URLVariables({"var1":"A", "var2":"B", "var3":"https://example.com"});
	console.log(urlVariables);	// will log an object: 
					// {
					//	"var1":"A",
					//	"var2":"B",
					//	"var3":"https://example.com"
					// }
	</script>

### Get Query String

	<script src="/The/Path/of/The/File/url_variable.js"></script>
	<script>
	var urlVariables = new URLVariables({"var2":"B", "var1":"A", "var3":"https://example.com"});
	console.log(urlVariables.toString());	// will log a String: "var1=A&var2=B&var3=https%3A%2F%2Fexample.com"
	</script>
	