const primoDiv = document.getElementById("saluto");
const secondoDiv = document.getElementById("saluto-2");
 
primoDiv.addEventListener('click', 
                         
    function() {

        console.log('Cliccato su div #saluto');
        alert('CIAO!');

        let numero = 3;
        
        numero += 36;

        console.log(typeof numero);

        if (numero > 10) {
            console.log('Si, è maggiore di 10');
        }

    }
                         
);

console.log('Il numero è', numero);
 
secondoDiv.addEventListener('mouseenter', 
                         
    function() {
        
        secondoDiv.style.display = 'flex';
        secondoDiv.style.justifyContent = 'center';
        secondoDiv.style.alignItems = 'center';

        console.log('MOUSE ENTER');

    }
                         
);
 
secondoDiv.addEventListener('mouseleave', 
                         
    function() {
        
        secondoDiv.style.display = 'block';
        secondoDiv.style.justifyContent = 'flex-start';
        secondoDiv.style.alignItems = 'stretch';

        console.log('MOUSE LEAVE');

    }
                         
);
 
secondoDiv.addEventListener('mouseover', 
                         
    function() {
        
        console.log('MOUSE OVER');

    }
                         
);