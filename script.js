// Typing animation in hero
const phrases = [
  "a Software Programmer 💻",
  "a Creative Thinker 🎨",
  "a Problem Solver 🧩",
  "a Tech Enthusiast 🚀"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".typed-text").innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i == phrases.length) {
        i = 0;
      }
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();

// Smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute("href").includes(".html")) return; // allow page links
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form validation
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before submitting!");
    } else {
      alert("✅ Thank you " + name + "! Your message has been sent.");
      contactForm.reset();
    }
  });
}
