'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openButton = document.querySelectorAll('.show-modal');


openButton.forEach(element => {
    element.addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    })

});

const closeFunction = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeButton.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);

document.addEventListener('keydown', function(escKey) {
    if(escKey.key === 'Escape' && !modal.classList.contains('hidden')){
            closeFunction();
        }

    
});