"use strict";
// $ -> To select something

// Prints I am Ready
$(document).ready(function() {
  console.log("I am Ready");
});

// Selects all the Elements in the HTML page
$(document).ready(function() {
  $("*").click(function() {
    console.log("All the elements are selected");
  });
});

// Hides the particular element when clicked
$(document).ready(function() {
  $("div").click(function() {
    $(this).hide();
  });
});

// id and class Selector
$(document).ready(function() {
  $("#HT").click(function() {
    console.log("Hello There is clicked");
  });
  $(".HW").click(function() {
    console.log("Hellow World is clicked");
  });
});

//id and class in the same function
$(document).ready(function() {
  $("#HT , .HW").click(function() {
    console.log("Both div are clicked");
  });
});

//Affect the first element of the total elements
$(document).ready(function() {
  $("div:first").click(function() {
    console.log("first div is clicked");
  });
});

//Selecting odd or even (consider the initial div as 0)
$(document).ready(function() {
  $("div:odd").click(function() {
    console.log("odd div is clicked");
  });
  $("tr:even").css("background-color", "green");
});

//selecting the Element and class simultaneously
$(document).ready(function() {
  $("p.para").click(function() {
    console.log("Paragraph tag with para class is clicked");
  });
});

// Select the children of the i tag
$(document).ready(function() {
  $("i >  span").css("color", "blue");
  $("i").css("font-size", "2rem");
});

// selecting based on attributes
$(document).ready(function() {
  $("div[target='_blank']").click(function() {
    console.log("Target is clicked");
  });
});

// To select the type
$(document).ready(function() {
  $(":button").click(function() {
    console.log("Button is clicked");
  });
  $(":text").click(function() {
    console.log("Text is Entered");
  });
});

// selection based on the content present
$(document).ready(function() {
  $("p:contains(rebel)").css("background-color", "orange"),
    $("p:contains(people)").css("background-color", "orange");
});

//Get attribute of the particular div
$(document).ready(function() {
  var titleVar = $("div").attr("title");
  console.log(titleVar);
});

//To change the attribute of the particular div using Set Attribute
$(document).ready(function() {
  var titleVar = $("div").attr("title");
  console.log(titleVar);
  $("#oneButton").click(function() {
    $("div").attr("title", "oneButton");
  });
});

// Set a callback function for an attribute
$(document).ready(function() {
  var titleVar = $("div").attr("title");
  console.log(titleVar);
  $("#oneButton").click(function() {
    $("div").attr("title", "oneButton");
  });
});
