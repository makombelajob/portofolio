const burger = document.querySelector("div.burger");
const open = document.querySelector("div.open");
burger.addEventListener("click", () => {
    open.classList.add("active");
});
const close = document.querySelector("#close");
close.addEventListener("click", () => {
    open.classList.remove("active");
});
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
    if(!burger.contains(event.target) && !open.contains(event.target)) {
        open.classList.remove("active");
    }
});
