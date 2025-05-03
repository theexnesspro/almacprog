function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const validUsers = {
        "Alxin": "0897",
        "DanielMac": "8b,)wB10",
        "sex": "sex"
    };

    if (validUsers[username] && validUsers[username] === password) {
        window.location.href = "loggedin.html"; // Redirect if valid
    } else {
        document.getElementById("error-msg").textContent = "Invalid - Nigga Fuck off!";
    }
}