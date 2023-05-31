function imprimirElementos(objeto) {
    if (typeof objeto === 'object' && objeto !== null) {
      for (let key in objeto) {
        console.log(objeto[key]);
      }
    } else {
      console.log("El parámetro no es un objeto válido.");
    }
  }
  
  let persona = { nombre: "Sebas", edad: 23, profesion: "Programador" };
  imprimirElementos(persona); // Imprime "Juan", 25, "Programador" (cada elemento en una línea separada)
  
  let coche = { marca: "Toyota", modelo: "Corolla Cross", año: 2021 };
  imprimirElementos(coche); // Imprime "Toyota", "Corolla", 2021 (cada elemento en una línea separada)
  
  let vacio = {};
  imprimirElementos(vacio); // Imprime "El parámetro no es un objeto válido."
  