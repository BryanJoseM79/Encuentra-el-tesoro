// Acá creamos todas las funciones que posteriormente vamos a reutilizar en el juego

// Creamos una funcion que nos genere numeros aleatorios

let ObtenerNumeroAletorio = size =>{
    return Math.floor(Math.random() * size); // Utilizamos Math floor para que el numero random que nos genere 
                                                // sea un numero entero y no un numero decimal 
}

// Creamos otra funcion que nos de la distancia de un punto a otro para esto utilizamos el teorema de pitagoras

let ObtenerDistancia = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;

    // Utilizamos el teorema de pitagoras 
    return Math.sqrt((diffx * diffx) + (diffy + diffy));

}

// Ahora creamos la pista que le vamos a dar al usuario de si esta cerca o lejos del tesoro

let PistaParaUsuario = distancia => {
    if(distancia < 30){
        return "Esta hirviendo";
    }else if(distancia < 40){
        return "Muy caliente";
    }else if (distancia < 60){
        return "Caliente";
    }else if (distancia < 100){
        return "Calido";
    }else if (distancia < 180){
        return "Frio";
    }else if(distancia < 360){
        return "Realmente frio";
    }else{
        return "Congelado";
    }
}