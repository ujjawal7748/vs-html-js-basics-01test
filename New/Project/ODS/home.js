// JavaScript for handling form validation & Google Sheets Integration
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const fullName = document.querySelector("#fullName").value.trim();
            const email = document.querySelector("#email").value.trim();
            const phone = document.querySelector("#phone").value.trim();

            if (!fullName || !email || !phone) {
                alert("Please fill out all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Send data to Google Sheets
            fetch("YOUR_WEB_APP_URL", {
                method: "POST",
                body: JSON.stringify({ fullName: fullName, email: email, phone: phone }),
                headers: { "Content-Type": "application/json" },
            })
            .then(response => response.text())
            .then(data => {
                alert("Form submitted successfully!");
                form.reset();
            })
            .catch(error => {
                alert("Error submitting form!");
            });
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// JavaScript for filtering testimonials
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".testimonial-filters button");

    if (filterButtons.length > 0) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const filterValue = this.getAttribute("data-filter");
                const testimonials = document.querySelectorAll(".testimonial");

                testimonials.forEach((testimonial) => {
                    if (filterValue === "all" || testimonial.classList.contains(filterValue)) {
                        testimonial.style.display = "block";
                    } else {
                        testimonial.style.display = "none";
                    }
                });
            });
        });
    }
});

// JavaScript for smooth scrolling when clicking CTA buttons
document.querySelectorAll(".cta-btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector("#contact");
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// JavaScript for sticky header effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// JavaScript for animating progress bars in the Performance Metrics section
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
});
