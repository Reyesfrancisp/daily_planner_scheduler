// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

  //Current Date
   var date = document.querySelector("#currentDay");
   var currentDate = dayjs().format("MMMM D, YYYY");
   date.innerText = currentDate;


    // TODO: Add a listener for click events on the save button.
    $(".saveBtn").on("click", function (eventObject) {
      // Get the parent time-block ID
      var blockId = eventObject.parent().attr("id");
      
      // Get the user input
      var userInput = eventObject.siblings(".description").val();
      
      // Save the user input in local storage using ID as the key
      localStorage.setItem(blockId, userInput);
    });
  
    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
    var currentHour = dayjs().hour();
  
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var hour = parseInt(timeBlockId.split("-")[1]);
      console.log(hour);
      if (hour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
        console.log($(this));
      } else if (hour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        console.log($(this));
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log($(this));
      }
    });
  
    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding text area elements.
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var userInput = localStorage.getItem(timeBlockId);
  
      if (userInput == true) {
        $(this).find(".description").val(userInput);
      }
    });
  
 
  });
