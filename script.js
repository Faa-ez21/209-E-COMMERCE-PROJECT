
// Redirect to the cart page when "Browse our shop" is clicked
document.getElementById("browse-shop")?.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// Show a message when "Explore Now" is clicked
document.getElementById("explore-now")?.addEventListener("click", () => {
  alert("Get ready to explore the wonders of Ghana!");
});

// Handle Login form submission
document.querySelector(".login-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to homepage after login
  } else {
      alert("Invalid username or password. Please try again.");
  }
});
