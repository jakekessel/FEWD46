var form = document.querySelector("#new-item-form");
var userinput = document.querySelector("new-item-input")
var ul = document.querySelector("todo-list")

function formSubmitted(event) {
  event.preventDefault();

  // Your code goes here...

  var li = document.createElement("li");
  var label = document.createElement("label");
  var span = document.createElement("span");
  var inputResult = document.createElement("input");

  ul.appendChild(li);
  li.appendChild(label);
  label.appendChild:(span);
  label.appendChild(inputResult);

  li.setAttribute("type", "checkbox");






  form.reset();
}

form.addEventListener("submit", formSubmitted);
//
// psuedo-code first attempt:
// // html has form, input, button, list;
// // most of these will need to be referenced as variables;
// // button not needed as variable because?
// // link would use click event but form uses submit event;
// // why must eventlistener come after function?
//
// =========================================================
//
// pseudo-code based on Elisas script (referenced as little as possible):
//
// create form, input and list variables referencing html structure;
// create function that will run when form is submitted;
// function:
// create variables that create li label input and span elements within existing ul
// (label is parent of input and span but why is span not parent of input?)
// append the following:
// li to ul;
// label to li;
// inout to label;
// span to label;
// set input field type (attribute) of  (checkbox);
// make text content of html/user input field the value of span;
// reset form after each button submission;


































var form = document.querySelector("#new-item-form");
var input = document.querySelector("#new-item-input");
var list = document.querySelector("#todo-list");

function formSubmitted(event) {
  event.preventDefault();
  var listItem = document.createElement("li");
  list.appendChild(listItem);
  var label = document.createElement("label");
  var newInput = document.createElement("input");
  var span = document.createElement("span");
  label.appendChild(newInput);
  label.appendChild(span);
  listItem.appendChild(label)
  newInput.setAttribute("type","checkbox");










  span.textContent = input.value;
  form.reset();
}

form.addEventListener("submit", formSubmitted);
