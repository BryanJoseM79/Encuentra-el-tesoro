// En primer lugar definimos el ancho y el alto de nuestra imagen 
const WIDTH = 400;
const HEIGH = 400;

// Generamos el mapa del tesoro
let MapaDelTesoro = {
    x: ObtenerNumeroAletorio(WIDTH),
    y: ObtenerNumeroAletorio(HEIGH)
}


// Guardamos las variables con  $ para hacer ver que guardamos una variable HTML
let $mapa = document.getElementById('mapa');
let $distancia = document.getElementById('distancia');

// creamos el contador de clicks
let clicks = 0;


// Acá escuchamos que cuando el usuario haga click vamos a hacer algo 
$mapa.addEventListener('click',function (e){
    clicks++;
    let distancia = ObtenerDistancia(e,MapaDelTesoro);
    // Le damos la pista al usuario
    let DistanciaPista = PistaParaUsuario(distancia);

    // Le enviamos la pista al usuario
    // Utilizamos las ` ` de JS Para mostrar la variable por pantalla 
    $distancia.innerHTML = `<h1>${DistanciaPista}</h1>`;
    
    // Ahora le daremos la victoria si es que realmente esta cerca del punto 

    if (distancia < 20){
        alert(`¡Has encontrado el tesoro en ${clicks} clicks!` );
        // refrescamos la pagina para que se reinicie la pagina luego de ganar 
        location.reload();
    }
})

