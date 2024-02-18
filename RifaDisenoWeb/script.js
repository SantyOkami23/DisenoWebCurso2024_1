const students = [
    "AGUDELO ARBOLEDA CRISTHIAN",
    "ARBELAEZ BUENO JOHAN SEBASTIAN",
    "AROCA BERMUDEZ JUAN JOSE",
    "BARTOLO SANSON SANTIAGO",
    "BONILLA ORTIZ JONATHAN EDUARDO",
    "CARDONA CASTAÑO JOHN SEBASTIAN",
    "CASTAÑEDA AGUIRRE ERIKA YULIANA",
    "CASTAÑEDA SERNA JONIER ANDRES",
    "CASTRO SALAMANCA VERONICA",
    "ECHEVERRI DIAZ DAHIANA",
    "GIRALDO VILLA CARLOS ALBERTO",
    "GONZALEZ MOLINA ANGEL YESID",
    "HERRERA FLOREZ KEVIN GEOVANNY",
    "HINCAPIE COLORADO ANGIE MELISSA",
    "LOAIZA ARIAS JHON ALEJANDRO",
    "LOAIZA CARDONA OLAVIO",
    "LONDOÑO ARCILA DEINER STI",
    "MARIN LONDOÑO DIANA MARCELA",
    "MARTINEZ AGUIRRE JULIAN ANDRES",
    "MARTINEZ CASTRILLON OSCAR EDUARDO",
    "ORREGO CARDONA MARIANA",
    "OSORIO CASTAÑO JUAN CAMILO",
    "PARRA HERRERA DIEGO ALEJANDRO",
    "PEÑUELA CEDEÑO WINEY MARCELA",
    "QUINTERO MORALES ESTEFANIA",
    "RAMIREZ ALVAREZ CESAR AUGUSTO",
    "RESTREPO CALLE VALENTINA",
    "RODRIGUEZ DUQUE CARLOS ANDRES",
    "SALGADO PATIÑO JUAN ESTEBAN",
    "SANCHEZ HORTA STEPHANY",
    "UCHIMA PINZON JUAN GUILLERMO"
];

const selectButton = document.getElementById("selectButton");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

selectButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    const selectedStudent = students[randomIndex];
    popupMessage.textContent = `¡Felicidades! El estudiante seleccionado es: ${selectedStudent}`;
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000); // Hide popup after 3 seconds
});
