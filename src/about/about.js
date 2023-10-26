function reload(){
    window.location.reload();
}

const hamburger = document.querySelector(".hamburger");
const navMain = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMain.classList.toggle("active");
}); 



const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");


navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMain.classList.remove("active");
    });
});

