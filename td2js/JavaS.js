function titre() {
    let h2 = document.createElement("h2");
    h2.innerHTML = "Article 0 - Doubler <br>";
    document.body.insertBefore(h2,
        document.body.firstChild);
}

titre();

function paragraphe() {
    let p = document.createElement("p");
    p.innerHTML = "Il est interdit de doubler sous peine de discalifiquation";
    document.body.insertBefore(p,
        document.body.children[1]);
}

paragraphe();

function majuscule() {
    let tab = document.getElementsByTagName("h2");
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.textTransform = "uppercase";
    }
}

function changeNumArt() {

    let b;
    let tab = document.getElementsByTagName("h2");
    for (i = 0; i < tab.length; i++) {

        let res = "";
        b = tab[i].innerHTML.split(' ');
        b[1] = parseInt(b[1]) + 1;
        for (y = 0; y < b.length; y++) {
            res = res + " " + b[y];
        }
        let li1 = document.createElement("h2");
        li1.innerHTML = res;
        document.body.replaceChild(li1, tab[i]);
    }
}

changeNumArt();
majuscule();

function colorationFond() {
    let tab = document.getElementsByTagName("h2");
    let tab2 = document.getElementsByTagName("p");

    for (let i = 0; i < tab.length; i++) {
        if (i % 2 === 0) {
            tab[i].style.backgroundColor = "#0000ff";
            tab[i].nextElementSibling.style.backgroundColor = "#ff0000";
            //tab2[i].style.backgroundColor = "#00ff00";

        }
    }


}

colorationFond();

function remplacement() {
    let tab = document.getElementsByTagName("ul");

    let tmpEnd = tab[0];
    let tmpSecond = tab [2];
    let tmpFirst = tab [4];

    document.body.replaceChild(tmpEnd, tmpFirst)
    document.body.insertBefore(tmpFirst, tmpSecond)

}

remplacement();


