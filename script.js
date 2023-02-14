window.onload = function () {
    Particles.init({
        selector: '.background'
    });
};


let headerMenu = document.getElementById('header-menu');


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



// =============== //
// Light-Dark Mode //
// =============== //

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});




// toggleButton.addEventListener('click', () => {

//     if (localStorage.getItem ('lightMode') == 1){

//         localStorage.setItem("lightMode", 0);

//         document.body.classList.toggle('light-mode');
//         alert ('dark')

//     }

//     else if (localStorage.getItem ('lightMode') == 0){

//         localStorage.setItem("lightMode", 1);

//         document.body.classList.toggle('light-mode');
//         alert ('light')
//     }
// });


// ============ //
// Show section //
// ============ //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            // entry.target.classList.add('principal-show-section');
            entry.target.classList.add('show');

            switch (entry.target.id) {

                case 'intro':

                    for (let child of headerMenu.children) {
                        
                        if ( child.getAttribute('href').substring(1) == 'intro') {

                            child.classList.add('is-active'); 
                        }
                        
                        else{
                            child.classList.remove('is-active'); 
                        }
                    }

                    break;

                case 'aboutme':

                    for (let child of headerMenu.children) {
                        
                        if ( child.getAttribute('href').substring(1) == 'aboutme') {

                            child.classList.add('is-active'); 
                        }

                        else{
                            child.classList.remove('is-active'); 
                        }
                    }

                    break;

                case 'habilities':

                    for (let child of headerMenu.children) {
                        
                        if ( child.getAttribute('href').substring(1) == 'habilities') {

                            child.classList.add('is-active'); 
                        }

                        else{
                            child.classList.remove('is-active'); 
                        }
                    }

                    break;

                default:
                    break;
            }


        } else {
            // entry.target.classList.remove('principal-show-section');
            entry.target.classList.remove('show');
        }

    });
});


// const hiddenSection = document.querySelectorAll('.principal-section-hidden');
const hiddenSection = document.querySelectorAll('.hidden');
hiddenSection.forEach((el) => observer.observe(el));



// ================== //
// Hover to View Text //
// ================== //



let description0 = document.getElementById('description0');


function showText(elementHover) {
    let id = parseInt(elementHover.id.slice(7), 10);
    let elementToDisplay = document.getElementById('description' + id);

    elementToDisplay.setAttribute('style', 'display: block');
    description0.setAttribute('style', 'display: none');
}


function resetText(elementHoverOff) {
    let id = parseInt(elementHoverOff.id.slice(7), 10);
    let elementToDisplayOff = document.getElementById('description' + id);

    elementToDisplayOff.setAttribute('style', 'display: none');
    description0.setAttribute('style', 'display: block');
}