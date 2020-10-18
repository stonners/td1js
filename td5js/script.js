fetch('https://geo.api.gouv.fr/regions', {
    method: 'GET'

}).then(response => response.json())
    .then(json => listRegion(json)
    ).catch(function (err) {
    console.log("il y a eu un problème avec l'opération fetch : " + err.message);
});

let optionDepart = document.createElement("option");


function listRegion(tab) {
    let region = document.getElementById("region");
    optionDepart.innerHTML = "--Choisir une region--";
    region.appendChild(optionDepart);

    for (let i = 0; i < tab.length; i++) {
        let optionRegion = document.createElement("option");
        optionRegion.innerHTML = tab[i].nom;
        optionRegion.setAttribute('value', tab[i].code);
        region.appendChild(optionRegion);

    }
}


function choixDepartement() {
    let parentTab = document.getElementById("tableau");
    parentTab.innerHTML = "";
    let codeRegion = document.getElementById("region").value;


    fetch('https://geo.api.gouv.fr/regions/' + codeRegion + '/departements/', {
        method: 'GET'

    }).then(response => response.json())
        .then(json => listDepartement(json)
        ).catch(function (err) {
        console.log("il y a eu un problème avec l'opération fetch : " + err.message);
    });
}


function listDepartement(tab) {
    let departement = document.getElementById("departement");
    departement.options.length = 0;
    let commune = document.getElementById("commune");
    commune.options.length = 0;
    document.getElementById("population").innerHTML = "";

    optionDepart.innerHTML = "--Choisir un département--";
    departement.appendChild(optionDepart);
    for (let i = 0; i < tab.length; i++) {
        let le2 = document.createElement("option");


        le2.innerHTML = tab[i].nom;
        le2.setAttribute('value', tab[i].code);
        departement.appendChild(le2);
    }
}


function choixCommune() {
    let parentTab = document.getElementById("tableau");
    parentTab.innerHTML = "";
    let codeDepartement = document.getElementById("departement").value;

    fetch('https://geo.api.gouv.fr/departements/' + codeDepartement + '/communes', {
        method: 'GET'

    }).then(response => response.json())
        .then(json => listCommune(json)
        ).catch(function (err) {
        console.log("il y a eu un problème avec l'opération fetch : " + err.message);
    });
}

function listCommune(tab) {
    localStorage.clear();
    let commune = document.getElementById("commune");
    commune.options.length = 0;
    document.getElementById("population").innerHTML = "";
    optionDepart.innerHTML = "--Choisir une commune--";
    commune.appendChild(optionDepart);
    for (let i = 0; i < tab.length; i++) {
        let le3 = document.createElement("option");
        le3.innerHTML = tab[i].nom;
        let commune2 = [tab[i].nom, tab[i].codesPostaux, tab[i].population];
        localStorage.setItem(tab[i].code, commune2);
        le3.setAttribute('value', tab[i].codesPostaux);

        commune.appendChild(le3);
    }


}

function population() {

    let code = document.getElementById("commune").value;
    //a refaire
    if (population !== "undefined") {
        document.getElementById("population").innerHTML = "La population est de : ";//+population ;
    } else {
        document.getElementById("population").innerHTML = "La population est de : pas d'information";

    }


    let parentTab = document.getElementById("tableau");
    parentTab.innerHTML = "";
    let popuTotal = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let tr = document.createElement("tr");

        let nombreTr = document.getElementsByTagName("tr");


        listCommu = localStorage.getItem(localStorage.key(i)).split(",");
        console.log(listCommu);
        //console.log("code commune:" + commune2[0]);
        //console.log("code commune:" + commune2[1]);
        //console.log("code :" + code);
        if (listCommu[1] == code) {
            let tdCommune = document.createElement("td");
            console.log(listCommu);
            tdCommune.innerHTML = listCommu[0];
            tr.appendChild(tdCommune);
            let tdCodePost = document.createElement("td");
            tdCodePost.innerHTML = listCommu[1];
            tr.appendChild(tdCodePost);
            let tdPopu = document.createElement("td");
            tdPopu.innerHTML = listCommu[2];
            tr.appendChild(tdPopu);
            parentTab.appendChild(tr);
            popuTotal+= parseInt(listCommu[2]);
        }
    }
    let divPopuTotal = document.getElementById("popuTotal");
    divPopuTotal.innerText = "La population total est de : " + popuTotal;
}


document.getElementById("region").addEventListener("change", choixDepartement);
document.getElementById("departement").addEventListener("change", choixCommune);
document.getElementById("commune").addEventListener("change", population);
//document.getElementById("commune").addEventListener("change", choixCommune);

/*
fetch('https://geo.api.gouv.fr/communes/', {
    method: 'GET'

}).then(response => response.json())
    .then(json => listCommune(json))
    .catch(function (err) {
    console.log("il y a eu un problème avec l'opération fetch : " + err.message);
});


*/