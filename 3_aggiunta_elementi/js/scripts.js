const mainTitle = document.getElementById('main-title');
console.log('mainTitle');
console.log(mainTitle);
console.log(typeof mainTitle);

mainTitle.innerHTML = 'LC 3 - Aggiunta elementi';

const mainDiv = document.querySelector('.main-div');
console.log('mainDiv');
console.log(mainDiv);
console.log(typeof mainDiv);

mainDiv.innerHTML += '<p>Lorem ipsum</p>'; // Il p viene tradotto in un elemento HTML
mainDiv.append('<p>Lorem ipsum dolor sit amet</p>'); // Il p non viene tradotto in un elemento HTML e rimane una stringa
mainDiv.prepend('<p>I miei testi:</p>'); // Il p non viene tradotto in un elemento HTML e rimane una stringa
