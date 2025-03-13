var myFullpage = new fullpage('#fullpage', {
  controlArrows: true,
  controlArrowsHTML: [
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left">',
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right">'
  ],
  licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  scrollBar: false,
  slidesNavigation: true,
  slidesNavigationPosition: 'bottom',

});

// =======================================================
// 팝업 열기 + 닫기 =========================================
// 스크롤 비활성화 콜백 함수
const disableScrolling = () => {
  if (typeof fullpage_api !== 'undefined') {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
  }
};

// 스크롤 활성화 콜백 함수
const enableScrolling = () => {
  if (typeof fullpage_api !== 'undefined') {
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
  }
};

document.querySelectorAll('.design_box').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.detail_pop').forEach(pop => {
      pop.style.display = 'none';
    });

    const tab = item.getAttribute('data-tab');
    const popUp = document.querySelector(`#${tab}`);
    popUp.style.display = 'flex';

    disableScrolling(); // 열기 콜백
  });
});

document.querySelectorAll('.detail_pop').forEach(closeBtn => {
  closeBtn.addEventListener('click', (event) => {
    const popUp = event.target.closest('.detail_pop');
    popUp.style.display = 'none';

    enableScrolling(); // 닫기 콜백
  });
});

// // =======================================================
// // clone_5 스와이퍼 ========================================
var swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 10000,
  // },
  keyboard: true,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
});

// function setViewportHeight() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// setViewportHeight();

// window.addEventListener('resize', setViewportHeight);


// // =======================================================
// // coding fullpage ========================================
// $(document).ready(function () {
//   $('#fullpage').fullpage({
//     navigation: true,
//     scrollingSpeed: 500,
//     licenseKey: 'YOUR_LICENSE_KEY',
//     responsiveWidth: 768,

//     onLeave: function (origin, destination, direction) {
//       const goTopBtn = document.querySelector('.go-top');
//       if (destination.index === 5) {
//         goTopBtn.classList.add('move');
//       } else {
//         goTopBtn.classList.remove('move');
//       }
//     }
//   });

//   const goTopBtn = document.querySelector('.go-top');
//   goTopBtn.addEventListener('click', function () {
//     $.fn.fullpage.moveTo(1);
//   });
// });


// // =======================================================
// // 인트로 화면전환 ===========================================
// const hideIntro = document.querySelector('.intro');
// const lightElement = document.querySelector('.light');
// const firstTabs = document.querySelectorAll('.firstPage');
// const clickClick = document.querySelector('.intro-click');
// const clickLogo = document.querySelector('.logo');
// const menuItems = document.querySelectorAll('.gnb_list');
// const sectionTabs = document.querySelectorAll('.tab_item');

// // 클릭 or 애니메이션 끝날 시
// const addHideClass = () => {
//   hideIntro.classList.add('hide');
//   firstTabs.forEach(active => active.classList.add('show'));
//   menuItems[0].style.color = '#ec3b00';
// };

// lightElement.addEventListener('animationend', addHideClass);
// clickClick.addEventListener('click', addHideClass);

// clickLogo.addEventListener('click', () => {

//   hideIntro.classList.remove('hide');
//   menuItems.forEach(item => {
//     item.style.color = '';
//   });

//   firstTabs.forEach(active => {
//     active.style.display = 'block';

//   });
// });

// // =============================================================
// menuItems.forEach(button => {
//   button.addEventListener('click', function () {
//     sectionTabs.forEach(tab => {
//       tab.style.display = 'none';


//     });

//     menuItems.forEach(item => {
//       item.style.color = '';
//     });

//     const targetTabId = button.getAttribute('data-tab');
//     const targetTab = document.querySelector(`#${targetTabId}`);

//     if (targetTab) {
//       targetTab.style.display = 'block';
//       button.style.color = '#ec3b00';

//     }
//   });
// });

// // mo-menu ========================================
// const moItems = document.querySelectorAll('.mo-item');
// const moMenu = document.querySelector('.mo-menu');
// const moBtn = document.querySelector('.mobile-btn');

// // 모바일 버튼 클릭 시 메뉴 토글
// moBtn.addEventListener('click', function () {
//   moMenu.classList.toggle('show');
// });

// moItems.forEach((item, index) => {
//   item.addEventListener('click', function () {
//     sectionTabs.forEach(tab => {
//       tab.style.display = 'none';
//     });

//     sectionTabs[index].style.display = 'block';

//     moMenu.classList.remove('show');
//   });
// });
// // function setViewportHeight() {
// //   let vh = window.innerHeight * 0.01;
// //   document.documentElement.style.setProperty('--vh', `${vh}px`);
// // }

// // setViewportHeight();

// // window.addEventListener('resize', setViewportHeight);
// // // =======================================================
// // // coding fullpage ========================================
// // $(document).ready(function () {
// //   $('#fullpage').fullpage({
// //     navigation: true,
// //     scrollingSpeed: 500,
// //     licenseKey: 'YOUR_LICENSE_KEY',
// //     responsiveWidth: 768,

// //     onLeave: function (origin, destination, direction) {
// //       const goTopBtn = document.querySelector('.go-top');
// //       if (destination.index === 5) {
// //         goTopBtn.classList.add('move');
// //       } else {
// //         goTopBtn.classList.remove('move');
// //       }
// //     }
// //   });

// //   const goTopBtn = document.querySelector('.go-top');
// //   goTopBtn.addEventListener('click', function () {
// //     $.fn.fullpage.moveTo(1);
// //   });
// // });


// // // =============================================================
// // menuItems.forEach(button => {
// //   button.addEventListener('click', function () {
// //     sectionTabs.forEach(tab => {
// //       tab.style.display = 'none';


// //     });

// //     menuItems.forEach(item => {
// //       item.style.color = '';
// //     });

// //     const targetTabId = button.getAttribute('data-tab');
// //     const targetTab = document.querySelector(`#${targetTabId}`);

// //     if (targetTab) {
// //       targetTab.style.display = 'block';
// //       button.style.color = '#ec3b00';

// //     }
// //   });
// // });

// // // mo-menu ========================================
// // const moItems = document.querySelectorAll('.mo-item');
// // const moMenu = document.querySelector('.mo-menu');
// // const moBtn = document.querySelector('.mobile-btn');

// // // 모바일 버튼 클릭 시 메뉴 토글
// // moBtn.addEventListener('click', function () {
// //   moMenu.classList.toggle('show');
// // });

// // moItems.forEach((item, index) => {
// //   item.addEventListener('click', function () {
// //     sectionTabs.forEach(tab => {
// //       tab.style.display = 'none';
// //     });

// //     sectionTabs[index].style.display = 'block';

// //     moMenu.classList.remove('show');
// //   });
// // });
