let toggle = false;
// target element
const moboiconAll = document.querySelectorAll(".menuToggle");
console.log(moboiconAll);

const mobomenu = document.getElementById("mobileMenu");

moboiconAll.forEach((moboicon) => {
  moboicon.addEventListener("click", (e) => {
    if (!toggle) {
      mobomenu.style.transform = "translateX(0)";
      toggle = true;
    } else {
      mobomenu.style.transform = "translateX(-500px)";
      toggle = false;
      const dropSymbole = document.getElementById("dropMenu");
      dropSymbole.classList.remove("rotate-180");
      const dropdown = document.getElementById("mobileDropdown");
      dropdown.classList.add("hidden");
    }
  });
});

// Close the menu if clicking outside of it
document.addEventListener("click", (e) => {
  if (
    toggle &&
    !mobomenu.contains(e.target) &&
    !e.target.closest(".menuToggle")
  ) {
    mobomenu.style.transform = "translateX(-500px)";
    toggle = false;
    const dropSymbole = document.getElementById("dropMenu");
    dropSymbole.classList.remove("rotate-180");
    const dropdown = document.getElementById("mobileDropdown");
    dropdown.classList.add("hidden");
  }
});

function toggleDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  const dropSymbole = document.getElementById("dropMenu");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}

// Add current year in footer
const yearSpan = document.getElementById("year");

// Set the text content of the span
yearSpan.textContent = new Date().getFullYear(); // Replace "2024" with any text you want to add


// swiper js
new Swiper('.slider-wrapper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});