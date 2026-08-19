const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "student@gmail.com" && password === "1234") {

        message.textContent = "Login successful!";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {

        message.textContent = "Invalid email or password.";

    }

});