/*menu icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//For CV download
// const downloadCV = document.getElementById("download-cv");
// downloadCV.addEventListener("click", function () {
//   var CVPath = "../image/CV.png";
//   var downloadLink = document.createElement("a");
//   downloadLink.href = CVPath;
//   downloadLink.download = "CV.png";
//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
//   console.log("clicked");
// });

const text = "Rajan Shrestha";
const speed = 100; // Typing speed in ms
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typewriter").innerHTML = ""; // Clear the typed text
      index = 0; // Reset index for next loop
      typeWriter(); // Restart typing
    }, 2000); // Optional delay before restarting
  }
}

window.onload = typeWriter;

document.getElementById("download-cv").addEventListener("click", function () {
  var cvPath = "image/Rajan_CV.pdf"; // Path to your CV file
  var link = document.createElement("a");
  link.setAttribute("href", cvPath);
  link.setAttribute("download", "Rajan_Shrestha_CV.pdf"); // Name for the downloaded file
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/*scroll section active link*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* sticky navbar */
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  /*remove menu icon navbar when click navbar link(scroll)*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
/* Dark Mode */
let darkModeIcon = document.querySelector("#darkMode");
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};
/* scroll reveal */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .project-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

// About section readmore button handler
document
  .getElementById("toggle-skills-btn")
  .addEventListener("click", function () {
    const hiddenSkills = document.querySelector(".hidden-skills");
    if (hiddenSkills.style.display === "flex") {
      hiddenSkills.style.display = "none";
      this.textContent = "Show More";
    } else {
      hiddenSkills.style.display = "flex";
      this.textContent = "Show Less";
    }
  });

// Service section
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const skillsContent = this.previousElementSibling;

    if (skillsContent.classList.contains("show-skills")) {
      skillsContent.classList.remove("show-skills");
      this.textContent = "Show Skills";
    } else {
      skillsContent.classList.add("show-skills");
      this.textContent = "Hide Skills";
    }
  });
});

// Contact me
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the thank you message
    document.getElementById("thankYouMessage").style.display = "block";

    // Optionally, you can hide the form after submission
    document.getElementById("contactForm").style.display = "none";
  });
