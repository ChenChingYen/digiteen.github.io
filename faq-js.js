const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});

const contactBtn = document.querySelector(".contact-us-btn");

contactBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});

// const questions = document.querySelectorAll(".question-row");

// questions.forEach(function (question) {
//   const upBtn = question.querySelector(".up-btn");
//   const downBtn = question.querySelector(".down-btn");

//   upBtn.addEventListener("click", function () {
//     // console.log(event);

//     // questions.forEach(function (item) {
//     //   if (item !== question) {
//     //     item.classList.remove("show-question");
//     //   }
//     // });

//     question.classList.toggle("show-question");
//   });

//   downBtn.addEventListener("click", function () {
//     question.classList.toggle("show-question");
//   });
// });

const questions = document.querySelectorAll(".question-row");

questions.forEach(function (question) {
  const header = question.querySelector(".question-header");
  header.addEventListener("click", function () {
    question.classList.toggle("show-question");
  });
});