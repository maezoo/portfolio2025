var myFullpage = new fullpage("#fullpage", {
  controlArrows: true,
  controlArrowsHTML: [
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left"></i></div>',
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right"></i></div>'
  ],
  anchors: ["intro", "coding", "design", "aboutMe"],
  scrollBar: false,
  slidesNavigation: true,

  onLeave: function (origin, destination, direction) {
    const goTopBtn = document.querySelector(".go-top");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");

    // Go Top 버튼 처리 =================================
    if (destination.index === 3) {
      goTopBtn.classList.add("showUp");
    } else {
      goTopBtn.classList.remove("showUp");
    }

    // 헤더 숨김 처리 =================================
    if (destination.index === 0) {
      header.classList.remove("hide");

    } else {
      header.classList.add("hide");
    }

    // =============================================
    logo.addEventListener("click", function () {
      fullpage_api.moveTo("intro");
    });
  }
});

// =============================================
const goTopBtn = document.querySelector(".go-top");

if (goTopBtn) {
  goTopBtn.addEventListener("click", function () {
    fullpage_api.moveTo("intro");
  });
}

// =============================================
const arrowNext = document.querySelector(".fp-controlArrow.fp-next");
const arrowPrev = document.querySelector(".fp-controlArrow.fp-prev");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    arrowNext.classList.add("hover");

    setTimeout(() => {
      arrowNext.classList.remove("hover");
    }, 1000);
  }

  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    arrowPrev.classList.add("hover");

    setTimeout(() => {
      arrowPrev.classList.remove("hover");
    }, 1000);
  }
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

const designIphone = document.querySelectorAll('.design_box');
const designPopUp = document.querySelectorAll('.design-pop-up');
const header = document.querySelector('header');

// 팝업 열기
designIphone.forEach(item => {
  item.addEventListener('click', () => {
    const targetImg = item.getAttribute('data-target');
    const targetPopUp = document.querySelector(`#${targetImg}`);

    if (targetPopUp) {
      targetPopUp.classList.add('show');
      header.classList.remove('hide');
      disableScrolling();
    }
  });
});


// 팝업 닫기
designPopUp.forEach(showPop => {
  showPop.addEventListener('click', (event) => {
    showPop.classList.remove('show');
    header.classList.add('hide');
    enableScrolling();
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
  autoplay: {
    delay: 10000,
  },
  keyboard: true,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
});


// // =======================================================
// // 인트로 화면전환 ===========================================
// const hideIntro = document.querySelector('.intro');
// const lightElement = document.querySelector('.light');
// const firstTabs = document.querySelectorAll('.firstPage');
// const clickClick = document.querySelector('.intro-click');
// const clickLogo = document.querySelector('.logo');
// const menuItems = document.querySelectorAll('._list');
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

