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
      mobomenu.style.transform = "translateX(-600px)";
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

function reset(){
  const gasline = document.querySelectorAll('.gasline')
  gasline.forEach(e => e.classList.remove("hidden"))
  const kitchen = document.querySelectorAll('.kitchen')
  kitchen.forEach(e => e.classList.remove("hidden"))
  const waterline = document.querySelectorAll('.waterline')
  waterline.forEach(e => e.classList.remove("hidden"))
  const bathroom = document.querySelectorAll('.bathroom')
  bathroom.forEach(e => e.classList.remove("hidden"))
}

const allimg = document.getElementById("Allimg")
const Bathroom = document.getElementById("Bathroom")
const Gasline = document.getElementById("Gasline")
const Kitchen = document.getElementById("Kitchen")
const Waterline = document.getElementById("Waterline")
allimg.addEventListener('click',function(){
  reset()
  Bathroom.classList.remove("isActive")
  Gasline.classList.remove("isActive")
  Kitchen.classList.remove("isActive")
  Waterline.classList.remove("isActive")
  allimg.classList.add("isActive")
})


Bathroom.addEventListener('click',function(){
  reset()
  const gasline = document.querySelectorAll('.gasline')
  gasline.forEach(e => e.classList.add("hidden"))
  const kitchen = document.querySelectorAll('.kitchen')
  kitchen.forEach(e => e.classList.add("hidden"))
  const waterline = document.querySelectorAll('.waterline')
  waterline.forEach(e => e.classList.add("hidden"))
  Bathroom.classList.add("isActive")
  Gasline.classList.remove("isActive")
  Kitchen.classList.remove("isActive")
  Waterline.classList.remove("isActive")
  allimg.classList.remove("isActive")
})

Gasline.addEventListener('click',function(){
  reset()
  const bathroom = document.querySelectorAll('.bathroom')
  bathroom.forEach(e => e.classList.add("hidden"))
  const kitchen = document.querySelectorAll('.kitchen')
  kitchen.forEach(e => e.classList.add("hidden"))
  const waterline = document.querySelectorAll('.waterline')
  waterline.forEach(e => e.classList.add("hidden"))
  Bathroom.classList.remove("isActive")
  Gasline.classList.add("isActive")
  Kitchen.classList.remove("isActive")
  Waterline.classList.remove("isActive")
  allimg.classList.remove("isActive")
})

Kitchen.addEventListener('click',function(){
  reset()
  const kitchen = document.querySelectorAll('.kitchen')
  kitchen.forEach(e => e.classList.remove("hidden"))
  const bathroom = document.querySelectorAll('.bathroom')
  bathroom.forEach(e => e.classList.add("hidden"))
  const gasline = document.querySelectorAll('.gasline')
  gasline.forEach(e => e.classList.add("hidden"))
  const waterline = document.querySelectorAll('.waterline')
  waterline.forEach(e => e.classList.add("hidden"))
  Bathroom.classList.remove("isActive")
  Gasline.classList.remove("isActive")
  Kitchen.classList.add("isActive")
  Waterline.classList.remove("isActive")
  allimg.classList.remove("isActive")
})

Waterline.addEventListener('click',function(){
  reset()
  const kitchen = document.querySelectorAll('.kitchen')
  kitchen.forEach(e => e.classList.add("hidden"))
  const bathroom = document.querySelectorAll('.bathroom')
  bathroom.forEach(e => e.classList.add("hidden"))
  const gasline = document.querySelectorAll('.gasline')
  gasline.forEach(e => e.classList.add("hidden"))
  const waterline = document.querySelectorAll('.waterline')
  waterline.forEach(e => e.classList.remove("hidden"))
  Bathroom.classList.remove("isActive")
  Gasline.classList.remove("isActive")
  Kitchen.classList.remove("isActive")
  Waterline.classList.add("isActive")
  allimg.classList.remove("isActive")
})






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
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


// Function to toggle the accordion
function toggleAccordion(id) {
  // Close all other accordions
  for (let i = 1; i <= 5; i++) {
    if (i !== id) {
      document.getElementById('content-' + i).classList.add('hidden');
      document.getElementById('icon-' + i).classList.remove('rotate-180');
    }
  }

  // Toggle the selected accordion
  const content = document.getElementById('content-' + id);
  const icon = document.getElementById('icon-' + id);
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}














