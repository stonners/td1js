import * as cmder from "./array_utils.js" ;

//exercice 1 Création d'un module
function test() {
    let tab = [];
    let nbr;
    do {
        if (nbr !== "0") {
            tab.push(nbr);
            nbr = prompt("entrer votre nombre");
        }
    } while (nbr !== "0")
    console.log(tab);
    cmder.addition(tab);
}

//test();

function test2() {
    let tab = [];
    let nbr;
    do {
        if (nbr !== "0") {
            tab.push(nbr);
            nbr = prompt("entrer votre nombre");
        }
    } while (nbr !== "0")

    console.log(tab);
    cmder.compteur(tab);

}

//test2();

function test3() {
    let tab1 = [];
    let nbr;
    do {
        if (nbr !== "0") {
            tab1.push(nbr);
            nbr = prompt("entrer votre nombre");
        }
    } while (nbr !== "0")

    console.log(tab1);
    cmder.pairGrand(tab1);

}

//test3();

//exercice 2 Intégration à une application

function test4() {
    let tab1 = [];
    let nbr;
    let recherche;
    do {
        if (nbr !== "0") {
            tab1.push(nbr);
            nbr = prompt("entrer votre nombre");
        }
    } while (nbr !== "0")

    recherche = prompt("entrer le nombre rechercher");

    console.log(tab1);
    cmder.rechercheDicho(tab1, recherche);

}

//test4();
let k = 2;
let i = 0;
let z = 0;

function ajouterNombre() {
    let element = "Element " + k++ + " <input type=\"number\" id=\"number" + i + "\">";

    let newP = document.createElement("p");
    newP.innerHTML = element;
    let newNumber = document.getElementById("ajout");
    let divParent = newNumber.parentNode;

    divParent.insertBefore(newP, newNumber);
    i++;
}

function afficheFinal() {
    let tab = [];
    let j = 0;
    tab[j] = document.getElementById("number").value;
    for (j = 0; j < i; j++) {
        tab[j + 1] = document.getElementById("number" + j).value;
    }
    //tab a tout les données dans lesquels rechercher

    let numberReshearch = document.getElementById("recherche").value;
    if (tab !== "" && numberReshearch !== "") {
        if (z === 0) {
            let divFinale = document.createElement("div");
            let endDiv = document.getElementById("mainContent");
            divFinale.setAttribute("Id", "divFinale")
            let divParent = endDiv.parentNode;
            divParent.insertBefore(divFinale, endDiv.nextSibling);
            //console.log(tab);


            let text1 = "Somme des éléments : ";
            let text2 = "Nombre de pair : ";
            let text3 = "Plus grand élément pair : ";
            let text4 = "Position de l'élément dans la table : ";

            let p1 = document.createElement("p");
            p1.innerHTML = text1 + cmder.addition(tab);
            divFinale.appendChild(p1);

            let p2 = document.createElement("p");
            p2.innerHTML = text2 + cmder.compteur(tab);
            divFinale.appendChild(p2);
            if (cmder.pairGrand(tab) != 0) {
                let p3 = document.createElement("p");
                p3.innerHTML = text3 + cmder.pairGrand(tab);
                divFinale.appendChild(p3);
            }
            let p4 = document.createElement("p");
            p4.innerHTML = text4 + cmder.rechercheDicho(tab, numberReshearch);
            divFinale.appendChild(p4);
            z++;
        }
    }
}

document.querySelector('#produirRes').addEventListener('click', afficheFinal);
document.querySelector('#ajout').addEventListener('click', ajouterNombre);
