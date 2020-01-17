const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.controls');

console.log(hamburger);

hamburger.addEventListener('click', openMenu);

function openMenu(e) {
  console.log('open menu');
}