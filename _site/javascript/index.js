let toggle = false;
// target element
const moboiconAll = document.querySelectorAll(".menuToggle");


const mobomenu = document.getElementById("mobileMenu");

moboiconAll.forEach((moboicon) => {
  moboicon.addEventListener("click", (e) => {
    if (!toggle) {
      mobomenu.style.transform = "translateX(0)";
      toggle = true;
    } else {
      mobomenu.style.transform = "translateX(-800px)";
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
    mobomenu.style.transform = "translateX(-600px)";
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
function toggleDropdown2() {
  const dropdown = document.getElementById("mobileDropdown2");
  const dropSymbole = document.getElementById("dropMenu2");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}

// Add current year in footer
const yearSpan = document.getElementById("year");

// Set the text content of the span
yearSpan.textContent = new Date().getFullYear(); // Replace "2024" with any text you want to add



// take me top
// Show the button when scrolled down 100px
window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    backToTopButton.classList.remove("hidden");
    backToTopButton.classList.add("opacity-100");
  } else {
    backToTopButton.classList.add("hidden");
    backToTopButton.classList.remove("opacity-100");
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// navbar
let lastScrollTop = 0;
const navbar = document.getElementById("navbar")
window.addEventListener("scroll",function(){
  const scrollTop = window.pageYOffset || window.scrollY || documentElement.scrollTop
  if(!toggle){if(scrollTop > lastScrollTop){
    navbar.style.top = "-100px"
  }else{
    navbar.style.top = "0"
  }}
  lastScrollTop = scrollTop
})





// image gallary
// document.addEventListener('DOMContentLoaded', function () {
//   // Ensure the elements are correctly selected from the DOM
//   const allimg = document.getElementById("Allimg");
//   const Bathroom = document.getElementById("Bathroom");
//   const Gasline = document.getElementById("Gasline");
//   const Kitchen = document.getElementById("Kitchen");
//   const Waterline = document.getElementById("Waterline");

//   // Check if the elements exist before adding event listeners
//   if (allimg && Bathroom && Gasline && Kitchen && Waterline) {
//     // Function to reset visibility for all elements
//     function resetVisibility() {
//       ['gasline', 'kitchen', 'waterline', 'bathroom'].forEach(className => {
//         document.querySelectorAll(`.${className}`).forEach(e => e.classList.remove("hidden"));
//       });
//     }

//     // Function to handle hiding elements and activating the clicked section
//     function handleSectionClick(sectionToShow) {
//       if (sectionToShow === 'allimg') {
//         // When 'allimg' is clicked, show everything
//         resetVisibility();
//       } else {
//         // Otherwise, hide the sections that aren't selected
//         resetVisibility();
//         const sections = ['bathroom', 'gasline', 'kitchen', 'waterline'];
//         sections.forEach(section => {
//           const elements = document.querySelectorAll(`.${section}`);
//           if (section !== sectionToShow) {
//             elements.forEach(e => e.classList.add("hidden"));
//           }
//         });
//       }

//       // Reset all 'isActive' states
//       [Bathroom, Gasline, Kitchen, Waterline, allimg].forEach(elem => elem.classList.remove("isActive"));
    
//       // Add 'isActive' to the clicked section and remove from others
//       if (sectionToShow === 'allimg') {
//         allimg.classList.add("isActive");
//       } else {
//         document.getElementById(sectionToShow).classList.add("isActive");
//       }
//     }

//     // Event listeners for each section
//     allimg.addEventListener('click', () => handleSectionClick('allimg'));
//     Bathroom.addEventListener('click', () => handleSectionClick('bathroom'));
//     Gasline.addEventListener('click', () => handleSectionClick('gasline'));
//     Kitchen.addEventListener('click', () => handleSectionClick('kitchen'));
//     Waterline.addEventListener('click', () => handleSectionClick('waterline'));
//   } else {
//     console.error("One or more elements are not found in the DOM.");
//   }
// });








// swiper js
new Swiper('.slider-wrapper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
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
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1300: {
      slidesPerView: 3
    }
  }
});

 


// Accordion

function toggleAccordion(index) {
  let activeAccordion = null;
  const content = document.getElementById(`content-${index}`);
  const allContents = document.querySelectorAll('[id^="content-"]');

  // Close all accordion contents except the clicked one
  allContents.forEach((item, ind) => {
    if (item !== content) {
      item.classList.add('max-h-0');
      item.classList.remove('max-h-[1000px]');
    }
  });

  if (activeAccordion === index) {
    content.classList.add('max-h-0');
    content.classList.remove('max-h-[1000px]');
    activeAccordion = null;
  } else {
    content.classList.remove('max-h-0');
    content.classList.add('max-h-[1000px]');
    activeAccordion = index;
  }
}
