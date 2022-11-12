$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});



function ativaNoScroll() {

  document.querySelectorAll('img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.getAttribute('data-src');
    };
  })

}

window.addEventListener('scroll', ativaNoScroll);


// Show section


const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      // entry.target.classList.add('principal-show-section');
      entry.target.classList.add('show');
    }
    else{
      // entry.target.classList.remove('principal-show-section');
      entry.target.classList.remove('show');
    }

  });
});

// const hiddenSection = document.querySelectorAll('.principal-section-hidden');
const hiddenSection = document.querySelectorAll('.hidden');
hiddenSection.forEach((el) => observer.observe(el));

// function rolling (){
//   let obj=event.target.dataset.nome;
//   document.getElementById (obj).scrollIntoView();
// }

// function init()
// {
//   document.getElementById('intro').addEventListener('click', rolling);
//   document.getElementById('aboutme').addEventListener('click', rolling);
//   document.getElementById('habilities').addEventListener('click', rolling);
//   // document.getElementById('btn').addEventListener('click', rolling);
// }

// window.addEventListener('load', init);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});