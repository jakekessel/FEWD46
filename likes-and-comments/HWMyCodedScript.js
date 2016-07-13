


var like-link = document.querySelector(".like-link");
var like-count = document.querySelector(".like-count");

var commentsdiv = document.querySelector("#comments");
var new-commentform = document.querySelector("#new-comment");
var new-comment-bodytextarea = document.querySelector("#new-comment-body");


link.addEventListener("click", like);
form.addEventListener("submit", comment);


function like(event) {
  event.preventDefault();
  // Your code for like goes here
  var numbercount = parseInt(like-count.textContent);
  like-count.textcontent = numbercount + 1;
}

function comment(event) {
  event.preventDefault();
  // Your code for comments goes here
  var newcomment = document.createElement(div);
  newcomment.setAttribute("class", "comment");
  newcomment.textContent = commentBody.value;
  document.appendChild(newcomment);
  commentForm.reset;
}
