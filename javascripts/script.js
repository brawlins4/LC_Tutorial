

function check_sort() 
{
		var list=[];
		var toSort = document.getElementById("sortable").children;
		for ( i = 0; i < toSort.length; i++)
        {
			if(toSort[i].id != i+1)
            {
			     list.push(toSort[i].id)
			}
		}
		Sprint(list);
       
}

$(function() 
  {
        $( "#sortable" ).sortable(
        { 
            placeholder: "ui-sortable-placeholder" 
        });
}); 

		
function numOrdA(a, b)
{ 
    return (a-b); 
}
		
function Sprint(list)
{   
    if(list.length == 0)
    {  
        if(numpage>=0 && numpage <4)
        {
            alert("The Books are sorted!!");
            numpage=numpage+1;
            window.location.href ="index"+numpage+".html";
            
            alert(numpage);
        }
 
    }
    else
    {
		list.sort(numOrdA);
		document.getElementById("demo").innerHTML ="list of books misplaced:"+list.toString();
    }
}
	



function postContactToGoogle() 
{
    var firstname=$('#firstname').val();
    var lastname=$('#lastname').val();

    $.ajax({
        url:"https://docs.google.com/forms/d/1419NCBpsn3xTM840qWbZ_fcBWpg6rOfdgMU8jIVJGM4/formResponse",data:{"entry_1111613135":firstname,"entry_1415123890":lastname},type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
    });
}

    
