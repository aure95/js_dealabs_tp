

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
function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}



console.log("Debut2");

//connexionHTML(siteNameNew);
//URLtoJSON();
var request = makeHttpObject();
request.open("GET","https://www.dealabs.com/nouveaux", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
    alert(request.responseText);
};


//document.getElementById("affichage").innerHTML="tametreurry";

console.log("Fin");