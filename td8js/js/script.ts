import * as portefeu from "./Portefeuille"
import * as dev from "./Devise"

let listDeTaux: Array<any> = [];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const devise = new dev.Devise();
const portefeuille = new portefeu.portefeuille();

txconversion();

function clic() {

    const montant = (<HTMLInputElement>document.getElementById("montant"))?.value;

    const deviseSelect = (<HTMLInputElement>document.getElementById("devise-select"))?.value;
    const methode = (<HTMLInputElement>document.getElementById("methode"))?.value;
    if (montant === "" || parseInt(montant) <= 0) {
        (document.getElementById("error") as HTMLElement).innerText = "Erreur : Veuillez saisir une monnaie correct";

    } else {
        if (methode == 'depot') {
            portefeuille.ajouter(deviseSelect, parseInt(montant), listDeTaux[deviseSelect]);
        } else {
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
                    const option = (document.createElement("option") as HTMLElement);
                    option.innerHTML = element;
                    (document.getElementById("devise-select") as HTMLInputElement).appendChild(option);
                }
                const option = (document.createElement("option") as HTMLElement);
                option.innerHTML = "EUR";
                (document.getElementById("devise-select") as HTMLInputElement).appendChild(option);
            }
        ).catch(function (err) {
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

function totalEuro(): void {
    const divTotal = (document.getElementById("totalEuro") as HTMLInputElement);
    divTotal.innerHTML = "";
    const p = document.createElement("p") as HTMLInputElement;
    divTotal.innerText += portefeuille.totalEuro() + " €";
    divTotal.appendChild(p);
}

document.getElementById("validate")?.addEventListener("click", clic);
document.getElementById("validate")?.addEventListener("click", tableau);
document.getElementById("validate")?.addEventListener("click", totalEuro);