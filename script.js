function showAlert() {
    alert("Welcome! Thanks for visiting this interactive website!");
}

function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const response = document.getElementById("response");

    if (name && email) {
        response.innerText = `Thanks, ${name}! I'll get back to you at ${email}.`;
        response.style.color = "#00c6ff";
    } else {
        response.innerText = "Please enter your name and email.";
        response.style.color = "red";
    }
}

