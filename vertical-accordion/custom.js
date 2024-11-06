document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector("[href='#about-us']");
  const servicesLink = document.querySelector("[href='#services']");
  const footerLinkActive = document.querySelector(
    ".footer-link-menu ul li.e-current"
  );

  aboutLink.classList.remove("elementor-item-active");
  servicesLink.classList.remove("elementor-item-active");
  footerLinkActive.classList.remove("e-current");
});

document.addEventListener("DOMContentLoaded", function () {
  const footerLinkActive = document.querySelector(
    ".footer-link-menu ul li.e-current"
  );

  footerLinkActive.classList.remove("e-current");
});

const footerLinkActive = document.querySelector(
  ".footer-link-menu ul li.e-current"
);

footerLinkActive.classList.remove("e-current");

setTimeout(() => {
  const aboutLink = document.querySelector("[href='#about-us']");
  const servicesLink = document.querySelector("[href='#services']");
  const footerLinkActive = document.querySelector(
    ".footer-link-menu ul li.e-current"
  );

  aboutLink.classList.remove("elementor-item-active");
  servicesLink.classList.remove("elementor-item-active");
  footerLinkActive.classList.remove("e-current");
  console.log("nesto");
}, 1500);
