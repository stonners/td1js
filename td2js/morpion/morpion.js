let person = prompt("Veuillez entrer le nom du 1er joueur", "Joueur 1");
let person2 = prompt("Veuillez entrer le nom du 2ème joueur", "Joueur 2");
let tailleMorpion;


do {
    tailleMorpion = prompt("choisissez la taille entre 3 et 8");
} while (tailleMorpion < 3 || tailleMorpion > 8);

let score = 0;
let score2 = 0;


function copy_value() {
    let tabP = document.getElementsByTagName("p");
    for (let i = 0; i < tabP.length; i++) {
        tabP[i].innerHTML = person + " = " + score + "<br>" + person2 + " = " + score2;
    }
}

copy_value();

function generate_table() {
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");

    let tblBody = document.createElement("tbody");
    // creating all cells

    let autoId = 0;
    for (let i = 0; i < tailleMorpion; i++) {
        // creates a table row
        let row = document.createElement("tr");
        for (let j = 0; j < tailleMorpion; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            let taille = 100 / tailleMorpion;
            taille += "%";
            cell.setAttribute("Id", autoId);
            cell.setAttribute("align", "center");
            cell.setAttribute("onClick", "getId(this.id)");
            cell.setAttribute("width", taille);
            cell.setAttribute("height", taille);
            cell.setAttribute("value", "0")

            let cellText = document.createTextNode(" ");

            cell.appendChild(cellText);
            row.appendChild(cell);
            autoId++;
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);


    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.setAttribute("align", "center");
    tbl.setAttribute("width", "500");
    tbl.setAttribute("height", "500");
    tbl.setAttribute("table-layout", "fixed");

}

generate_table();

let x = 0;
let gagne = false;

let finPartie = false;
function getId(id) {

    let img = document.createElement("img");
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    let block;
    if (finPartie !== true) {
        if (document.getElementById(id).innerHTML === " ") {
            if (x % 2 === 0) {
                img.src = "img/cross.cur";
                block = document.getElementById(id);
                block.appendChild(img);
                document.getElementById(id).value = "1";
            } else {
                img.src = "img/rond.png";
                block = document.getElementById(id);
                block.appendChild(img);
                document.getElementById(id).value = "2";
            }
            x++;

        }

        //pour compter les point (en test)
        let tab = document.getElementsByTagName("td");
        for (let i = 0; i < tab.length; i++) {
            if (parseInt(i / tailleMorpion) === 0 && tab[i].value !== undefined) {
                gagne = regardeColone(i, tab);

            }

            if (i === 0 && tab[0].value !== undefined && gagne === false) {
                gagne = regardeDiagonale(tab);

            }
            if (i === tailleMorpion - 1 && tab[tailleMorpion - 1].value !== undefined && gagne === false) {
                gagne = regardeDiagonaleInverse(tab);

            }
            if (i % tailleMorpion === 0 && tab[i].value !== undefined && gagne === false) {
                console.log(i);
                gagne = regardeligne(i, tab);

            }
            if (gagne === true) {

                if (tab[i].value === "1") {
                    score += 1;
                }
                if (tab[i].value === "2") {
                    score2 += 1;
                }
                finPartie = true;
                copy_value();
                buttonRestart();


                console.log("t");
            }
        }

    }

}
function regardeColone(col, tab) {
    let gagne = true;
    for (let i = 1; i < tailleMorpion; i++) {
        if (tab[col].value !== tab[col + tailleMorpion * i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeligne(lig, tab) {
    let gagne = true;
    for (let i = 1; i < tailleMorpion; i++) {
        if (tab[lig].value !== tab[lig + i].value) {
            console.log(lig + i);
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonale(tab) {
    let gagne = true;
    for (let i = 1; i < tailleMorpion; i++) {
        if (tab[0].value !== tab[tailleMorpion * i + i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonaleInverse(tab) {
    let gagne = true;
    for (let i = 1; i < tailleMorpion; i++) {
        if (tab[tailleMorpion - 1].value !== tab[tailleMorpion - 1 + tailleMorpion * i - i].value) {
            gagne = false;
        }
    }
    return gagne;

}
function buttonRestart(){
    let btn = document.createElement("BUTTON");
    let text = document.createTextNode("Rejouer");
    btn.appendChild(text);
    document.body.appendChild(btn);
    btn.setAttribute("align","center")
}