//current temprature in kelvin degrees
const kelvin = 0;
// convertng kelvin to celcius
const celsius = kelvin - 273;
// converting celcius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// converting celsius to Newton Scale
let newton = celsius * (33/100);
// rounding down Variable
newton = Math.floor(newton)

console.log(`The temperature is ${newton} on the Newton Scale`)