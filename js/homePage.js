
//make categories scrollable 

  const container = document.getElementById('menuContainer');
  const scrollAmount = 220; 

  document.getElementById('rightBtn').addEventListener('click', () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  document.getElementById('leftBtn').addEventListener('click', () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
//animation on the features card items 
  const items = document.querySelectorAll('.item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // run once
        }
      });
    },
    {
      threshold: 0.4
    }
  );

items.forEach(item => observer.observe(item));













//timer
let totalTime = 10 * 24 * 60 * 60; // 10 days in seconds

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  
  const timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer);
      return;
    }

    let days = Math.floor(totalTime / (24 * 60 * 60));
    let hours = Math.floor((totalTime % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalTime % (60 * 60)) / 60);
    let seconds = totalTime % 60;

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    
    totalTime--;
  }, 1000);
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
        menuBtn.addEventListener("click", () => {
          if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
          } else {
            mobileMenu.style.display = "flex";
          }
    
    
    
    });
