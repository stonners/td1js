import { Morpion } from "./morpion.js";
let morpion;
let nbCoups;
let joueur;
let symbole;
let scores = [0, 0];
let taille;
let modeJeu;
let zone_message;
function recommence() {
    const MAX_GRILLE = 8;
    const MIN_GRILLE = 3;
    zone_message = document.getElementById("messages");
    taille = Number.parseInt(document.getElementById("taille").value);
    if (Number.isNaN(taille) || taille < MIN_GRILLE || taille > MAX_GRILLE) {
        zone_message.innerHTML = "Taille invalide !";
    }
    else {
        const table = document.getElementById("table_morpion");
        for (let l = table.rows.length - 1; l >= 0; l--) {
            table.deleteRow(l);
        }
        morpion = new Morpion(taille);
        for (let i = 0; i < taille; i++) {
            let ligne = table.insertRow(i);
            for (let j = 0; j < taille; j++) {
                let id = '' + ((i + 1) * 10 + (j + 1));
                let cell = ligne.insertCell(j);
                cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
                cell.firstChild?.addEventListener("click", clicBouton(this, i, j));
                document.getElementById(id).value = '';
            }
        }
    }
}
recommence();
function clicBouton(uneCase, y, x) {
    try {
        let victoire = morpion.setCase(symbole, y, x);
        if (victoire) {
            zone_message.innerHTML = "Le joueur " + joueur + " a gagné !";
            desactiveEcouteurs();
            symbole === "x" ? scores[0]++ : scores[1]++;
        }
        else if (nbCoups === taille * taille) {
            zone_message.innerHTML = "Match nul !";
            desactiveEcouteurs();
        }
        else {
            if (symbole === 'x') {
                symbole = 'o';
                joueur = 2;
            }
            else {
                symbole = 'x';
                joueur = 1;
            }
            zone_message.innerHTML = "Joueur " + joueur + ", à toi de jouer !";
        }
    }
    catch (e) {
        zone_message.innerHTML = e.message;
    }
}
function desactiveEcouteurs() {
    for (let i = 0; i < taille; i++) {
        for (let j = 0; j < taille; j++) {
            document.getElementById('' + ((i + 1) * 10 + (j + 1))).removeAttribute("onclick");
        }
    }
    document.getElementById("btn_reset").disabled = false;
}
recommence();
document.getElementById("score").innerHTML = "X : " + scores[0] + " - O  : " + scores[1];
//# sourceMappingURL=jeu_morpion.js.map