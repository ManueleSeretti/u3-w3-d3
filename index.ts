// type script è  "super-set" del linguaggio JS perché lo arricchisce di nuove funzionalità
// come la tipizzazione statica e controllo errori intelligente.
// Non appena il processo di sviluppo è completato, viene compilato in JS
// prima di poter essere letto dal  browser.

// la tipizzazione della variabile può essere fatta in maniera manuale tramite l'assegnazione
// di un tipo predefinito, o tramite inferenza:

let variabile1: string;
let variabile2 = "stringa"; //per inferenza

//una volta definita la variabile non potrà più cambiare il tipo

//c'è la possibilita di dar modo ad una variabile di avere più tipi (UNION) :

let variabile3: string | number; // in questo caso la variabile accetta sia numeri che stringhe

//oltre hai hai soliti tipi primitivi di JS ci sono altri 2 tipi : any e unknow
// any significa che la variabile può avere qualsiasi tipo mentre con unknow si intende che
//nn è ancora conosciuto il tipo assunto dalla variabile sarà specificato in futuro a seconda
//del contesto in cui si usera

//stesso concetto si applica anche agli arrey, deve essere specificato il tipo di valore che
//assumeranno gli elementi che compongono l'arrei:

let arrey1: string[]; //oppure :
let arrey2 = ["a", "b", "c"];

//anche in questo caso può essere usato l'union nel caso il nostro arrey fosse eterogeneo:

let arrey3: (string | number)[];

// si inserisci in questo modo anche il concetto di TUPLE:
//la tupla è un arrey di dimensione fissa e con elementi di tipo fisso che non sono intercambiabili:

let exTupla: [string, number, boolean];
// exTupla =[ "nome", "cognome", true] questo genera errore perchè il secondo elemento deve essere un numero

// gli oggetti possono avere un inferimento nella creazione :

let objperson = {
  name: "manuele",
  age: 32,
};

//se abbiamo bisogno di più oggetti con uguali proprietà è possibile la creazione dei TIPI:

type ObjPersona = {
  name: string;
  age: number;
};

//se abbiamo bisogno di un ogetto che abbia le proprietà appartenenti a 2 TIPI si potrà creare l'oggetto
// unendo i 2 tipi:

type Insegnante = {
  materia: string;
};

let objInsegnate: ObjPersona & Insegnante = {
  name: "mario",
  age: 45,
  materia: "matematica",
};

//un altro modo per fare questo sono le interfacce do si parte da una di base e
//se ne creano altre estendendo la prima:

interface Persona {
  name: string;
  age: number;
}

interface Studente extends Persona {
  materia: string;
  mediaVoti: number;
}

let studente1: Studente = {
  name: "luca",
  age: 20,
  materia: "matematica",
  mediaVoti: 8,
};

// il GENERIC ci da l'opportunità di passare il valore di una proprietà dell'oggetto che forma l'interfaccia
//tramite parametro rendendolo in certo senso dinamico:

interface EpicodeUnit<T> {
  name: string;
  assignedTeacher: string;
  topic: T;
}
// in questo modo il topic potra assumere ogni volta un tipo di valore diverso
//che sarà comunque dichiarato nel parametro al momento dell'utilizzo dell'interfaccia,

//  in questo caso sarà una stringa:
const U1: EpicodeUnit<string> = {
  name: "Unit1",
  assignedTeacher: "Stefano Miceli",
  topic: "HTML",
};

// in questo caso sarà un arrey di stringhe:
const U2: EpicodeUnit<string[]> = {
  name: "Unit2",
  assignedTeacher: "Stefano Miceli",
  topic: ["UX", "CSS", "Framework", "SASS", "JS III", "BW2"],
};

// in questo caso avrà il tipo Topic creato in precedenza con un interface:

interface Topic {
  weeklyTopics: string[];
}

const U3: EpicodeUnit<Topic[]> = {
  name: "Unit3",
  assignedTeacher: "Stefano Miceli",
  topic: [
    { weeklyTopics: ["React", "State", "Props"] },
    { weeklyTopics: ["Hooks", "Lifecycle Methods", "Router", "Redux Intro"] },
    { weeklyTopics: ["Redux ADV", "Redux EXTRA", "TS Intro", "TS React"] },
  ],
};
