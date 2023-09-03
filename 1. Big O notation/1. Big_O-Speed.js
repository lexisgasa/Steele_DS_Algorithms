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

// guardamos en variable el tiempo antes y despues de llamar a la funcion, el metodo performance.now() da un resultado en milisegundos, por lo que se divide / 1000 para obtener los segundos que tarda en ejecutarse el algoritmo.
let time1_1 = performance.now();
add1(10000000);
let time2_1 = performance.now();
console.log(`Time Elapsed: ${(time2_1 - time1_1) / 1000} seconds.`)

let time1_2 = performance.now();
add2(10000000);
let time2_2 = performance.now();
console.log(`Time Elapsed: ${(time2_2 - time1_2) / 1000} seconds.`)

// el problema con mirar el tiempo es que en cada pc se obtendran valores totalmente diferentes, y que de hecho en el mismo pc se VAN a obtener resultados diferentes