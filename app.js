
// Mobile menu close function
function closeMobileMenu() {
  const menuWrapper = document.querySelector(".menu-wrapper");

  document.querySelector('.menu-btn').classList.remove('open');

  gsap.to("#menu-text", {
    y: 0,
    rotationX: 0,
    opacity: 1,
    duration: 0.8,
    ease: "expo.inOut"
  });

  gsap.to("#close-text", {
    y: 20,
    rotationX: 90,
    duration: 0.8,
    ease: "expo.inOut"
  });

  gsap.to(menuWrapper, {
    width: "0vw",
    duration: 0.8,
    ease: "expo.inOut",
  });

  gsap.to(".menu-links a", {
    x:100,

    duration: 1,
    ease: "expo.inOut",
    stagger: 0.05,
  });
}

// Mobile menu toggle button
document.querySelector(".menu-btn").addEventListener("click", function () {
  const menuWrapper = document.querySelector(".menu-wrapper");
  const isOpen = this.classList.toggle("open");

  if (isOpen) {
    gsap.to("#menu-text", {
      y: -22,
      rotationX: -90,
      duration: 0.8,
      ease: "expo.inOut"
    });

    gsap.to("#close-text", {
      y: 0,
      rotationX: 0,
      opacity: 1,
      duration: 0.8,
      ease: "expo.inOut"
    });

    gsap.to(menuWrapper, {
      width: "100vw",
      duration: 0.8,
      ease: "expo.inOut"
    });

    gsap.to(".menu-links a", {
      opacity: 1,
      x:0,
      duration: 0.5,
      ease: "expo.inOut",
      stagger: 0.05,
    });
  } else {
    closeMobileMenu(); // Close menu if already open
  }
});

// Navbar link scroll animation
const navbarLinks = document.querySelectorAll('.navbar-links a, .menu-links a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });

    if (this.closest('.menu-links')) {
      closeMobileMenu(); // Close menu on mobile
    }
  });
});




/* -------------------------------------------------------------------------- */
/*                                HERO SECTION                                */
/* -------------------------------------------------------------------------- */

gsap.fromTo('.hero-content span h1, .hero-content span svg', { y: '200%', visibility: 'visible' }, {
  y: '0%',
  duration: 1,
  ease: 'cric.out',
  delay: 0.5
});






// ABOUT SECTION 

// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.about-wrapper div', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  stagger:0.05,
  scrollTrigger: {
    trigger: "#about-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});



lottie.loadAnimation({
  container: document.querySelector('.about-lottie'), 
  renderer: 'svg', 
  loop: true, 
  autoplay: true, 
  path: 'Assets/JSON/teeth.json'
});

 lottie.loadAnimation({
  container: document.querySelector('.about-icon'), 
  renderer: 'svg', 
  loop: true, 
  autoplay: true, 
  path: 'Assets/JSON/smile.json'
});




// service 



gsap.fromTo('.services-heading h1', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  scrollTrigger: {
    trigger: "#services-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutStats = document.querySelector(".about-stats span");

  function animatePercentage(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start) + "%";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatePercentage(aboutStats, 0, 70, 2000); // 0 se 70 tak 2000ms mein
        observer.unobserve(entry.target); // Animation sirf ek martaba chalegi
      }
    });
  });

  observer.observe(document.querySelector(".about-stats"));
});



document.addEventListener("DOMContentLoaded", function () {

const services = document.querySelectorAll(".service");

window.addEventListener("scroll", () => {
  services.forEach(service => {
    const image = service.querySelector(".service-image");
    const rect = service.getBoundingClientRect();
    
    // Calculate width based on scroll position
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Normalize the width between 10% to 40% based on scroll position
      let widthPercentage = Math.min(40, 10 + (30 * (1 - rect.top / window.innerHeight)));
      
      // For small screens, limit width to 15%
      if (window.innerWidth <= 768) {
        widthPercentage = 15;
      }

      image.style.width = widthPercentage + "%";
    }
  });
});
});

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let typeSplit = new SplitType('.about-p p', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('.about-p p .word', {
  opacity: 0.5,
  duration: 0.5,
  ease: 'circ.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '.about-p',
    start: 'top 80%',
    end: 'bottom 80%',
    scrub:true,
    
  }
})


// SCROLLER ANIMATION 
gsap.registerPlugin(ScrollTrigger);

gsap.to(".fixed-svg", {
    rotation: 360,
    scrollTrigger: {
        trigger: ".centered-section",
        start: "top center",
        end: "bottom top",
        scrub: true,
    }
});

document.querySelectorAll(".text-row").forEach((text) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            start: "top 70%",
            end: "bottom 20%",
            scrub: true,
        }
    });

    tl.fromTo(
        text,
        { gap: "0.5rem" }, // Starting gap
        { gap: "10rem" }
    ).to(
        text,
        { gap: "0.5rem" }    // Smoothly revert to 0.5rem
    );
});


// TESTIMONIALS 


gsap.fromTo('.testimonial-section div', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  stagger:0.2,
  scrollTrigger: {
    trigger: "#testimonials-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});

const testimonials = [
  {
    text: "I got an immediate appointment during an emergency, and my issue was resolved swiftly. I appreciate the professionalism here.",
    name: "Michael S.",
    position: "Sales Manager"
  },
  {
    text: "The service here is incredible! The staff is friendly, and they truly care about their patients.",
    name: "John D.",
    position: "Marketing Specialist"
  },
  {
    text: "The team was very responsive and provided excellent support during my treatment. Highly recommended!",
    name: "Sarah K.",
    position: "Product Manager"
  },
  {
    text: "I felt well cared for and valued as a patient. I will definitely come back for future treatments!",
    name: "Emily R.",
    position: "HR Manager"
  }
];

function showTestimonial(index) {
  // Update testimonial text, name, and position
  document.getElementById("testimonial-text").innerText = testimonials[index].text;
  document.getElementById("client-info").innerHTML = `<strong>${testimonials[index].name}</strong><br>${testimonials[index].position}`;

  // Remove active class from all avatars and add to clicked one
  const avatars = document.querySelectorAll(".avatar");
  avatars.forEach(avatar => avatar.classList.remove("active"));
  avatars[index].classList.add("active");
}


// FAQ section toggle logic remains unchanged

gsap.fromTo('.faq-section div', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  stagger:0.05,
  scrollTrigger: {
    trigger: "#faq-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});


let question = document.querySelectorAll(".faq-question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".faq-question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.querySelector('.faq-toggle').classList.toggle('rotate');
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    question.querySelector('.faq-toggle').classList.toggle('rotate');
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});


// VFX SECTION 

gsap.fromTo('.vfx-wrapper div', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  stagger:0.05,
  scrollTrigger: {
    trigger: "#vfx-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});

 lottie.loadAnimation({
  container: document.querySelector('.vfx-lottie'), 
  renderer: 'svg', 
  loop: true, 
  autoplay: true, 
  path: 'Assets/JSON/vfx.json'
});

 lottie.loadAnimation({
  container: document.querySelector('.vfx-icon'), 
  renderer: 'svg', 
  loop: true, 
  autoplay: true, 
  path: 'Assets/JSON/vfx-icon.json'
});


// CONTACT SECTION 
gsap.fromTo('.contact-form-container div', { y: '50%', visibility: 'visible', opacity:0 }, {
  y: '0%',
  duration: 1,
  opacity: 1,
  ease: 'cric.out',
  stagger:0.05,
  scrollTrigger: {
    trigger: "#contact-section",
    start: "top 80%", // Trigger when #about-section is 80% visible
    once: true, // Trigger animation only once
  },
});

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Form reload ko rokta hai

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const popupMessage = document.getElementById("popupMessage");
  const successSound = new Audio("Assets/Sound/Success.mp3"); // Success sound file path
  const errorSound = new Audio("Assets/Sound/Error.mp3"); // Error sound file path

  if (name && email && phone && message) {
      popupMessage.textContent = "Your message has been sent successfully!";
      popupMessage.classList.remove("error");
      popupMessage.classList.add("show", "success"); // Show success message
      successSound.play(); // Play success sound
      
      // Form reset karega
      document.getElementById("contactForm").reset();
      
      // 2 seconds ke baad opacity ko fade out karega
      setTimeout(() => {
          popupMessage.classList.remove("show"); // Smoothly fade out
          setTimeout(() => {
              popupMessage.classList.remove("success");
              popupMessage.textContent = ""; // Clear text content
          }, 500); // Match CSS transition duration
      }, 2000);
  } else {
      popupMessage.textContent = "Please fill all the fields!";
      popupMessage.classList.remove("success");
      popupMessage.classList.add("show", "error"); // Show error message
      errorSound.play(); // Play error sound
      
      // 2 seconds ke baad opacity ko fade out karega
      setTimeout(() => {
          popupMessage.classList.remove("show"); // Smoothly fade out
          setTimeout(() => {
              popupMessage.classList.remove("error");
              popupMessage.textContent = ""; // Clear text content
          }, 500); // Match CSS transition duration
      }, 2000);
  }
});


