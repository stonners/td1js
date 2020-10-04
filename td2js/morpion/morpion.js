
let j1 = prompt("Veuillez entrer le nom du 1er joueur", "J1");
let j2 = prompt("Veuillez entrer le nom du 2ème joueur", "J2");
let tailleGrille;



let mode="simple"

let score = 0;
let score2 = 0;


function copy_value() {
    let tabP = document.getElementsByTagName("p");
    for (let i = 0; i < tabP.length; i++) {
        tabP[i].innerHTML = j1 + " = " + score + "<br>" + j2 + " = " + score2;
    }
}

copy_value();

let body = document.getElementsByTagName("body")[0];

let tbl = document.getElementById("grille");

let tblBody = document.createElement("tbody");

function generate_table() {
    do {
        tailleGrille = prompt("choisissez la taille dd la grille de jeu entre 3 et 8");
    } while (tailleGrille < 3 || tailleGrille > 8);

    if(confirm("voulez vous jouer en mode complexe")){
        mode="complexe";
    }

    let autoId = 0;
    for (let i = 0; i < tailleGrille; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < tailleGrille; j++) {
            let cell = document.createElement("td");
            let taille = 100 / tailleGrille;
            taille += "%";
            cell.setAttribute("Id", autoId);
            cell.setAttribute("align", "center");
            cell.setAttribute("onClick", "getId(this.id)");
            cell.setAttribute("width", taille);
            cell.setAttribute("height", taille);
            cell.setAttribute("value", "0");

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
let nb=0;
let x = 0;
let gagne = false;

let finPartie = false;

function getId(id) {
    let tab = document.getElementsByTagName("td");
    let img = document.createElement("img");
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    let block;
    if (finPartie !== true) {
        if (document.getElementById(id).innerHTML === " ") {
            if (x % 2 === 0) {
                img.src = "croix.png";
                block = document.getElementById(id);
                block.appendChild(img);
                document.getElementById(id).value = "1";
            } else {
                img.src = "cercle.jpg";
                block = document.getElementById(id);
                block.appendChild(img);
                document.getElementById(id).value = "2";
            }
            x++;

        }

        //pour compter les point (en test)

        for (let i = 0; i < tab.length; i++) {
            if (mode !== "simple") {
                if (parseInt(i / tailleGrille) === 0 && tab[i].value !== undefined && gagne=== false) {

                    gagne = regardeColone(i, tab);
                }

                if (i === 0 && tab[0].value !== undefined && gagne === false) {
                    gagne = regardeDiagonale(tab);
                }
                if (i === tailleGrille - 1 && tab[tailleGrille - 1].value !== undefined && gagne === false) {
                    gagne = regardeDiagonaleInverse(tab);
                }
                if (i % tailleGrille === 0 && tab[i].value !== undefined && gagne === false) {
                    gagne = regardeligne(i, tab);

                }

            } else {
                if (parseInt(i / tailleGrille) <= tailleGrille - 3 && tab[i].value !== undefined && gagne === false) {
                    gagne = regardeColoneSimple(i, tab);
                }
                if (i % tailleGrille <= tailleGrille - 3 && tab[i].value !== undefined && gagne === false) {
                    gagne = regardeLigneSimple(i, tab);
                }
                if (parseInt(i / tailleGrille) <= tailleGrille - 3 && i % tailleGrille <= tailleGrille - 3 && tab[i].value !== undefined && gagne === false) {
                    gagne = regardeDiagonaleSimple(i, tab);
                }
                if (parseInt(i / tailleGrille) < tailleGrille - 3 && i % tailleGrille > 1 && tab[i].value !== undefined && gagne === false) {
                    gagne = regardeDiagonaleInverseSimple(i, tab);
                }
            }

            if (gagne === true) {
                if (nb===0 ) {
                    if (tab[i].value === "1") {
                        score += 1;
                    }
                    if (tab[i].value === "2") {
                        score2 += 1;
                    }
                    finPartie = true;
                    copy_value();
                    nb++;
                }
            }
        }


    }
    if(finPartie!==true) {
        finPartie = true;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].value === undefined) finPartie = false;

        }
    }
    if (finPartie === true) {
        button();
        gagne=false;
    }

}

function regardeColoneSimple(col, tab) {
    let gagne = true;
    for (let i = 1; i <= 2; i++) {
        if (tab[col].value !== tab[col + tailleGrille * i].value) {

            gagne = false;
        }
    }
    return gagne;
}

function regardeLigneSimple(lig, tab) {
    let gagne = true;
    for (let i = 1; i <= 2; i++) {
        if (tab[lig].value !== tab[lig + i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonaleSimple(pos, tab) {
    let gagne = true;
    for (let i = 1; i <= 2; i++) {
        if (tab[pos].value !== tab[pos + tailleGrille * i + i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonaleInverseSimple(pos, tab) {
    let gagne = true;
    for (let i = 1; i <= 2; i++) {
        if (tab[pos].value !== tab[pos + tailleGrille * i - i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeColone(col, tab) {
    let gagne = true;
    for (let i = 1; i < tailleGrille; i++) {
        if (tab[col].value !== tab[col + tailleGrille * i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeligne(lig, tab) {
    let gagne = true;
    for (let i = 1; i < tailleGrille; i++) {
        if (tab[lig].value !== tab[lig + i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonale(tab) {
    let gagne = true;
    for (let i = 1; i < tailleGrille; i++) {
        if (tab[0].value !== tab[tailleGrille * i + i].value) {
            gagne = false;
        }
    }
    return gagne;
}

function regardeDiagonaleInverse(tab) {
    let gagne = true;
    for (let i = 1; i < tailleGrille; i++) {
        if (tab[tailleGrille - 1].value !== tab[tailleGrille - 1 + tailleGrille * i - i].value) {
            gagne = false;
        }
    }
    return gagne;
}

let j = 0;

function button() {
    if (j < 1) {
        let btn = document.createElement("BUTTON");
        let text = document.createTextNode("Rejouer");
        btn.appendChild(text);
        document.body.appendChild(btn);
        btn.setAttribute("onclick", "restart()");
        btn.setAttribute("display","block");
        btn.setAttribute("margin","auto");
        j++;
    }
}

function restart() {
    for(let i=tailleGrille-1;i>=0;i--) {
        document.getElementById("grille").deleteRow(i);
    }
    gagne = false;
    finPartie = false;
    nb=0;
    generate_table();
}