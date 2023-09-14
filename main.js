// You can remove this line when you're ready.
console.log("Good luck!");
const button = document.querySelector(".button");
const success = document.querySelector(".success");
const formDiv = document.querySelector(".form");

// button.addEventListener("click", (e) => {
//   formDiv.classList.add("d-none");
//   success.classList.remove("d-none");
// });

let form = document.getElementById("userForm");
form.addEventListener("submit", (event) => {
  console.log(form);

  // // Prevent submit
  // event.preventDefault();
  // // find inputs, textareas, and selects within the parent
  // let children = event.target.querySelectorAll("input, checkbox, select");
  // console.log(children);
  // // find if any of them are empty
  // let findEmpty = Array.from(children).find((element) => {
  //   if (element.value.length < 1) {
  //     return true;
  //   }
  //   return false;
  // });
  // // check if found an empty child
  // if (findEmpty) {
  //   // if so alert
  //   alert(findEmpty.name);
  // } else {
  //   // if not submit form
  //   formDiv.classList.add("d-none");
  //   success.classList.remove("d-none");
  // }
});
