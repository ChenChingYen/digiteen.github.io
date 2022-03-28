const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});

const contactBtn = document.querySelector(".contact-us-btn");

contactBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});