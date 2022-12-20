const firstLinkInUl = document.querySelector('ul li a');
// console.log('firstLinkInUl');
// console.log(firstLinkInUl);
// console.log(typeof firstLinkInUl);
// console.log('BEFORE className', firstLinkInUl.className);
// console.log('BEFORE classList', firstLinkInUl.classList);

firstLinkInUl.className = 'active fs-2';
// console.log('AFTER className', firstLinkInUl.className);
// console.log('AFTER classList', firstLinkInUl.classList);

const lastLinkInUl = document.querySelector('ul li:last-child a');
// console.log('lastLinkInUl');
// console.log(lastLinkInUl);
// console.log(typeof lastLinkInUl);
// console.log('BEFORE className', lastLinkInUl.className);
// console.log('BEFORE classList', lastLinkInUl.classList);

lastLinkInUl.classList.add('active');
lastLinkInUl.classList.remove('disabled');
// console.log('AFTER className', lastLinkInUl.className);
// console.log('AFTER classList', lastLinkInUl.classList);

const secondP = document.querySelector('.second-p');
// console.log('secondP');
// console.log(secondP);
// console.log(typeof secondP);
// console.log('BEFORE className', secondP.className);
// console.log('BEFORE classList', secondP.classList);

secondP.className = secondP.className + ' first-link';
// OPPURE
// secondP.className += ' first-link';
secondP.className = secondP.classList + ' active';
// console.log('AFTER className', secondP.className);
// console.log('AFTER classList', secondP.classList);

const mainTitle = document.getElementById('main-title');
console.log('mainTitle');
console.log(mainTitle);
console.log(typeof mainTitle);

mainTitle.style.backgroundColor = 'lightcoral';