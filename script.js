// Función para cambiar el color de fondo
function changeBackgroundColor() {
    // Generamos un color aleatorio en formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambiamos el color de fondo de la página
    document.body.style.backgroundColor = randomColor;
}

// Función para mostrar un saludo personalizado
function displayGreeting(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    const nameInput = document.getElementById('nameInput');
    const greetingMessage = document.getElementById('greetingMessage');
    const name = nameInput.value;
    greetingMessage.textContent = '¡Hola, ' + name + '! Bienvenido/a a nuestra página.';
}

// Función para incrementar el contador
function incrementCounter() {
    const countElement = document.getElementById('count');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}

// Función para reiniciar el contador
function resetCounter() {
    const countElement = document.getElementById('count');
    countElement.textContent = '0';
}

// Función para mostrar/ocultar una sección
function toggleSection(event) {
    const section = event.target.parentElement;
    section.classList.toggle('hidden');
}

// Función para actualizar el reloj en tiempo real
function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = hours + ':' + minutes + ':' + seconds;
}

// Función para iniciar el temporizador
function startTimer() {
    if (!timerRunning) {
        const timerInput = document.getElementById('timerInput');
        timerDuration = parseInt(timerInput.value);
        timerCount = timerDuration;
        updateTimerDisplay();
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

// Función para actualizar el temporizador
function updateTimer() {
    timerCount--;
    updateTimerDisplay();
    if (timerCount === 0) {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}

// Función para actualizar la visualización del temporizador
function updateTimerDisplay() {
    const timerCountElement = document.getElementById('timerCount');
    timerCountElement.textContent = timerCount;
}

// Variables para el temporizador
let timerInterval;
let timerDuration;
let timerCount;
let timerRunning = false;

// Obtenemos el elemento del pie de página
const dateElement = document.getElementById('date');

// Obtenemos la fecha actual
const currentDate = new Date();

// Formateamos la fecha como "Día de la semana, Mes Día, Año"
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('es-ES', options);

// Establecemos el contenido del pie de página con la fecha formateada
dateElement.textContent = 'Hoy es ' + formattedDate;

// Asignamos un evento al botón para cambiar el color de fondo al hacer clic
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);

// Asignamos un evento al formulario para mostrar un saludo personalizado al enviarlo
const greetingForm = document.getElementById('greetingForm');
greetingForm.addEventListener('submit', displayGreeting);

// Asignamos eventos a los botones del contador
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);

// Asignamos eventos a los botones para mostrar/ocultar las secciones
const toggleButtons = document.querySelectorAll('.toggleButton');
toggleButtons.forEach(button => button.addEventListener('click', toggleSection));

// Actualizamos el reloj cada segundo
setInterval(updateClock, 1000);

// Asignamos eventos a los botones del temporizador
const startTimerButton = document.getElementById('startTimerButton');
const stopTimerButton = document.getElementById('stopTimerButton');
startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
