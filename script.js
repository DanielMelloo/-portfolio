


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


// ================= //
// Section Animation //
// ================= //

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


// ============== //
// Scroll To View //
// ============== //


$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){

        window.location.hash = hash;
      });
    } 
  });
});



// ================== //
// Hover to View Text //
// ================== //



let description0 = document.getElementById ('description0');


function showText (elementHover) {
    let id = parseInt(elementHover.id.slice(7), 10);
    let elementToDisplay = document.getElementById ('description' + id);

    elementToDisplay.setAttribute('style', 'display: block');
    description0.setAttribute ('style', 'display: none');
}


function resetText (elementHoverOff){
    let id = parseInt(elementHoverOff.id.slice(7), 10);
    let elementToDisplayOff = document.getElementById ('description' + id);

    elementToDisplayOff.setAttribute('style', 'display: none');
    description0.setAttribute ('style', 'display: block');
}

    
