// Vision Icons - Show description on hover
document.querySelectorAll(".vision-icons div").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.05)";
        icon.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
        icon.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact CTA Animation
const ctaBtn = document.querySelector(".cta a");
ctaBtn.addEventListener("mouseenter", () => {
    ctaBtn.style.transform = "scale(1.1)";
    ctaBtn.style.transition = "transform 0.3s ease";
});

ctaBtn.addEventListener("mouseleave", () => {
    ctaBtn.style.transform = "scale(1)";
});
