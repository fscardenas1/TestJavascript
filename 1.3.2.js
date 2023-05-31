//Version de codigo que usa parametros y argumentos
function printPersonalInfo(name, lastname, nickname) {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  }
  
  printPersonalInfo("Diego Medardo", "Saavedra García", "statick");
  
//Version de codigo que usa constantes
function printPersonalInfo(name, lastname, nickname) {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  }
  
  const name = "Diego Medardo";
  const lastname = "Saavedra García";
  const nickname = "statick";
  
  printPersonalInfo(name, lastname, nickname);