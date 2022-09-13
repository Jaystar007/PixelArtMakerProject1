var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  /* .val() method is primarily used to get the values to form elements such as input , select and textarea . */
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
/* console.log('Height: ' + height + ' and width: ' + width); */
})

    // When reset is submitted by the user, call makeGrid() (x,y)=(0,0) for the reset function to work correctly
$('#reset').click (function() {
  makeGrid(0, 0);
})

/* Adding height and width parameters */
function makeGrid(x, y) {
  /* If any table rows there then remove them */
  $('tr').remove();
  /* height = x then add to i */
  for (var i = 1; i <=x; i++) {
    /* This creates a table row */
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    /* This line finds table one by its id and adds the cell so it can be seen */
    for (var j = 1; j <=y; j++) {
    $('#table' + i).append('<td></td>');
    }
  }

  //add color to cell
  $('td').click(function addColor() {
    /* color placement */
    color = $('#colorPicker').val();
  /* Changes the colors of the boxes */
    if ($(this).attr('style')) {
      /* removes them or else places them */
        $(this).removeAttr('style')    
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}


