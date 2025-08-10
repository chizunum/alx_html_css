const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        hamburger.innerHTML = "\u2715";
    }else{
        hamburger.innerHTML === "\u2630"
    }
});
            