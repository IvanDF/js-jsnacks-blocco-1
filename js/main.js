/**
 * 
 * JSnack 1
 * 
 * L'utente inserisce due numeri in successione, con due prompt.
 * Il software stampa il maggiore
 * 
 */

//  RICHIESTA DATI

var primoNumero = parseInt( prompt('Inserisci un numero') ); 

if (isNaN(primoNumero) === true) {
    do primoNumero = parseInt( prompt('Non é stato inserito un numero') )
    while (isNaN(primoNumero) === true);
}

var secondoNumero = parseInt( prompt('Inserisci un altro numero') ); 

if (isNaN(secondoNumero) === true) {
    do secondoNumero = parseInt( prompt('Non é stato inserito un numero') )
    while (isNaN(secondoNumero) === true);
}

// INSERIMENTO NELL'HTML
var nack1 = document.getElementById('nack1');

// CONTROLLO

if ( primoNumero > secondoNumero ) {
    nack1.innerHTML = ('Il numero piú grande é ' + primoNumero );
} else if ( primoNumero < secondoNumero ) {
    nack1.innerHTML = ('Il numero piú grande é ' + secondoNumero );
} else {
    nack1.innerHTML = ('I numeri sono equalmente grandi ');
}

/**
 * 
 * JSnack 2
 * 
 * L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.
 * 
 */

//  RICHIESTA DATI

var primaParola = prompt('Inserisci una parola').toLocaleLowerCase().trim();

if ( isNaN(primaParola) === false ) {
    do primaParola = prompt('Inserisci una parola e non un numero').toLocaleLowerCase().trim();
    while (isNaN(primaParola) === false)
}

var secondaParola = prompt('Inserisci un\'altra parola').toLocaleLowerCase().trim();

if ( isNaN(secondaParola) === false ) {
    do secondaParola = prompt('Inserisci una parola e non un numero').toLocaleLowerCase().trim();
    while (isNaN(secondaParola) === false)
}

// INSERIMENTO NELL'HTML
var nack2 = document.getElementById('nack2')

// CONTROLLO
if ( primaParola.length < secondaParola.length ) {
    nack2.innerHTML = ('La parola <strong>' + primaParola + '</strong> é piú corta di <strong>' + secondaParola + '</strong>!' )
} else if ( primaParola.length < secondaParola.length ) {
    nack2.innerHTML = ('La parola <strong>' + secondaParola + '</strong> é piú corta di <strong>' + primaParola + '</strong>!' )
} else {
    nack2.innerHTML = ('La parola <strong>' + secondaParola + '</strong> ha la stessa lunghezza di <strong>' + primaParola + '</strong>!' )
}

/**
 * 
 * JSnack 3
 * 
 * Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma con il for.
 * 
 */

var numFinale = 0

//  RICHIESTA DATI

for ( i = 0; i < 5; i++ ) {
    var scegliNumero = parseInt( prompt( 'Inserisci il numero che vuoi sommare' ) )
    numFinale += scegliNumero;
    if ( isNaN(scegliNumero) === true ) {
        do scegliNumero = parseInt( prompt( 'Non é stato inserito un numero' ) );
        while ( isNaN(scegliNumero) === true );
    }

}

// INSERIMENTO NELL'HTML
document.getElementById("nack3").innerHTML = numFinale;

/**
 * 
 * JSnack 4
 * 
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo).
 * Chiedi all’utente il suo nome.
 * Comunicagli se può partecipare o no alla festa.
 * 
 */

//  DATABASE

var invitati = [ 'PAOLO', 'FABIO', 'LORENZO' ]

// RICHIESTA DATI

var nomeInvitato = prompt( 'Grande evento in villa Gatsby, prego digitare vostra nomea' ).toLocaleUpperCase();

// // INSERIMENTO NELL'HTML
var nack = document.getElementById('nack4');

// CONTROLLO
var controllato = false

for ( i = 0; i < invitati.length; i++ ) {
    var controllo = invitati[i]
    if ( nomeInvitato ==  controllo ) {
        controllato = true
    } 
}
if (controllato == true) { 
    nack4.innerHTML = ('Ossequi Sig. ' + '<strong>' + nomeInvitato + '</strong> la registrazione é stata confermata' )    
} else {
    nack4.innerHTML = ('Ossequi Sig. ' + '<strong>' + nomeInvitato + '</strong>, non vi é alcuna prenotazione a vostro nome' )    
}

/**
 * 
 * JSnack 5
 * 
 * Crea un array vuoto.
 * Chiedi per 6 volte all’utente di inserire un numero
 * Se è dispari inseriscilo nell’array
 * 
 */

//  DATABASE

var numeri = [];

// RICHIESTA DATI

for ( x = 0; x <= 5; x++ ) {
    var numScelto = parseInt( prompt( 'Inserisci un numero' ) );
    if ( isNaN(numScelto) == true ) {
        do numScelto = parseInt( prompt( 'Non hai inserito un numero' ) );
        while (isNaN(numScelto) == true)
        
    } else if ( numScelto & 2 != 0 ) {
        numeri.push(numScelto)
    }
}

document.getElementById('nack5').innerHTML = ' I numeri dispari sono ' + numeri;