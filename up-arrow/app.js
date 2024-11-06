var scrollToTopButton = document.getElementById("scrollToTopButton");
// Add a scroll event listener
window.addEventListener("scroll", function () {
  // If user has scrolled down more than 100px, show the button
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    scrollToTopButton.classList.add("show-scroll-to-top");
  } else {
    scrollToTopButton.classList.remove("show-scroll-to-top");
  }
});
// Add a click event listener to scroll back to the top
scrollToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Scroll to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
