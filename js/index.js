// Query selecting class name nav-toggle
const navToggle = document.querySelector(".nav-toggle");

//Query all classes name navLinks 
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})