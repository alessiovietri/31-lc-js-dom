const mainTitle = document.getElementById('main-title');
console.log('mainTitle');
console.log(mainTitle);
console.log(typeof mainTitle);

mainTitle.innerHTML = 'Recupero elementi';

// ... 100k LOC = 100k Lines Of Code

mainTitle.innerHTML = '1 - Recupero elementi (back)';

const firstLinkInUl = document.querySelector('ul li a');
console.log('firstLinkInUl');
console.log(firstLinkInUl);
console.log(typeof firstLinkInUl);

const lastLinkInUl = document.querySelector('ul li:last-child a');
console.log('lastLinkInUl');
console.log(lastLinkInUl);
console.log(typeof lastLinkInUl);

const secondP = document.querySelector('.second-p');
console.log('secondP');
console.log(secondP);
console.log(typeof secondP);