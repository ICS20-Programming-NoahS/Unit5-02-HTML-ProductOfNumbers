// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates product of the first and second number the user enters
 */
function CalculateProduct() {

  // initialize the numbers as an empty string
  let numbers = ""
    
  //get the user min
  let firstNumber = parseInt(document.getElementById("first-number").value)

  //get the user max
  let secondNumber = parseInt(document.getElementById("second-number").value)

  // if min is bigger than max
  if (userMax < userMin) {
    numbers = "Please make your min smaller than your max"
  }

  //use a while loop to display the numbers from 0 up to the user number
  for (product = 0; firstNumber < counter; counter++)(counter < firstNumber) {
    
    // build the string of numbers with a linebreak each time
    numbers = numbers + counter + "<br>"

  }
  
  // return the string of numbers back to html
  document.getElementById("result").innerHTML = numbers;
}