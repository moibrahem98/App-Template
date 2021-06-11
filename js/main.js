$(document).ready(function () {

    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    })
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })

    $.scrollIt(
        { topOffset: -50 }
    );
});

// customize the dark btn
let darkIcon = document.getElementById('dark-icon');

function darkToggle() {
    let element = document.body;
    element.classList.toggle("dark");
}

darkIcon.onclick = darkToggle;

// customize popup video
let btn = document.getElementById('play-btn');
let closeBtn = document.getElementById('close-btn');
let popUp = document.getElementById('video-popup');

// When the user clicks on the button, open the modal
btn.onclick = function () {
    popUp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    popUp.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}

// preloader settings

let preloader = document.getElementById("preloader");

window.addEventListener('load',function(){
    preloader.style.display = "none"
})