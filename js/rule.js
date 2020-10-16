/**
 * 
 * JSnack 1
 * 
 *  L’utente inserisce due numeri in successione, con due prompt. 
 * Il software stampa il maggiore.
 * 
 */

//  RICHIESTA DATI
/**

var primoNumero = parseInt( prompt('Inserisci il primo numero') );
var secondoNumero = parseInt( prompt('Inserisci il primo numero') );

var result = document.getElementById('result');

// CONTROLLO
if ( primoNumero > secondoNumero ) {
    result.innerHTML = ('Il numero piú grande é ' + primoNumero);
} else if (primoNumero < secondoNumero) {
    result.innerHTML = ('Il numero piú grande é ' + secondoNumero);
} else {
    result.innerHTML = ('I numeri sono uguali');
}

 */



/**
 * 
 * JSnack 2
 * 
 *  L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.
 * 
 */

//  RICHIESTA DATI
/**

var primaParola = prompt('Inserisci la prima parola').toLocaleLowerCase().trim() ;
var secondaParola =  prompt('Inseriscila seconda parola').toLocaleLowerCase().trim() ;

var result = document.getElementById('result');

// CONTROLLO
if ( primaParola.length > secondaParola.length ) {
    result.innerHTML = (secondaParola + ' ' + primaParola);
} else if ( primaParola.length < secondaParola.length ) {
    result.innerHTML = (primaParola + ' ' + secondaParola);
} else {
    result.innerHTML = ('Entrambe le parole hanno la stessa lunghezza');
}

 */



/**
 * 
 * JSnack 3
 * 
 *  Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma con il for.
 * 
 */

//  RICHIESTA DAT
/**

var somma = 0;

for (i = 0; i < 5; i++) {
    var userNumber = parseInt( prompt('Inserisci un numero') );
    somma += userNumber
}

result.innerHTML = ('La somma totale di tutti i numeri é ' + somma);

  */



/**\
 * 
 * JSnack 4
 * 
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
 * Chiedi all’utente il suo nome
 * Comunicagli se può partecipare o no alla festa.
 * 
 */

//  DATABASE
/**

var invitatiGatsby = ['Paolo', 'Fabio', 'Lorenzo'];

// RICHIESTA DATI

var userCheck = prompt('Inserisci il tuo nome').toLocaleLowerCase().trim();

var verified = false

for (i = 0; i < invitatiGatsby.length; i++) {
    var userChecked = invitatiGatsby[i];
    if (userCheck == userChecked) {
        verified = true
    }
}

if (verified == true) {
    alert('ciao')
} else {
    alert('No ciao')
}

 */
