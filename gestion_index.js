

function recupererDATA()
{
   
}

function refresh()
{
	var data=recupererDATA();
	$("#affichage").append('<article class="case">yiotuiçàyruioyjurioyfefyju</article>');
}



function clicked()
{
	console.log("hola");
	var color=$("#refresh").css( "background-color" )
	//console.log(color.toString());
	$("#refresh").css("background-color","green");
	location.reload();
	recupererDATA;

	
	//$("#refresh").css("background-color",color);
}



$("#refresh").click(clicked);

refresh();