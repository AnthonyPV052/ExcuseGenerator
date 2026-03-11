const who = [
    "Mi perro",
    "Mi gato",
    "Mi jefe",
    "Mi profesor"
];

const action = [
    "se comió",
    "rompió",
    "perdió",
    "olvidó"
];

const when = [
    "hoy",
    "ayer",
    "esta mañana",
    "anoche"
];

const what = [
    "mi tarea",
    "mi teléfono",
    "mi llave",
    "mi proyecto",
    "mi libro",
    "mi computadora"
];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
console.log(excuse);