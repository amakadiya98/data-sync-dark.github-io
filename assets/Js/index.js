$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".mainSlider").owlCarousel({
        items: 2,
        loop: true,
        margin: 48,
        nav: true,
        autoWidth: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        slideBy: 2,  
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                autoplay: true,
                items: 1
            },
            600: {
                autoplay: true,
                items: 1
            },
            1000: {
                items: 2,
                autoplay: false,
            }
        }
    })

});

$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".clientSlider").owlCarousel({
        items: 2,
        loop: true,
        margin: 48,
        nav: true,
        autoWidth: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        slideBy: 2,  
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                autoplay: true,
                items: 1
            },
            600: {
                autoplay: true,
                items: 1
            },
            1000: {
                items: 2,
                autoplay: false,
            }
        }
    })

});


$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" src="./assets/images/prewIcon.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/nextIcon.svg">'
    $(".tabSlider").owlCarousel({
        items: 1,
        loop: true,
        margin: 48,
        nav: true,
        autoWidth: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});




$(document).ready(function () {
    $('.flip-button1').click(function () {
        $('.card1 ').addClass('flipped');
    });

    $('.flip-back-button1').click(function () {
        $('.card1 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button2').click(function () {
        $('.card2 ').addClass('flipped');
    });

    $('.flip-back-button2').click(function () {
        $('.card2 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button3').click(function () {
        $('.card3 ').addClass('flipped');
    });

    $('.flip-back-button3').click(function () {
        $('.card3 ').removeClass('flipped');
    });
});

$(document).ready(function () {
    $('.flip-button4').click(function () {
        $('.card4 ').addClass('flipped');
    });

    $('.flip-back-button4').click(function () {
        $('.card4 ').removeClass('flipped');
    });
});


// active nav
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('activeNav');
      });
  
      this.classList.add('activeNav');
    });
  });


//   active footer
document.querySelectorAll('.footer_cont_p2_div_a').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.footer_cont_p2_div_a').forEach(link => {
        link.classList.remove('active-footer-link');
      });
      this.classList.add('active-footer-link');
    });
  });


//   select2

// Toggle the dropdown on click
document.querySelector('.custom-select-trigger').addEventListener('click', function() {
    document.querySelector('.custom-options').classList.toggle('open');
  });
  
// Update the selected option on click
document.querySelectorAll('.custom-option').forEach(function(option) {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const flagClass = this.querySelector('.flag-icon').className;
      const trigger = document.querySelector('.custom-select-trigger');
      
      trigger.innerHTML = `<span class="${flagClass}"></span>`;
      document.querySelector('#country_code').value = value;
      document.querySelector('.custom-options').classList.remove('open');
    });
  });
  
  
  // Close the dropdown if clicked outside
  document.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      document.querySelector('.custom-options').classList.remove('open');
    }
  });
  
//   fixed bar
// window.onscroll = function() {
//     toggleFixedHeader();
//   };

//   function toggleFixedHeader() {
//     const header = document.querySelector('.header-section');
//     if (window.scrollY > 1) {
//       header.classList.add('fixed');
//     } else {
//       header.classList.remove('fixed');
//     }
//   }