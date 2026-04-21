const contextMenu = document.querySelector(".wrapper");
const targetElements = document.querySelectorAll(".menu-click, .menu-clickk");
const itemShare = document.querySelector(".item.share");
const langMenu = document.querySelector(".share-menu");

// Function to toggle context menu display
const toggleContextMenu = e => {
    e.preventDefault();
    contextMenu.style.display = "block";
};

// Attach click event listeners to target elements
targetElements.forEach(element => {
    element.addEventListener("click", toggleContextMenu);
});

document.addEventListener("click", e => {
    if (![...targetElements].includes(e.target) && !contextMenu.contains(e.target)) {
        contextMenu.style.display = "none";
    }
});


function enableDisableVideos() {
    var videos = document.querySelectorAll('.swiper-slide video');
    videos.forEach(function (video) {
        var parentElement = video.parentNode;
        if (parentElement.classList.contains('swiper-slide-active')) {
            video.controls = true;
        } else {
            video.controls = false;
            video.pause();
        }
    });
}



var swiper = new Swiper('.swiper', {
    slidesPerView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    breakpoints: {
        // when window width is >= 1024px
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});

swiper.on('slideChangeTransitionEnd', function () {
    enableDisableVideos();
});