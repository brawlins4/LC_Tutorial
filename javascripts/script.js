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

//$(function() 
  //{
    //    $( "#sortable" ).sortable(
      //  { 
		//	containment: 'parent',
			//tolerance: 'sortable',
			//axis: 'x'
        //});
//}); 

$(function() {
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
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
			swal({
					title: "Great Job!", 
					text: "All the books are in the correct order.", 
					type: "success",
					showCancelButton: false
				}, function() {
					numpage=numpage+1;
					window.location.href = "level"+numpage+".html";
				});
        }
 
    }
    else
    {
		list.sort(numOrdA);
		swal("Try Again", "The books are not in the correct order.", "error");
    }
}
