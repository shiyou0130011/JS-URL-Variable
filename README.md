# JS-URL-Variable

JS-URL-Variable is a javascript code used for parse url query string into an object.

## Table of contents

[toc]

##  About

This is the code I wrote for my another project [paginate-blogger-posts](https://sourceforge.net/p/paginate-blogger-posts/)

## Example

### Parse Full URL
	
	var url = new URLVariables("http://example.com/?var1=A&var2=B&var3=https%3A%2F%2Fexample.com");
	console.log(url);	// will log an object: 
				// {
				//	"var1":"A",
				//	"var2":"B",
				//	"var3":"https://example.com"
				// }

## Parse Object

	var url = new URLVariables({"var1":"A","var2":"B","var3":"https://example.com"});
	console.log(url);	// will log an object: 
				// {
				//	"var1":"A",
				//	"var2":"B",
				//	"var3":"https://example.com"
				// }

## Get Query String

	var url = new URLVariables({"var1":"A","var2":"B","var3":"https://example.com"});
	console.log(url.toString());	// will log a String: "var1=A&var2=B&var3=https%3A%2F%2Fexample.com"

	