
function newItem(){

//1. Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});


//3. Adding a delete button
  let  deleteButton = $('< deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on("click", deleteListItem);
  function deleteListItem(){
  li.addClass("delete")
  }

 // 4. Reordering the items: 
  $('#list').sortable();
}
