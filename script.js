let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
}

// Auto Slide Every 4 Seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
}

setInterval(autoSlide, 4000);
document.addEventListener("DOMContentLoaded", function() {
    const showcase = document.querySelector(".event-showcase");

    function handleScroll() {
        const rect = showcase.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            showcase.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load
});
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', function () {
        const eventName = this.previousElementSibling.textContent; // Get event title
        window.location.href = `register.html?event=${encodeURIComponent(eventName)}`;
    });
});
document.addEventListener("scroll", function () {
    const collegeSection = document.getElementById("collegeSection");
    const position = collegeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        collegeSection.classList.add("show-college-info");
    }
});
document.addEventListener("scroll", function () {
    const locationSection = document.getElementById("locationSection");
    const position = locationSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        locationSection.classList.add("show-location-info");
    }
});
document.addEventListener("scroll", function () {
    const facultySection = document.getElementById("facultySection");
    const position = facultySection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        facultySection.classList.add("show-faculty");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        let aboutSection = document.querySelector(".about-section");
        let position = aboutSection.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            aboutSection.classList.add("about-visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once when the page loads
});
