$(() => {
 
    // GIVEN TODOS ARRAY - DO NOT ERASE!
   const givenToDos = [
     'buy some sand',
     'comb the unicorn',
     'brush my fang',
     'water the hardwoods'
   ]
   //function - when the 'remove' button is clicked, remove the item from the list
    //am not able to get this part to work for some reason, and when I click on the
    //remove button on an item that isn't the last item in the list, they switch
    //orders, I've played around with this a lot and am not sure what's going on 
    //only when I add a new to do item and add that to the done list, the item above the
  //newly added to-do will remove when you clicking the remove button, but only when I add the new item
  //at a certain, point, really not sure what happened here!!
    var $remove = () => {
      $('.removeButton').click(function(event){
        let $removeItem = $(event.currentTarget).parent();
        $removeItem.remove();
        }
      )}
      $remove();

  //function - when the completed button is clicked the item moves from the to-do list to
  //the completed list, the new class is added and the text of the button changes from
  //'completed' to 'remove', assign the correct class
    let $complete = () => {
      $('.completeButton').click(function(event){
        // console.log($(event.currentTarget).parent());
        $(event.currentTarget).removeClass('completeButton').addClass('removeButton')
        let $doneItem = $(event.currentTarget).parent();
        $(event.currentTarget).text('remove');
        $doneItem.removeClass('to-do-item').addClass('done-item');
        $('#completed').append($doneItem);
        }
      )};
      $complete();
      $remove();
    
  
    //function - loop through the array of given to-do's and add each one to the to-do list as
    //an individual div with a complete button, assign the correct class
    const $addList = () => {
    for (let i = 0; i < givenToDos.length; i++){
        let $div = $('<div>').addClass('to-do-item');
        let $item = $('<h3>').text(givenToDos[i]); 
        let $button = $('<button>').text('completed');
        $button.addClass('completeButton');
        let $toDo = $('#to-do-list');
        $toDo.append($div);
        $div.append($item);
        $button.insertAfter($item);
        }
    }
    $addList();
    $complete()
    $remove()
    

    
    //function - when you type a new to-do item into the text box and click add, the new item will
    //be added to the to-do list with the completed button, the text box then clears. If no text is 
    //entered, alert 'enter a new to-do item!'
      $('#submit').click(function(){
        if($('#input-box').val() !== ''){
          let $newDiv = $('<div>').addClass('to-do-item')
          let $newItem = $('<h3>').append($('#input-box').val());
          let $button = $('<button>').text('completed');
          $('input:text'). val('');
          $button.addClass('completeButton');
          let $toDo = $('#to-do-list');
          $toDo.append($newDiv);
          $newDiv.append($newItem);
          $button.insertAfter($newItem);
          
          $complete();
          $remove();

      }
          else {
            alert('enter a new to-do item, silly goose!');
        
    }});
     
  
  });
