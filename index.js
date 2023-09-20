// type script è  "super-set" del linguaggio JS perché lo arricchisce di nuove funzionalità
// come la tipizzazione statica e controllo errori intelligente.
// Non appena il processo di sviluppo è completato, viene compilato in JS
// prima di poter essere letto dal  browser.
// la tipizzazione della variabile può essere fatta in maniera manuale tramite l'assegnazione
// di un tipo predefinito, o tramite inferenza:
var variabile1;
var variabile2 = "stringa"; //per inferenza
//una volta definita la variabile non potrà più cambiare il tipo
//c'è la possibilita di dar modo ad una variabile di avere più tipi (UNION) :
var variabile3; // in questo caso la variabile accetta sia numeri che stringhe
//oltre hai hai soliti tipi primitivi di JS ci sono altri 2 tipi : any e unknow
// any significa che la variabile può avere qualsiasi tipo mentre con unknow si intende che
//nn è ancora conosciuto il tipo assunto dalla variabile sarà specificato in futuro a seconda
//del contesto in cui si usera
//stesso concetto si applica anche agli arrey, deve essere specificato il tipo di valore che
//assumeranno gli elementi che compongono l'arrei:
var arrey1; //oppure :
var arrey2 = ["a", "b", "c"];
//anche in questo caso può essere usato l'union nel caso il nostro arrey fosse eterogeneo:
var arrey3;
// si inserisci in questo modo anche il concetto di TUPLE:
//la tupla è un arrey di dimensione fissa e con elementi di tipo fisso che non sono intercambiabili:
var exTupla;
// exTupla =[ "nome", "cognome", true] questo genera errore perchè il secondo elemento deve essere un numero
// gli oggetti possono avere un inferimento nella creazione :
var objperson = {
    name: "manuele",
    age: 32,
};
var objInsegnate = {
    name: "mario",
    age: 45,
    materia: "matematica",
};
var studente1 = {
    name: "luca",
    age: 20,
    materia: "matematica",
    mediaVoti: 8,
};
// grazie al Generic il tipo di "topic" viene deciso al momento dell'utilizzo dell'interfaccia
// qui possiamo stabilire un qualsiasi tipo di valore per caso specifico
var U1 = {
    name: "Unit1",
    assignedTeacher: "Stefano Miceli",
    //   topic: "HTML, CSS, JS I, JS II, BW1"
    topic: "HTML",
};
var U2 = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: ["UX", "CSS", "Framework", "SASS", "JS III", "BW2"],
};
// const U3: EpicodeUnit<{weeklyTopics: string[]}[]> = {
var U3 = {
    name: "Unit3",
    assignedTeacher: "Stefano Miceli",
    topic: [
        { weeklyTopics: ["React", "State", "Props"] },
        { weeklyTopics: ["Hooks", "Lifecycle Methods", "Router", "Redux Intro"] },
        { weeklyTopics: ["Redux ADV", "Redux EXTRA", "TS Intro", "TS React"] },
    ],
};
