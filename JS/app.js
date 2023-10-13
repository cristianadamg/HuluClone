// // UI Variables
// const mediaReplace = document.querySelector('.mediaReplace');
// const subHeader = document.querySelector('#sub-header');
// const logosUI = document.querySelector('.logos');
// const subContent = document.querySelector('.sub-content');
// const mediaUI = document.querySelector('.media');
// const mediaHeadingContent = document.querySelector('.mediaHeadingContent');
// const linkUI = document.querySelector('.linkUI');


// // Function change HTML content on smaller devices
// function changeHTMLOnWidth () {
//     if (window.innerWidth < 768 ) {
//         mediaUI.innerHTML = mediaReplace.innerHTML;
//         mediaReplace.classList.add('hidden');
//         mediaUI.style.paddingTop = '1.3rem';
//         mediaUI.style.paddingBottom = '0.4rem';
//         mediaHeadingContent.innerHTML = ` <h1 class="mediaHeadingContent">Get all three. <a href="#" class="linkUI">Details</a></h1>`;
//         linkUI.classList.add('hidden');
//     }
// }

// document.addEventListener('resize', function(){
//     console.log('Window has been resized')
// });

// UI Variables
const modalUI = document.querySelector('.modal');
const iconClose = document.querySelector('#closeIcon');
const loginBtn = document.querySelector('.login-btn');

// Modal Events
loginBtn.addEventListener('click', openModal);
iconClose.addEventListener('click', closeModal);
document.addEventListener('click', outsideModalClick);

// Open Modal Function
function openModal(e) {
    modalUI.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalUI.style.overflow = 'scroll';
    modalUI.style.overflowX = 'hidden';
}

// Close Modal
function closeModal (e) {
    modalUI.classList.add('hidden');
    document.body.style.overflow = 'scroll';
    document.body.style.overflowX = 'hidden';
}

// Close Modal when outside Click
function outsideModalClick (e) {
    if (e.target === modalUI) {
        closeModal();
    };
};