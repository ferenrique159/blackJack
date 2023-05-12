// funcion anonimas
(() => {
    // el 'use strict' hace que esta funcion se ejecute de forma estricta esto quiere decir que si hay comandoso variables mal llamadas dara error en codigo
    'use strict'
    
    let deck = [],
        puntosJugadores = [];


    // Referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
         smallQuery = document.querySelectorAll('small'),
         divCartasJugadores = document.querySelectorAll('.divCartas'),
        //  cartaJugador = document.querySelector('#jugador-cartas'),
        //  cartaComputadora = document.querySelector('#computadora-cartas'),
         tipo = [ 'C', 'D', 'H', 'S' ],
         especiales = ['A', 'J', 'Q', 'K'];

    const inicializarDeck = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        // Se hace este ciclo para identificar la cantidad de jugadores que habra en total y asi poder utilizar sus posiciones dependiendo de donde se va a usar o en las funciones que se vayan a usar
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)
        }

        for (const i of smallQuery) {
            i.innerText = 0;
        }

        // Un forEach hace literalmente lo mismo hace una busqueda de todos los elementos internos dentro de un arreglo o objeto, la diferencia es en la sintaxis a practicar, esta se hizo con forEach pero lo podria haber hecho con un for sin ningun problema asi como hice el anterior
        divCartasJugadores.forEach(element => {
            element.innerText = ''
        });

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
        

    }

    // Esta función es la que nos arrojara las cartas de manera al azar
    const crearDeck = () => {

        deck = [];
        // Primer ciclo que va desde el 2 al 10, ya que las cartas tienen ese valor
        for (let i = 2; i <= 10; i++) {
            // Cada vez que llegue a este punto se ejecuta otro ciclo, que a cada valor nuevo de en este caso 'i' se ejecutara 4 veces ya que tenemos en nuestro arreglo 4 tipos o 4 valores
            for (const type of tipo) {
                deck.push(i + type);    
            }
        }

        // se hace un forOf ya que este ciclo nos ayuda a realizar el conteo del mismo pero en vez de darnos un numero, nos trae la palabra interna del arreglo, por eso es esencial para esta tarea
        for (const types of tipo) {
            // Luego se le da otro forOf para decir a bueno ahora a cada typo agregale lo que traigas de este arreglo y como tambien queremos es que nos traiga las palabras mas no no haga un conteo entonces usamos el forOf, para concatenar cada una de estas al anterior forOf de tipo
            for (const especies of especiales) {
                deck.push( especies + types );
            }
        }

        return _.shuffle(deck);
    }

    // Funcion para pedir carta
    const perdirCart = () => {

        if ( deck.length === 0 ) {
            alert('Se acabaron las cartas')
            throw 'Las cartas se acabaron'
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring( 0, carta.length - 1 );

        const ValorFinal = ( isNaN( valor ) ) ? 
        ( valor === 'A' ? 11 : 10 ) 
        : valor * 1;

        return ValorFinal;
    }

    // Puntos jugadores comenzando en 0 donde la ultima posicion es la computadora
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        smallQuery[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]
    }

    const crearCartas = ( carta, turno ) => {

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList = 'carta';
            divCartasJugadores[turno].append( imgCarta );
    }

    const alerResp = ( turno, puntosMinimos ) => {       
            if (puntosJugadores[turno] > 21 ) {
                alert('La computadora a perdido, tu ganaste');
            }else if( puntosJugadores[turno] > puntosMinimos ){
                alert('Ha ganado la computadora, lo siento');
            }else if(puntosJugadores[turno] === puntosMinimos){
                alert('nadie gana');
            }
    }

    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = perdirCart();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCartas( carta, puntosJugadores.length - 1 )
            
        } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        setTimeout(() => {
            alerResp( puntosJugadores.length - 1,  puntosMinimos)
        }, 400);
    }

    btnPedir.addEventListener('click', function (  ) {
        const carta = perdirCart();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCartas( carta, 0 );
        
        if (puntosJugador > 21) {
            setTimeout(() => {
                alert('Has perdido');
            }, 400);
            
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            setTimeout(() => {
                alert('Has Ganado, Felicidades');
            }, 400);
            btnPedir.disabled = true;
        }
    } );

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0])
    });

    btnNuevo.addEventListener('click', function() {
        console.clear()
        inicializarDeck();
        
    })

})();