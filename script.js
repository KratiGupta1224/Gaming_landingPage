const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

 
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace('+', '');
    const increment = target / 200; // Adjust speed here

    if (current < target) {
      counter.innerText = Math.ceil(current + increment) + '+';
      setTimeout(updateCount, 20); // update every 20ms
    } else {
      counter.innerText = target + '+';
    }
  };

  updateCount();
});


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });
  



