'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');


const closedModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openedModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closedModalByEscapeKey = (e) => {
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closedModal();
    }
}
var hello = "hello";

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', openedModal);
}

closeModal.addEventListener('click', closedModal);

overlay.addEventListener('click' , closedModal);

document.addEventListener('keydown', closedModalByEscapeKey);