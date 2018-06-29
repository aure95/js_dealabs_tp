
const rp = require('request-promise');
const cheerio = require('cheerio');
const request = require('request');
var fs = require('fs');

var txt="";
const motif="!";




//https://www.npmjs.com/package/jquery
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;




/*
var jsdom = require('jsdom')
var d3 = require("d3"),
    
/*
jsdom.env("https://google.com", function(error, window) {
  if (error) throw error;
  console.log(d3.select(window.document).select("#hplogo").attr("src"));
});
*/
/*
var doc = d3.select(window.document)
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const req = new XMLHttpRequest();


const siteNameNew="https://www.dealabs.com/nouveaux";

//response.addHeader("Access-Control-Allow-Origin:", "https://www.dealabs.com/nouveaux");
//response.addHeader("Access-Control-Allow-Methods", "GET, POST,PUT");

function connexionHTML(siteName)
{
//req.open('GET', siteName, false);
req.open('GET', siteName, true); 
req.send();

if (req.status === 200) {
    console.log("Réponse reçue: %s", req.responseText);
} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}
	console.log(req.responseText)
}
*/


/*
function URLtoJSON()
{
	$.getJSON("https://www.dealabs.com/nouveaux", function(data) {
        
        var toto=JSON.stringify(data)
        console.log(toto);
    });
}
*/
/*
function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

*/

console.log("Debut");

//connexionHTML(siteNameNew);
//URLtoJSON();
/*var request = makeHttpObject();
request.open("GET","https://www.dealabs.com/nouveaux", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
    alert(request.responseText);
};

*/
//document.getElementById("affichage").innerHTML="tametreurry";
/*
const options = {
  uri: "https://www.dealabs.com/nouveaux",
  transform: function (body) {
    return cheerio.load(body);
  }
};*/
/*
rp(options)
  .then(($) => {
    console.log($);

  })
  .catch((err) => {
    console.log(err);
  });
*/
function parseData(data)
{
	for(var i=0;i<data.length;i++)
	{
		var data_model=data[i].split("  ")
		console.log("/////////////"+ i.toString()+"//////////////\n");

		for(var e=0;e<data_model.length;e++)
			console.log(e.toString()+data_model+"\n")

	}
	

}

function writeTXT(data)
{
fs.writeFile('data.txt', data,  function(err) {
   if (err) {
      return console.error(err);
   }
});

console.log("\nDATA WRITED: data.txt \n");
}



function getDATA()
{


request('https://www.dealabs.com/nouveaux', function (error, response, html) {
  if (!error && response.statusCode == 200) 
  {
    var $ = cheerio.load(html);
    var data=[];
    
   //console.log(html);
   
   

    $('article').each(function(i, element)
    {
     var a = $(this).prev();

     //var lien = a.attr('href')
    // console.log(lien);

     //console.log(a.text());
   //  var titre=a.attr('title');
     //console.log(titre);
     //console.log(a.text());
    // var donnees=a.text();
    // data.push(a.text());
    data.push(a.text());
     //console.log("\n");

      //writeTXT(html);
     //data+=motif+a.text()+motif;
	});

	var selector_prix=".thread-price text--b vAlign--all-tt cept-tp size--all-l size--fromW3-xl";

	$(selector_prix).each(function(i, element)
    {
     var a = $(this).prev();
     console.log(a);

     //var lien = a.attr('href')
    // console.log(lien);

     //console.log(a.text());
   //  var titre=a.attr('title');
     //console.log(titre);
     //console.log(a.text());
    // var donnees=a.text();
    // data.push(a.text());
    
     //console.log("\n");

      //writeTXT(html);
     //data+=motif+a.text()+motif;
	});
   
   
   // parseData(data);
    writeTXT(data);
	


  /*  
	for(var i=0;i<data.length;i++)
	{
	 console.log("\n");
     console.log(data[i]);
     console.log("\n");
	}
	*/
	
	
	//parseData(data);

	
	//console.log(data);

    

  }
});
	
    
	
}



/*$(".cept-tt thread-link linkPlain thread-title--list").each(function(i, elem) {
  var t = $(this).prev();
  console.log(t.text());
});
*/



getDATA();



console.log("Fin");