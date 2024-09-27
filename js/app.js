const burgerLines = document.getElementById("burger-lines");
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.style.display = "none";

burgerLines.addEventListener("click", () => {
  const computedStyle = window.getComputedStyle(burgerMenu);
  if (burgerMenu.style.display == "none") {
    burgerMenu.style.display = "flex";
    burgerLines.classList.add("active");
  } else {
    burgerMenu.style.display = "none";
    burgerLines.classList.remove("active");
  }
});