function imprimirElementos(array) {
    if (Array.isArray(array) && array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
    } else {
      console.log("El parámetro no es un array válido o está vacío.");
    }
  }
  
  let numeros = [1, 2, 3, 4, 5];
  imprimirElementos(numeros); // Imprime 1, 2, 3, 4, 5 (cada elemento en una línea separada)
  
  let nombres = ["Sebas", "Dilan", "Alexis"];
  imprimirElementos(nombres); // Imprime "Juan", "María", "Pedro" (cada elemento en una línea separada)
  
  let vacio = [];
  imprimirElementos(vacio); // Imprime "El parámetro no es un array válido o está vacío."
  