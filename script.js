function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your preorder has been received.");
  this.reset();
});

