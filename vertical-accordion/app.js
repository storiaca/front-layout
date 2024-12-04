const columns = document.querySelectorAll(".column");
const innerElements = document.querySelectorAll(".inner-element");

const test = document.getElementById("test");

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

test.classList.remove("elementor-item-active");
const aboutLink = docuemnt.getElementById("about-link");
const servicesLink = docuemnt.getElementById("services-link");

document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector("[href='#about-us']");
  const servicesLink = document.querySelector("[href='#services']");

  aboutLink.classList.remove("elementor-item-active");
  servicesLink.classList.remove("elementor-item-active");
});

//<p>&copy; Sava Solutions 2024</p>;

// contact@savaitsolutions.com

// Recaptcha Use this site key in the HTML code your site serves to users.

const grid = document.querySelector(".rh_view_type .grid");

const list = document.querySelector(".rh_view_type .list");

grid.classList.add("active");
list.classList.remove("active");
