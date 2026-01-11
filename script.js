const currentYearEl = document.querySelector("[data-year]");
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname.split("/").pop();
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (question) {
    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  }
});
