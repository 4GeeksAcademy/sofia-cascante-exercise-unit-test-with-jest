// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) =>{
    let conversionDollar = euro * oneEuroIs["USD"]
    return conversionDollar
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / oneEuroIs["USD"]
    let valueInYen = valueInEuro * oneEuroIs["JPY"]
    return valueInYen;
}
 
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / oneEuroIs["JPY"]
    let valueInPound = valueInEuro * oneEuroIs["GBP"]
    return valueInPound;
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound  };
