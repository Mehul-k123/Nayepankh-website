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


// function login(){
    
// }
// function register(){
//     window.open("register.html")
// }
// Check if a token is present in local storage
const storedToken = localStorage.getItem('userToken');

// Get references to the login and signup buttons
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const logoutButton = document.getElementById('logoutButton');

// Get a reference to the button container
const buttonContainer = document.getElementById('button-container');

if (storedToken) {
    // Token is present, so hide the login and signup buttons
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    logoutButton.style.display = '';
} else {
    // Token is not present, so show the login and signup buttons
    loginButton.style.display = '';
    registerButton.style.display = '';
    logoutButton.style.display = 'none';
}
// Logout function
function logout() {
    if (confirm('Do you want to logout?')) {
        // User confirmed the logout action
        // Remove the token from local storage
        localStorage.removeItem('userToken');

        // Show the login and signup buttons and hide the logout button
        loginButton.style.display = 'block';
        registerButton.style.display = 'block';
        logoutButton.style.display = 'none';
        window.location.href = "home2.html"
    }
}


