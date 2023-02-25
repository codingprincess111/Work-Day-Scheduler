
$(function () {
  var everyRow = $(".container-lg").find(".time-block");
  var currentHour = dayjs().hour()
  var everyButton = $(".container-lg").find(".saveBtn")

  // go over every row element on the page, before during or after the hour the class is removed, and the entry saved into local storage// 
  for(var i = 0; i < everyRow.length; i++) {
    console.log(everyRow[i]);
    var idRow = $(everyRow[i]).prop('id');
    var blockTime = parseInt(idRow.slice(5));
    var currentClass = $(everyRow[i]).prop('class');
    var savedData = localStorage.getItem("block-" + blockTime);
    if (blockTime < currentHour) {
      $(everyRow[i]).removeClass(currentClass).addClass('row time-block past')
    }
    if(blockTime == currentHour) {
      $(everyRow[i]).removeClass(currentClass).addClass('row time-block present')
    }
    if(blockTime > currentHour){
      $(everyRow[i]).removeClass(currentClass).addClass('row time-block future')
    }
    if (savedData) {
      $(everyRow[i]).find("textarea").val(savedData);
    }

  }
//when user clicks the save button, we save the data to local storage using the 'setItem' method and the ID of the time clock and the textarea value.//  
  everyButton.on('click', function() {
    var timeBlock = $(this).parent().prop('id');
    var blockText = $(this).siblings('.description').val();
    localStorage.setItem("block-" + timeBlock.slice(5), blockText);
  });



  });

//created a function for the current day amd date//
$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D"))
})

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

