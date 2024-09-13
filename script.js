// 1. FAQ Accordion Toggle
const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");

    const svgIcon = box.querySelector(".svg");
    if (box.classList.contains("active")) {
      box.style.height = "auto";
      svgIcon.style.transform = "rotate(45deg)";
    } else {
      box.style.height = "70px";
      svgIcon.style.transform = "rotate(0deg)";
    }
  });
});

// 2. Hero Section: Get Started Button Interaction
const getStartedButton = document.querySelector(".btn-red");
const emailInput = document.querySelector("input[type='text']");

getStartedButton.addEventListener("click", () => {
  const emailValue = emailInput.value;
  if (emailValue === "" || !validateEmail(emailValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Welcome! We'll guide you through the next steps.");
    emailInput.value = "";  // Clear the input field
  }
});

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 3. Sign-In Button Functionality
const signInButton = document.querySelector(".btn-red-sm");

signInButton.addEventListener("click", () => {
  alert("Redirecting to the Sign-In page...");
  // Add actual redirection logic here if needed
  // Example: window.location.href = "signin.html";
});

// 4. Language Selection Button Toggle
const languageButton = document.querySelector(".btn");

languageButton.addEventListener("click", () => {
  if (languageButton.innerText === "English") {
    languageButton.innerText = "Hindi";  // Switch to another language (can expand further)
    alert("Language changed to Hindi.");
  } else {
    languageButton.innerText = "English";  // Switch back
    alert("Language changed to English.");
  }
});
