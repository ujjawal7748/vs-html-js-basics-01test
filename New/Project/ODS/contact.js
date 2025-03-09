document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    fetch("YOUR_WEB_APP_URL_HERE", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("form-response").innerText = "Your message has been sent successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch(error => {
        document.getElementById("form-response").innerText = "Error submitting form. Please try again.";
        console.error("Error:", error);
    });
});
