//exo1
let titre = "Article 0 - Interdiction absolue";
let texte = "<span style='color:#000000;'>Il est absolument interdit de doubler la vedette de l'épreuve : Stéphane Joyeux, sous peine de disqualification immédiate.</span>";
$("body").prepend('<h2>' + titre + '</h2><p>' + texte + '</p>');


function majuscule() {
    let tab = $("h2");
    for (let i = 0; i < tab.length; i++) {
        tab[i].innerText = tab[i].innerText.toUpperCase();
    }
}

function changeNumArt() {
    let lesH2 = $("h2");
    for (let unH2 of lesH2) {
        let ch = unH2.firstChild.nodeValue;
        let idx = ch.indexOf(" ");
        let idx2 = ch.indexOf(" ", idx + 1);
        let numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
        let ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
        unH2.firstChild.nodeValue = ch2;
    }
}

changeNumArt();
majuscule();

function colorationFond() {
    let tabH2 = $("h2");


    for (let i = 0; i < tabH2.length; i++) {
        if (i % 2 === 0) {
            $(tabH2[i]).css("background-color", "yellow");
            //console.log(tabH2[i]);
            $(tabH2[i]).next().css("background-color", "yellow");

        }
    }
}

colorationFond();

function remplacement() {
    let tab = $("ul");
    $(tab[0]).css("id", "tmpEnd")
    let tmpEnd = $(tab[0]);

    //console.log(tab);
    //console.log(tmpEnd);
    let tmpSecond = $(tab[2]);
    $(tab[2]).css("id", "tmpSecond")

    let tmpFirst = $(tab[4]);

    $(tmpEnd).replaceWith(tmpFirst);
    $(tmpEnd).appendTo("ul:eq(2)");

}

remplacement();
