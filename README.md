# JS-URL-Variable

JS-URL-Variable is a javascript code used for parse url query string into an object.

## Table of contents

[toc]

##  About

This is the code I wrote for my another project [paginate-blogger-posts](https://sourceforge.net/p/paginate-blogger-posts/)

## Example

### Parse Full URL
	
	<script src="/The/Path/of/The/File/url_veriable.js"></script>
	<script>
	var urlVariables = new URLVariables("http://example.com/?var1=A&var2=B&var3=https%3A%2F%2Fexample.com");
	console.log(urlVariables);	// will log an object: 
					// {
					//	"var1":"A",
					//	"var2":"B",
					//	"var3":"https://example.com"
					// }
	</script>

## Parse Object

	<script src="/The/Path/of/The/File/url_veriable.js"></script>
	<script>
	var urlVariables = new URLVariables({"var1":"A","var2":"B","var3":"https://example.com"});
	console.log(urlVariables);	// will log an object: 
					// {
					//	"var1":"A",
					//	"var2":"B",
					//	"var3":"https://example.com"
					// }
	</script>

## Get Query String

	<script src="/The/Path/of/The/File/url_veriable.js"></script>
	<script>
	var urlVariables = new URLVariables({"var2":"B","var1":"A","var3":"https://example.com"});
	console.log(urlVariables.toString());	// will log a String: "var1=A&var2=B&var3=https%3A%2F%2Fexample.com"
	</script>
	