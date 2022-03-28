const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});

const contactBtn = document.querySelector(".contact-us-btn");

contactBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});

const events = document.querySelectorAll(".event-row");

events.forEach(function (event) {
    var header = event.querySelector(".event-header");

    header.addEventListener("click", function () {
        events.forEach(function (item) {
            if (item !== event) {
              item.classList.remove("show-event");
            }
        });
        event.classList.toggle("show-event");
    });
});