const nameInput = document.getElementById("name-input");
const genderSelect = document.getElementById("gender-select");
const submitButton = document.getElementById("submit-button");
const fullTextP = document.getElementById("full-text-p");
 
submitButton.addEventListener('click', 
                         
    function() {

        console.log('Cliccato su submitButton');

        console.log('Il valore di nameInput è', nameInput.value);

        console.log('Il valore di genderSelect è', genderSelect.value);
        // console.log(genderSelect.innerHTML);

        if (genderSelect.value == 'm') {
            fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha indicato come genere Uomo';
        }
        else if (genderSelect.value == 'f') {
            fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha indicato come genere Donna';
        }
        else {
            fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha preferito non specificare il proprio genere';
        }

    }
                         
);

const hamburgerButton = document.getElementById("hamburger-button");
 
hamburgerButton.addEventListener('click', 
                         
    function() {
        
        document.getElementById("menu").style.display = 'block';

    }
                         
);

const closeHamburgerButton = document.getElementById("close-hamburger-button");
 
closeHamburgerButton.addEventListener('click', 
                         
    function() {
        
        document.getElementById("menu").style.display = 'none';

    }
                         
);
