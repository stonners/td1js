const exo1InsertArticle = (body) => {

    let titre = "Article 0 - Interdiction absolue";
    let texte = "<span style='color:#000000;'>Il est absolument interdit de doubler la vedette de l'épreuve : Stéphane Joyeux, sous peine de disqualification immédiate.</span>";

    let newH2 = document.createElement("h2");
    newH2.innerHTML = titre;
    let newP = document.createElement("p");
    newP.innerHTML = texte;

    let firstH2 = body.getElementsByTagName("H2")[0];
    body.insertBefore(newP, firstH2);
    body.insertBefore(newH2, newP);
}

const exo2TitresMajuscule = (body) => {
    let lesH2 = body.getElementsByTagName("h2");
    for (const unH2 of lesH2) {
        const ch = unH2.firstChild.nodeValue;
        unH2.firstChild.nodeValue = ch.toUpperCase();
    }
}

const exo3DecalerNumeros = (body) => {
    let lesH2 = body.getElementsByTagName("h2");
    for (const unH2 of lesH2) {
        const ch = unH2.firstChild.nodeValue;
        const idx = ch.indexOf(" ");
        const idx2 = ch.indexOf(" ", idx + 1);
        const numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
        const ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
        unH2.firstChild.nodeValue = ch2;
    }
}

const exo4Styles = (body) => {
    let lesH2 = body.getElementsByTagName("h2");
    let i = 0;
    for (const unH2 of lesH2) {
        if (i % 2 === 0) {
            unH2.classList.add("unsurdeux");
            let precedent = unH2;
            let unP;
            do {
                unP = precedent.nextSibling;
                precedent = unP;
                if (unP.nodeName !== "H2") {
                    if (unP.classList !== undefined) {
                        unP.classList.add("unsurdeux");
                    }
                }
            } while (unP.nodeName !== "H2")
        }
        i++;
    }
}

const exo5ChangeDates = (body) => {

    let lesH2 = body.getElementsByTagName("h2");
    let art4 = lesH2[3];
    // Recherche du premier UL
    let noeud = art4;
    while (noeud.nodeName !== "UL") {
        noeud = noeud.nextElementSibling;
    }

    // Boucle sur les UL
    let lesUL = [];
    let unUL;
    do {
        unUL = noeud;
        if (unUL.nodeName === "UL") {
            lesUL.push(unUL);
        }
        noeud = noeud.nextElementSibling;
    } while (unUL.nodeName === "UL");

    let pointInsertion = lesUL[0];
    for (let i = lesUL.length - 1; i >= 1; i--) {
        document.body.insertBefore(lesUL[i], pointInsertion);
    }
}

exo1InsertArticle(document.body);
exo2TitresMajuscule(document.body);
exo3DecalerNumeros(document.body);
exo4Styles(document.body);
exo5ChangeDates(document.body);

