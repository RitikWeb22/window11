let sidebar = document.querySelector(".sidebar");

let body = document.querySelector("body");
let browser = document.querySelector("iframe");
let Edge = document.querySelector(".img1");
let chrome2 = document.querySelector(".img2");
let bottomMenu = document.querySelector(".bottom-menu");
let menuBar = document.querySelector(".menu-open");
let MenuPage = document.querySelector(".home-menu");
body.addEventListener("dblclick", (e) => {
    sidebar.style.left = e.clientX + "px";
    sidebar.style.top = e.clientY + "px";
    sidebar.classList.toggle("on");
});

bottomMenu.addEventListener("click", (e) => e.stopPropagation());
bottomMenu.addEventListener("dblclick", (e) => e.stopPropagation());

Edge.addEventListener("click", () => {
    browser.setAttribute("src", "https://www.bing.com/search?pglt=41&q=google&cvid=5af281f45e57481cbfde5ff45c9f4e70&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAuGEAyBggDEC4YQDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDU5ajBqMagCCLACAQ&FORM=ANSPA1&PC=SCOODB");
    browser.classList.toggle("on_off");
});
chrome2.addEventListener("click", () => {
    browser.setAttribute("src", "https://remixicon.com/");
    browser.classList.toggle("on_off");
});
menuBar.addEventListener("click", () => {

    MenuPage.classList.toggle("home-on");
});