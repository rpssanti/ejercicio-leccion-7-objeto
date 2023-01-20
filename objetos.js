//Ejercicio leccion 7 objetos

const obj = {
    nombre:"Santy",
    apellidos:"Pérez",
    edad:"32",
    altura:179,
    isDeveloper: false,
}

console.log(obj.edad)

const listaObjetos =[{Nombre:"Santy", apellidos:"Pérez", edad:32, altura:178, isDeveloper:false},{nombre:"Ruben", apellidos:"Piñeiro",edad:34},{nombre:"Abel",apellidos:"Pérez",edad:35}
];


console.log(listaObjetos)


listaObjetos.sort((b,a) =>a.edad - b.edad)
console.log(listaObjetos)


