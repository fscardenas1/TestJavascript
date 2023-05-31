function imprimirPrimerElemento(array) {
    if (Array.isArray(array) && array.length > 0) {
      console.log(array[0]);
    } else {
      console.log("El parámetro no es un array válido o está vacío.");
    }
  }
  
  let numeros = [1, 2, 3, 4, 5];
  imprimirPrimerElemento(numeros); // Imprime 1
  
  let nombres = ["Juan", "María", "Pedro"];
  imprimirPrimerElemento(nombres); // Imprime "Juan"
  
  let vacio = [];
  imprimirPrimerElemento(vacio); // Imprime "El parámetro no es un array válido o está vacío."
  