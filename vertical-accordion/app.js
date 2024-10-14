const columns = document.querySelectorAll(".column");
const innerElements = document.querySelectorAll(".inner-element");

columns.forEach((click) => {
  click.addEventListener("click", (event) => {
    // Iterate over all columns
    columns.forEach((column) => {
      if (column === click) {
        // Set the clicked column width to 100%
        column.classList.add("expanded");
      } else {
        // Shrink the width of other columns
        column.classList.remove("expanded");
      }
    });

    // Iterate over all inner elements
    innerElements.forEach((innerElement) => {
      // Add the active class to the inner element of the clicked column
      if (innerElement.parentElement === click) {
        innerElement.classList.add("active");
      } else {
        innerElement.classList.remove("active");
      }
    });
  });
});
