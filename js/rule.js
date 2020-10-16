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
 * Il software stampa una stringa contenente prima la parola più
 * corta, uno spazio e poi la parola più lunga.
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
 *  L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa una stringa contenente prima la parola più
 * corta, uno spazio e poi la parola più lunga.
 * 
 */

//  RICHIESTA DATI



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

 