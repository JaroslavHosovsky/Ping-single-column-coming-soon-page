const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const paragraph = document.querySelector(".hidden-text");
const index = "/index.html";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmail.value === "") {
    paragraph.style.display = "block";
    inputEmail.style.borderColor = "#ff5263";
  } else {
    window.location.href = index;
  }
});
