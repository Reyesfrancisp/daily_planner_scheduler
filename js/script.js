// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //Current Date
  var date = document.querySelector("#currentDay");
  var currentDate = dayjs().format("MMMM D, YYYY");
  date.innerText = currentDate;

  var buttons = $(".saveBtn");
  var timeBlock = $(".time-block");
  //uses this to point to each element in jQuery

  //current hour to get from dayjs
  var currentHour = dayjs().hour();

  //event listener on each button as a loop to go through all the buttons on save for each button, saves each description value in local storage
  buttons.on("click", function () {
    // Get the parent time block ID
    var blockId = $(this).parent().attr("id");
    // Get the user input in each text box description
    var userInput = $(this).siblings(".description").val();
    // Save the user input in local storage using ID as the key
    localStorage.setItem(blockId, userInput);
  });

  //run through each block
  timeBlock.each(function () {
    var timeBlocks = $(this).attr("id");
    var hourBlock = parseInt(timeBlocks.split("-")[1]); //split the id into the integer associated with it
    console.log(hourBlock);
    //comparison to add and remove classes
    if (hourBlock < currentHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
      console.log($(this));
    } else if (hourBlock == currentHour) {
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
  //set each block with info from the page and local storage that is saved on refresh;
  timeBlock.each(function () {
    var timeBlockId = $(this).attr("id");
    var blockData = localStorage.getItem(timeBlockId);
    //if something exists in that block from the local storage then output it
    if (blockData) {
      $(this).find(".description").val(blockData);
    }
  });
});