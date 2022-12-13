const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.contain-slider')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('.main-slide__img').length


let activeSlideIndex = 0
if (window.matchMedia("(max-width: 575px)").matches) {
  sidebar.style.top = `-${(slidesCount - 1) * 500}px`
}
else if (window.matchMedia("(max-width: 767px)").matches) {
  sidebar.style.top = `-${(slidesCount - 1) * 500}px`
} 

else {
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
}


upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up')
  } else if (event.key === 'ArrowDown') {
    changeSlide('down')
  }
})

function changeSlide(direction) {
  if (direction === 'down') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount)
    {
      activeSlideIndex = 0
    }
  } else if (direction === 'up') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}



//Инициализируем swiper
var swiper = new Swiper(".mySwiper", {

  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
  },

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  keyboard: {
    enabled: true,
    onlyViewport:true,
  },
});

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

$('body').on('click touchstart', function () {
  const videoElement = document.getElementById('myVideoId');
  if (videoElement.playing) {
      // video is already playing so do nothing
  }
  else {
      // video is not playing
      // so play video now
      videoElement.play();
  }
});