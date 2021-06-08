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
});
// document.querySelector(document).ready(function(){
//     const videoSrc = document.querySelector("#player-1").attr('src');
//     document.querySelector(".video-play-btn", '.video-popup').addEventListener('click',function(){
//         if(document.querySelector(".video-popup").classList.contains('video-popup-open')){
//             document.querySelector('video-popup').removeClass('video-popup-open');
//             document.querySelector('#player-1').attr('src','');
//         }else {
//             document.querySelector(".video-popup").classList.add('video-popup-open');
//             if(document.querySelector('#player-1').attr('src')==''){
//                 document.querySelector('#player-1').attr('src',videoSrc)
//             }
//         }
//     });
// });

// let playBtn = document.getElementById('play-btn');
// let pop = document.getElementById('video-popup');

// document.onload =() => {
//     playBtn.addEventListener('click',function(){

//         alert('hello')
//     });
// } 