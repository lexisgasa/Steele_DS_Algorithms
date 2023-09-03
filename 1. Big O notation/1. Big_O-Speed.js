// big O es la forma de analizar el rendimiento de un algoritmo, la velocidad a la que se ejecuta una pieza de codigo o cuanto espacio en memoria utiliza

// un loop normal y corriente para sumar los numeros naturales
function add1 (n) {
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += n;
    }
    return total;
};

// formula de gauss para la suma de numeros naturales
function add2 (n) {
    return n * (n + 1) / 2;
};