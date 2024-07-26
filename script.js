/* nabvar em moblie - aparecer e desaparecer */
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

/* fazer aparecer e desaparecer o menu (css - active) */
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active"); // adicionar a classe active ao elemento nav
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active"); // remover a classe active ao elemento nav
    });
}