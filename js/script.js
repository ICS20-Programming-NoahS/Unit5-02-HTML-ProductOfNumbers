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

  // initialize the product as an empty string
  let product = ""
    
  //get the first number
  let firstNumber = parseInt(document.getElementById("first-number").value)

  //get the second number
  let secondNumber = parseInt(document.getElementById("second-number").value)
  
  product = 0
  
  // Use for loops to calculate the product of the first and second number the user enters
  for (let counter = 0; counter < secondNumber; counter++) {
    
    product = product + firstNumber
  }

  // for loop for zero
  for (let counter = 0; counter == secondNumber; counter++) {
    
    product = product
  }

  //for loop for negatives
  for (let counter = 0; counter > secondNumber; counter--) {
    
    product = product - firstNumber
  }

  // return the string of numbers back to html
  document.getElementById("result").innerHTML = "The answer of " + firstNumber + " X " + secondNumber + " is " + product + ".";
}