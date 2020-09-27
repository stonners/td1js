//2 les types en JS
//2.1 les differents types
function test() {

    x = 'blabla';
    Affiche(x);
    x = `blabla {$x}`;
    Affiche(x);
    x = 9;
    Affiche(x);
    x = 2.5;
    Affiche(x);
    x = true;
    Affiche(x);
    x = undefined;
    Affiche(x);
    x = null;
    Affiche(x);
    x = [1, 2, 3];
    Affiche(x);
    x = [];
    Affiche(x);
    x = {};
    Affiche(x);
    x = {"promo": "lpwmce", "nb": 25};
    Affiche(x);
    x = new Date();
    Affiche(x);
    x = function (x) {
        alert('toto')
    };
    Affiche(x);
    var x = 42n;
    Affiche(x);
    //x=;           ne fonctionne pas
    //affiche(x);

}

test();

function Affiche(x) {
    console.log(typeof (x));
}

//2.2 Declaration
test1 = 9;
test1 = toString(test1); //transforme en string
console.log(typeof (test1));

test2 = 66.6;
test2 = parseInt(test2); //transforme en nombre entier
console.log(test2);

test3 = [22];
console.log(typeof (test3));
test3 = parseFloat(test3) //transforme en number
console.log(typeof (test3));


//2.3 Conversions de type
test4 = 3.141592;
console.log(test4);
test4 = Math.floor(test4); //arrondie a l'inferieur
console.log(test4);

test5 = 3.141592;
console.log(test5);
test5 = Math.ceil(test5); //arrondie au supperieur
console.log(test5);

test6 = 3.141592;
console.log(test6);
test6 = Math.round(test6);// arrondie a l'inferieur
console.log(test6);

//2.4 Test d'égalité
let b = false;
let n = 0;
let s = '0';
let tab = [];
let o = {};

function compare(x, y) {
    console.log(x == y);
}

function comparestrict(x, y) {
    console.log(x === y);
}

compare(b, n);
compare(b, s);
compare(b, tab);
compare(b, o);
compare(n, s);
compare(n, tab);
compare(n, o);
compare(s, tab);
compare(s, o);

comparestrict(b, n);
comparestrict(b, s);
comparestrict(b, tab);
comparestrict(b, o);
comparestrict(n, s);
comparestrict(n, tab);
comparestrict(n, o);
comparestrict(s, tab);
comparestrict(s, o);


//3 Les chaines
function prompte() {


    let valeur = prompt();
    while (valeur !== valeur.toUpperCase()) {
        valeur = prompt();
    }
}//prompte()


function generatrice() {
    let message = "";
    let valeur;
    let i = 0;
    do {

        valeur = 65 + Math.random() * (123 - 65);

        valeur = parseInt(valeur);

        if (valeur < 91 || valeur > 97) {

            i++;
            message = message + String.fromCharCode(valeur)
        }
    } while (i < 5)
    console.log(message);
    if (message !== message.toUpperCase()) {
        message = "";

        generatrice();
    }

}

generatrice();

function voyelles() {
    let i = 0;
    let message = "";
    let tableau = ["a", "e", "i", "o", "u", "y"];
    do {
        i++
        message = message + tableau[parseInt(Math.random() * 6)];

    } while (i < 5)
    console.log(message)
}

voyelles();

function nmfamille() {
    let tiret = "-";
    let nom = prompt("Veuillez saisir votre NOM")
    let prenom = prompt("Veuillez saisir votre Prénom")
    let prenom2;
    let tabnom;
    nom = nom.toUpperCase();
    if (prenom.indexOf(tiret) !== -1) {
        tabnom = prenom.split("-");
        //console.log(tabnom);
        prenom = tabnom[0]
        prenom2 = tabnom[1];
        //console.log(tabnom);
        prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();
        prenom2 = prenom2.charAt(0).toUpperCase() + prenom2.substring(1).toLowerCase();
        prenom = prenom + "-" + prenom2;
    } else {
        prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();
    }
    console.log(nom)
    console.log(prenom);
    //console.log(prenom.indexOf("-"));
}

//nmfamille();
function cryptage() {
    let phrase = prompt("veuillez entrer votre chaine non cryptés");
    phrase = phrase.toLowerCase();
    //let crypt = phrase.split("a"||"A");
    phrase = phrase.replaceAll('a', '4').replaceAll('e', '3').replaceAll('g', '6').replaceAll('i', '1').replaceAll('o', '0').replaceAll('s', '5').replaceAll('z', '2');
    console.log(phrase);
}

//cryptage();

function jazzBundle() {
    let numberJazz = prompt("saisissez un nombre !");
    let i = 0;
    while (i < numberJazz) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i + " = " + "Jazz Bundle");
        } else if (i % 5 === 0) {
            console.log(i + " = " + "Bundle");
        } else if (i % 3 === 0) {
            console.log(i + " = " + "Jazz");
        } else {
            console.log(i);
        }
        i++;
    }
}

//jazzBundle();


function jazzBundle2() {
    let numberJazz = prompt("saisissez un nombre !");
    let i = 0;
    let affiche;
    while (i < numberJazz) {
        if (i % 5 === 0 && i % 3 === 0) {
            affiche = i + " = " + "Jazz Bundle";
        } else if (i % 5 === 0) {
            affiche = i + " = " + "Bundle";
        } else if (i % 3 === 0) {
            affiche = i + " = " + "Jazz";
        } else {
            affiche = i;
        }
        console.log(affiche);
        i++;
    }
}

//jazzBundle2();

//4les tableaux et fonctions
function addition() {
    let calcul = 0;
    let tableau1 = [1, 2, 3.14, 3.95, 7];
    for (let i = 0; i < tableau1.length; i++) {
        if (tableau1[i] === Math.floor(tableau1[i])) {
            calcul += tableau1[i];
        }
    }
    console.log(calcul);
}

//addition();

function compteur() {
    let tableau2 = [1, 2, 5, 9, 7, 20];
    let compteur = 0;

    for (let i = 0; i < tableau2.length; i++) {
        let coupe = tableau2[i] / 2;
        if (tableau2[i] === Math.floor(tableau2[i])) {
            if (coupe === Math.floor(coupe)) {
                compteur++;
            }
        }
    }
    console.log(compteur);
}

//compteur();

function concatenation() {
    let tab1 = [1, 3, 5];
    let tab2 = [2, 4, 6];
    let tab3 = tab1.concat(tab2);
    let tmp;
    let nombre = 0;
    let nombrePrecis = 0;
    let longeur = tab3.length;

    for (let i = 0; i < (longeur - 1); i++) {
        nombrePrecis = nombre;
        for (let j = 0; j < longeur; j++) {
            if (tab3[j + 1] < tab3[j]) {
                tmp = tab3[j];
                tab3[j] = tab3[j + 1];
                tab3[j + 1] = tmp;
                nombre++;
            }
        }
    }
    console.log("tab1 : " + tab1);
    console.log("tab2 : " + tab2);
    console.log("tab3 : " + tab3);
}

//concatenation();

//dichotomie non reussi

function pairGrand() {
    let tmp;
    let tab1 = [1, 2, 151, 222, 853];
    let tab2 = [];
    for (let i = 0; i < tab1.length; i++) {
        if (tab1[i] % 2 === 0) {

            tab2[i] = tab1[i];
        }

    }
    console.log(tab2)
    tmp = 0;
    for (i = 0; i < tab2.length; i++) {
        tab2 = tab2.filter(function (val) {
            return val !== ''
        });
        if (tab2[i] > tmp) {
            tmp = tab2[i];
        }
    }
    console.log(tmp);
}

//pairGrand();


//!!! L'occurrence ne fonctionne pas !!!
function occurrence(phrase) {
    let tabPhrase=phrase.split(" ");
    let tabassoc=new Array();
    for (i=0;i<tabPhrase.length;i++){
        let phraseCompt =tabPhrase[i];
        let compteur=0;
        for (j=0;j<tabPhrase.length;j++){
            if (phraseCompt==tabPhrase[j]){
                compteur++;
            }
        }
        tabassoc[tabPhrase[i]]=compteur;
        
    }
    console.log(tabassoc);
}
occurrence("salut salut c'est moi moi moi");

