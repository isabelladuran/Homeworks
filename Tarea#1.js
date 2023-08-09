// Array Functions
// Isabella Duran Nagles Cód: 2210296

// References: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/
// https://lenguajejs.com/javascript/arrays/array-functions/



const myArray1 = [1,2,3,4]

// 1. Length: devuelve la cantidad de elementos en esa matriz.

console.log(myArray1.length)

// 2. At: recibe un valor numérico entero y devuelve el elemento en esa posición.

let index = 2
console.log(myArray1.at(index))

let index2 = -1
console.log(myArray1.at(index2))

// 3. Concat: unir dos o más arrays creando uno resultante.

const myArray2 = [5,6,7]
const myArray3 = myArray1.concat(myArray2)

console.log(myArray3)

const myArray4 = ['a', 'b', 'c']
const myArray5 = myArray3.concat(myArray4)

console.log(myArray5)

// 4. Constructor: crear objetos Array.

    // Con un solo parámetro.

    const carros = new Array(2)
    console.log(carros)

    // Con múltiples parámetros.

    const colores = new Array('Verde', 'Azul')
    console.log(colores)

    // Notación literal.

    const casa = ['Sala', 'Comedor', 'Cocina']
    console.log(casa)

// 5. CopyWithin: transfiere una copia plana de una sección a otra dentro del mismo array.

const myArray6 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    //(target): Índice donde dentro de la secuencia original se insertará la secuencia copiada
    console.log(myArray6.copyWithin(2))

    // (start): Índice a partir del cual comienza la copia de elementos. 
    console.log(myArray6.copyWithin(1, 4))

    // (end): Índice hasta el cual se copiarán los elementos. Copiará hasta pero sin incluir el end. 
    console.log(myArray6.copyWithin(0, 4, 6));

// 6. Entries: retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

const abc = ['a', 'b', 'c']

const iterator1 = abc.entries()

console.log(iterator1.next().value)
console.log(iterator1.next().value)
console.log(iterator1.next().value)

const iterator2 = abc.entries()

    // En ciclo for
    for (let e of iterator2) {
        console.log(e)
      }

// 7. Every: dice si todos los elementos en el array cumplen una condición. 
//Llamarlo en un array vacío devuelve true para cualquier condición.

const arrEx = [1, 30, 39, 29, 10, 13]
const top = (x) => x < 40

console.log(arrEx.every(top))

// Ejemplo de la clase
const top2 = arrEx.every( x => x < 4)
console.log(top2)

// 8. Fill: cambia todos los elementos en un arreglo por un valor estático, 
//desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

const arrEx2 = [1, 2, 3, 4, 5]

console.log(arrEx2.fill(0, 2, 4))
console.log(arrEx2.fill(5, 1))
console.log(arrEx2.fill(6))

var arr = Array(3).fill({}) 
console.log(arr)

arr[0] = "hello"
arr[1]= "world"
arr[2].exampleTitle= "here"

console.log(arr)
console.log(arr[0],arr[1],arr[2])

// 9. Filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const pets = ['dog', 'cat', 'bird', 'gold fish']
const result = pets.filter((numberOfWords) => numberOfWords.length > 3)

console.log(result)

// 10. Find: devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const arrEx3 = [5, 11, 8, 130, 44, 12]
const found = arrEx3.find((element) => element > 10)

console.log(found)

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
]

const resultado = inventario.find( fruta => fruta.nombre == 'cerezas' )

console.log(resultado)

// Ejemplo estructurado: hallar un número primo.

function primo(e, i, array) {
    let start = 2
    while (start <= Math.sqrt(e)) {
      if (e % start++ < 1) {
        return false
      }
    }
    return e > 1
  }
  
  console.log([4, 6, 8, 12, 23].find(primo))
  console.log([4, 3, 8, 12, 14].find(primo))

    // 11. FindIndex: devuelve el índice del primer elemento de un array que cumpla la función proporcionada. En caso contrario devuelve -1.

    const example = [5, 12, 8, 130, 44]

    const isLargeNumber = (x) => x > 100
    console.log(example.findIndex(isLargeNumber))

        // Ejemplo del número primo (ejemplo anterior)
        console.log([4, 6, 8, 12, 23].findIndex(primo))

    // 12. FindLast: recorre en orden inverso y devuelve el valor del primer elemento que satisface la función proporcionada. 
    //Si ningún elemento satisface la función, devuelve undefined.

    const findLastEx = example.findLast((x) => x > 40)
    console.log(findLastEx)

    // 13. FindLastIndex: en vez de retornar el número como tal, torna el index de la función anterior.

    const findLastIndexEx = example.findLastIndex((x) => x > 40)
    console.log(findLastIndexEx)

// 14. Flat: concatena sub-matrices hasta la profundidad especificada en un nuevo array.

var arr1 = [1, 2, [3, 4]]
console.log(arr1.flat())

var arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat())

var arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2))

// También se usa para aplanar o rellenar vacíos.

var arr4 = [1, 2, , 4, 5]
console.log(arr4.flat())

// 15. FlatMap: unión de un map seguido de un flatten de profundidad 1.

var arr5 = [1, 2, 1, 3, 5]
var result2 = arr5.flatMap((num) => (num === 2 ? ['si es 2'] : 1))

console.log(result2)

// 16. ForEach: ejecuta la función indicada una vez por cada elemento del array.
const city = ['Cartagena', 'Medellín', 'Bogotá']

city.forEach((x) => console.log('primero: ',x))
city.forEach((x, i) => console.log('segundo: ',x, '\t', i))
city.forEach((x, i, array) => console.log('tercero: ',array[1]))

// 17. Includes: determina si un array incluye un determinado elemento, devuelve true o false.

const number = [1, 2, 3, 4, 5]
console.log(number.includes(2))

const animal = ['cat', 'dog', 'bat']
console.log(animal.includes('cat'))
console.log(animal.includes('Cat')) //influye la forma en que se escribe

// 18. IndexOf:  retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si no existe.

var arrIndexOf = [2, 9, 9, 200, 4]
console.log(arrIndexOf.indexOf(2),
arrIndexOf.indexOf(7),
arrIndexOf.indexOf(9),
arrIndexOf.indexOf(200),
arrIndexOf.indexOf(24))

// 19. Join: une todos los elementos de una matriz en una cadena.
const elements = ['Fire', 'Air', 'Water']

console.log(elements.join())
console.log(elements.join(''))
console.log(elements.join('-'))
console.log(elements.join(' + '))

// 20. Keys: devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.

const alp = ['a', 'b', 'c', 'd', 6, 99, 54]
const iterator = alp.keys()

for (const key of iterator) {
  console.log(key)
}

// 21. LastIndexOf: devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, o -1 si el elemento no está.

const animals = ['Cow', 'Sheep', 'Frog', 'Goat', 'Frog']

console.log(animals.lastIndexOf('Frog'))
console.log(animals.lastIndexOf('Tiger'))
console.log(animals.lastIndexOf('Sheep'))

// 22. Map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numeros= [1, 4, 9]
var raices = numeros.map(Math.sqrt)

console.log('numeros', numeros, 'raices', raices)

var numbers = [1, 5, 10, 15]
var doubles = numbers.map(function(x) { return x * 2})

console.log('numbers', numbers, 'doubles', doubles)

// 23. Pop: elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

const vegetales = ['zanahoria', 'tomate', 'cebolla', 'apio', 'papa']

console.log(vegetales.pop())
console.log(vegetales)
console.log(vegetales.pop())
console.log(vegetales)

// 24. Push: contrario al pop, añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

const lindi = ['labial', 'sombra', 'brillo', 'crema']
console.log(lindi)

const count = lindi.push('rímel')
console.log(count)
console.log(lindi)

lindi.push('rubor', 'primer')
console.log(lindi)

// 25. Reduce: recorre todos los elementos del array, acumula sus valores de izquierda a derecha y suma todo para devolver un resultado.

const suma = [95, 5, 25, 10, 25]
const resultadoSuma= suma.reduce((f, s) => {
    console.log(`F=${f} S=${s}`)
  return f + s
})
console.log(resultadoSuma)

    // 26. ReduceRight: acumulador de elementos de derecha a izquierda.

    const resultadoSuma2= suma.reduceRight((f, s) => {
        console.log(`F=${f} S=${s}`)
    return f + s
    })
    console.log(resultadoSuma2)

    const resultadoResta= suma.reduceRight((f, s) => {
        console.log(`F=${f} S=${s}`)
    return f - s
    })
    console.log(resultadoResta)

    // 27. Reverse: invierte el orden de los elementos de un array. Es destructivo, cambia el array original.

    const alReves= suma.reverse()
    console.log(alReves)
    console.log(suma)

//28. Shift: elimina el primer elemento del array y lo retorna, modifica la longitud del array.

var ejemplo = ['ángel', 'payaso', 'mandarín', 'cirujano']
console.log('Antes: ' , ejemplo)

var eliminado = ejemplo.shift()
console.log('Después: ' , ejemplo)

console.log('Elemento eliminado: ' , eliminado)

// 29. Slice: copiar y clonar un arreglo a uno nuevo sin cambiar el arreglo original.

var miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } }
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997']
var nuevoCoche = miCoche.slice(0, 3)

console.log(miHonda)
console.log(miCoche)
console.log(nuevoCoche)
console.log(miCoche) //no modifica

// 30. Some: comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

const num = [1, 2, 3, 4, 5]
const even = (x) => x % 2 == 0

console.log(num.some(even))

// 31. Sort: ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

const frutas = ['guindas', 'manzanas', 'bananas']
console.log(frutas.sort()) 
const puntos = [1, 10, 2, 21]
console.log(puntos.sort()) 


const cosas = ['word', 'Word', '1 Word', '2 Words']
console.log(cosas.sort()) 

// 32. Splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const months = ['Jan', 'March', 'April', 'June']

months.splice(1, 0, 'Feb') // insertar en la posición 1 sin reemplazar valores
console.log(months)

months.splice(4, 1, 'May') // reemplazar en la posición 4
console.log(months);

// 33. ToLocalString: devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto y son separados por un caracter.

const date = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = date.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString)

// 34. ToString: devuelve una cadena de caracteres representando el array especificado y sus elementos.

const pool = [1, 2, 'a', '1a']
console.log(pool.toString())

// 35. UnShift: agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

const pili = [1, 2, 3]

console.log(pili.unshift(4, 5))
console.log(pili)

// 36. Values: devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.

var a = ['w', 'y', 'k', 'o', 'p']
var i = a.values()

console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)
