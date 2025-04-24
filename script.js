document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("fade-out"); // Remove fade-out for intersecting section
            } else {
                entry.target.classList.add("fade-out"); // Add fade-out for non-intersecting sections
            }
        });
    }, { threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.top = "-100px"; // Hide the header
        } else {
            // Scrolling up
            header.style.top = "0"; // Show the header
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reset scroll position at the top
    });
});
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
