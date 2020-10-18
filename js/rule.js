/**
 * 
 * JSnack 1
 * 
 *  L’utente inserisce due numeri in successione, con due prompt.
 * Il software stampa il maggiore.
 * 
 */

function jsNackPrimo() {

    // RICHIESTA DATI
    var primoNumero = parseInt( prompt( 'Inserisci il primo numero' ) );
    if ( isNaN(primoNumero) == true ) {
        do primoNumero = parseInt( prompt( 'Non é stato inserito un numero, inserire il primo numero' ) );
        while (isNaN(primoNumero) === true );
    }
    document.getElementById('primo-numero').innerHTML = primoNumero;
    var secondoNumero = parseInt( prompt( 'Inserisci il secondo numero' ) );
    if ( isNaN(secondoNumero) == true ) {
        do secondoNumero = parseInt( prompt( 'Non é stato inserito un numero,  inserire il secondo numero' ) );
        while (isNaN(secondoNumero) === true );
    }
    document.getElementById('secondo-numero').innerHTML = secondoNumero;

    // CONTROLLO
    var numFinale = document.getElementById('numero-finale');

    if ( primoNumero > secondoNumero ) {
        numFinale.innerHTML = primoNumero;
    } else if ( primoNumero < secondoNumero ) {
        numFinale.innerHTML = secondoNumero;
    } else {
        numFinale.innerHTML = 'i numeri sono uguali';
    }
}

/**
 * 
 * JSnack 2
 * 
 *  L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.
 * 
 */

function jsNackSecondo() {

    // RICHIESTA DATI

    var primaParola = prompt( 'Inserisci la prima parola' );
    document.getElementById('prima-parola').innerHTML = primaParola
    if ( isNaN( primaParola ) == false ) {
        do primaParola = prompt( 'Hai inserito un numero e non una parola, inserisci la prima parola' );
        while (isNaN(primaParola) == false);
    }

    var secondaParola = prompt( 'Inserisci la seconda parola' );
    document.getElementById('seconda-parola').innerHTML = secondaParola
    if ( isNaN( secondaParola ) == false ) {
        do secondaParola = prompt( 'Hai inserito un numero e non una parola, inserisci la prima parola' );
        while (isNaN(secondaParola) == false);
    }

    // CONTROLLO

    var parolaFinale = document.getElementById('parola-finale')

    if ( primaParola.length > secondaParola.length ) {
        parolaFinale.innerHTML = primaParola;
    } else if ( primaParola.length < secondaParola.length ) {
        parolaFinale.innerHTML = secondaParola;
    } else {
        parolaFinale.innerHTML = ('Sono lunghe uguali');
    }

}

/**
 * 
 * JSnack 3
 * 
 *  Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma con il for.
 * 
 */

function jsNackTerzo() {

    var somma = 0

    for( n = 0; n < 5; n++ ) {
        var numeri = parseInt( prompt( 'Inserisci il numero che vuoi sommare' ) );

        if ( isNaN(numeri) == true ) {
            do var numeri = parseInt( prompt( 'Non è stato insetiro un numero, Inserisci il numero che vuoi sommare' ) );
            while ( isNaN(numeri) == true );
        }
        somma += numeri;
    }

    document.getElementById('somma-finale').innerHTML = somma

}

/**
 * 
 * JSnack 4
 * 
 *  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
 * Chiedi all’utente il suo nome
 * Comunicagli se può partecipare o no alla festa.
 * 
 */

function jsNackQuarto() {

    var listaInvitati = ['Paolo', 'Fabio', 'Lorenzo' ];

    var nomeUtente = prompt( 'Come ti chiami?' );
    document.getElementById( 'nome-invitato' ).innerHTML = nomeUtente;

    var risultatoFinale = document.getElementById( 'risultato-finale' );

    for( x = 0; x < listaInvitati.length; x++ ) {
        var check = listaInvitati[x];

        if ( nomeUtente == check ) {
            risultatoFinale.innerHTML = ( 'Il suo nome risulta correttamente registrato' )
        } else {
            risultatoFinale.innerHTML = ( 'Purtroppo il suo nome non è nella lista' )
        }
    }
}

/**
 * 
 * JSnack 5
 * 
 *  Crea un array vuoto.
 * Chiedi per 6 volte all’utente di inserire un numero
 * Se è dispari inseriscilo nell’array
 * 
 */

function jsNackQuinto() {

    var numeriDispari = [];

    for ( num = 0; num  <= 5; num++ ) {
        var numUtente = parseInt( prompt( 'Inserisci un numero' ) );
        
        if ( isNaN(numUtente) == true ) {
            do numUtente = parseInt( prompt( 'Non hai inserito un numero' ) );
            while (isNaN(numUtente) == true)
            
        } else if ( numUtente & 2 != 0 ) {
            numeriDispari.push(numUtente)
        }
    }
    document.getElementById('dispari-finale').innerHTML = numeriDispari

}
