const tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}

//--- BONUS ---//
const tipoDeSuscripcion = "Expert";
const mensajes = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de ESPE durante un mes",
  "Puedes tomar casi todos los cursos de ESPE durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año"
];

const indice = ["Free", "Basic", "Expert", "ExpertPlus"].indexOf(tipoDeSuscripcion);
if (indice !== -1) {
  console.log(mensajes[indice]);
}
