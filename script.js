window.onload = function () {
    Particles.init({
        selector: '.background'
    });
};

// ========= //
// Variables //
// ========= //


let headerMenu = document.getElementById('header-menu');

let searchBarInput = document.getElementById('search-bar-input');
let header = document.querySelector('.header');

const toggleButton = document.querySelector('.dark-light');

const hiddenSection = document.querySelectorAll('.hidden');

let description0 = document.getElementById('description0');


// ================ //
// Search Bar Slide //
// ================ //


searchBarInput.addEventListener('focus', function() {
    header.classList.add('wide');
});

searchBarInput.addEventListener('blur', function() {
    header.classList.remove('wide');
});



// =============== //
// Light-Dark Mode //
// =============== //



toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});



// ============ //
// Show section //
// ============ //



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');

            if (entry.target.classList.contains('introSec')){

                for (let child of headerMenu.children) {
                        
                    if ( child.getAttribute('href').substring(1) == 'intro') {

                        child.classList.add('is-active'); 
                    }
                    
                    else{
                        child.classList.remove('is-active'); 
                    }
                }

            }
            
            else if (entry.target.classList.contains('aboutmeSec')) {

                for (let child of headerMenu.children) {
                        
                    if ( child.getAttribute('href').substring(1) == 'aboutme') {

                        child.classList.add('is-active'); 
                    }

                    else{
                        child.classList.remove('is-active'); 
                    }
                }

            }
            
            else if (entry.target.classList.contains('habilitiesSec')) {

                for (let child of headerMenu.children) {
                        
                    if ( child.getAttribute('href').substring(1) == 'habilities') {

                        child.classList.add('is-active'); 
                    }

                    else{
                        child.classList.remove('is-active'); 
                    }
                }
            }
        } 

        else {
            entry.target.classList.remove('show');
        }

    });
});


hiddenSection.forEach((el) => observer.observe(el));



// ================== //
// Hover to View Text //
// ================== //



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