var form = document.querySelector("#new-item-form");
var userInput = document.querySelector("#new-item-input")
var ul = document.querySelector("#todo-list")

function formSubmitted(event) {

  event.preventDefault();

  var li = document.createElement("li");
  var label = document.createElement("label");
  var span = document.createElement("span");
  var inputResult = document.createElement("input");

  ul.appendChild(li);
  li.appendChild(label);
  label.appendChild(inputResult);
  label.appendChild(span);

  inputResult.setAttribute("type", "checkbox");

  span.textContent = userInput.value;

  form.reset();
}

form.addEventListener("submit", formSubmitted);

function splitItems (event){

  event.preventDefault();

  input.value.split(" , ").forEach(createItem);

  form.reset();

}
