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

  
document.documentElement.style.scrollBehavior = "smooth";

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


$('#hoverOn1').mouseover(function(){
  // obj=document.getElementById()
  $('#description0').css('display', 'none');
  $('#description1').css('display', 'block');
});

$('#hoverOn1').mouseout(function(){
  $('#description1').css('display', 'none');
  $('#description0').css('display', 'block');
});



$('#hoverOn2').mouseover(function(){
  // obj=document.getElementById()
  $('#description0').css('display', 'none');
  $('#description2').css('display', 'block');
});

$('#hoverOn2').mouseout(function(){
  $('#description2').css('display', 'none');
  $('#description0').css('display', 'block');
});



$('#hoverOn3').mouseover(function(){
  // obj=document.getElementById()
  $('#description0').css('display', 'none');
  $('#description3').css('display', 'block');
});

$('#hoverOn3').mouseout(function(){
  $('#description3').css('display', 'none');
  $('#description0').css('display', 'block');
});



$('#hoverOn4').mouseover(function(){
  // obj=document.getElementById()
  $('#description0').css('display', 'none');
  $('#description4').css('display', 'block');
});

$('#hoverOn4').mouseout(function(){
  $('#description4').css('display', 'none');
  $('#description0').css('display', 'block');
});



$('#hoverOn5').mouseover(function(){
  // obj=document.getElementById()
  $('#description0').css('display', 'none');
  $('#description5').css('display', 'block');
});

$('#hoverOn5').mouseout(function(){
  $('#description5').css('display', 'none');
  $('#description0').css('display', 'block');
});