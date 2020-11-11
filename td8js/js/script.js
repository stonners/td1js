import * as portefeu from "./Portefeuille";
import * as dev from "./Devise";
let listDeTaux = [];
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const devise = new dev.Devise();
const portefeuille = new portefeu.portefeuille();
txconversion();
function clic() {
    const montant = document.getElementById("montant")?.value;
    const deviseSelect = document.getElementById("devise-select")?.value;
    const methode = document.getElementById("methode")?.value;
    if (montant === "" || parseInt(montant) <= 0) {
        document.getElementById("error").innerText = "Erreur : Veuillez saisir une monnaie correct";
    }
    else {
        if (methode == 'depot') {
            portefeuille.ajouter(deviseSelect, parseInt(montant), listDeTaux[deviseSelect]);
        }
        else {
            portefeuille.retirer(deviseSelect, parseInt(montant));
        }
    }
}
function txconversion() {
    fetch('https://api.exchangeratesapi.io/latest', {
        method: 'GET'
    }).then(response => response.json())
        .then(function (json) {
        listDeTaux = json["rates"];
        for (const element in listDeTaux) {
            localStorage.setItem(element, listDeTaux[element]);
            const option = document.createElement("option");
            option.innerHTML = element;
            document.getElementById("devise-select").appendChild(option);
        }
        const option = document.createElement("option");
        option.innerHTML = "EUR";
        document.getElementById("devise-select").appendChild(option);
    }).catch(function (err) {
        console.log("il y a eu un problème avec l'opération fetch : " + err.message);
    });
}
function tableau() {
    for (const element in listDeTaux) {
        const contenueTableau = document.getElementsByTagName("tbody")[0];
        contenueTableau.innerHTML = " ";
        for (const element of portefeuille.table) {
            contenueTableau.innerHTML += "<tr>" +
                "<td style='padding-left: 5px'>" + element.nom + "</td>" +
                "<td style='padding-left: 5px'>" + element.montant + "</td>" +
                "<td style='padding-left: 5px'>" + element.txConvEuros + "</td>" +
                "</tr>";
        }
    }
}
function totalEuro() {
    const divTotal = document.getElementById("totalEuro");
    divTotal.innerHTML = "";
    const p = document.createElement("p");
    divTotal.innerText += portefeuille.totalEuro() + " €";
    divTotal.appendChild(p);
}
document.getElementById("validate")?.addEventListener("click", clic);
document.getElementById("validate")?.addEventListener("click", tableau);
document.getElementById("validate")?.addEventListener("click", totalEuro);
//# sourceMappingURL=script.js.map