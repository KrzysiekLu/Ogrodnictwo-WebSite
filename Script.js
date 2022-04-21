const toggleButton = document.querySelector(".navbar_toggle-button");
const navbarLinksList = document.querySelector(".navbar_links ul");
const sections = document.querySelectorAll("section");

const offerCardsBtns = document.querySelectorAll(".offer_card button");
const btnMoveUp = document.querySelector(".move-up");

// open and close mobile nav-menu
toggleButton.addEventListener("click", () => {
  navbarLinksList.classList.toggle("active");
});

navbarLinksList.childNodes.forEach((item) =>
  item.addEventListener("click", () =>
    navbarLinksList.classList.remove("active")
  )
);

// intersection observer for section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
    rootMargin: "50px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Open offer-card description
offerCardsBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // e.preventDefault();
    e.target.parentElement.children[2].classList.toggle("show-offer");
    console.log(e.target.parentElement.children[2]);
  })
);
btnMoveUp.addEventListener("click", () =>
  scrollTo({ top: 0, left: 0, behavior: "smooth" })
);
