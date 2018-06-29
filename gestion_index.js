

function recupererDATA()
{
   
}


function clicked()
{
	console.log("hola");
	var color=$("#refresh").css( "background-color" )
	//console.log(color.toString());
	$("#refresh").css("background-color","green");
	location.reload();
	
	//$("#refresh").css("background-color",color);
}

$("#affichage").append('<article class="case">yiotuiçàyruioyjurioyfefyju</article>');

$("#refresh").click(clicked);