const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});

const contactBtn = document.querySelector(".contact-us-btn");

contactBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});

////

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

const events = document.querySelectorAll(".event-row");

events.forEach(function (event) {
  const upBtn = event.querySelector(".up-btn");
  const downBtn = event.querySelector(".down-btn");

  upBtn.addEventListener("click", function () {
    // console.log(event);

    events.forEach(function (item) {
      if (item !== event) {
        item.classList.remove("show-event");
      }
    });

    event.classList.toggle("show-event");
  });

  downBtn.addEventListener("click", function () {
    event.classList.toggle("show-event");
  });
});