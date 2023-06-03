'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) { /*Kad stisnem dugme on pomeri stranicu skroz gore.TO se desava zato
sto <a class="nav__link nav__link--btn btn--show-modal" href="#" ima href #. OVako se uklanja problem*/
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
 btnsOpenModal.forEach(btn => btn.addEventListener 
    ('click', openModal)); //For each loop isto radi kao i ovo dole
// for (let i = 0; i < btnCloseModal.length; i++){
//     btnsOpenModal[i].addEventListener('click',
//     openModal);
// }

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
/* Methods - Selecting elements! */
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//Creating and inserting elemets
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'Boring cookies';
message.innerHTML = 'boring cookies <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); //stavio je element skroz gore, koristio ga je na vrhu headera. First child

header.append(message);// stavio je element skroz dole (dno header diva).Last child

// header.append(message.cloneNode(true)) //stvorio ih je i dole i gore
header.before(message);//before header element - gore je
header.after(message);//after header element - dole je

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove(); //nov i laksi nacin
  //message.parentElement.removeChild(message);
})