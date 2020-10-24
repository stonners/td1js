document.getElementById("meteo").style.visibility = "hidden";
let communeMeteo;
fetch('https://geo.api.gouv.fr/regions', {
    method: 'GET'

}).then(response => response.json())
    .then(json => listRegion(json)
    ).catch(function (err) {
    console.log("il y a eu un problème avec l'opération fetch : " + err.message);
});

function listRegion(tab) {


    let region = $("#region");


    let optionDepart = $("<option></option>").html("--Choisir une region--");
    $(region).append(optionDepart);


    for (let i = 0; i < tab.length; i++) {
        let optionRegion = $("<option></option>").html(tab[i].nom);
        $(optionRegion).attr('value', tab[i].code);
        $(region).append(optionRegion);

    }
}


function choixDepartement() {
    let parentTab = $("#tableau").html("");
    let codeRegion = $("#region").val();
    console.log(codeRegion)


    fetch('https://geo.api.gouv.fr/regions/' + codeRegion + '/departements/', {
        method: 'GET'

    }).then(response => response.json())
        .then(json => listDepartement(json)
        ).catch(function (err) {
        console.log("il y a eu un problème avec l'opération fetch : " + err.message);
    });
}


function listDepartement(tab) {
    let departement = $("#departement");
    console.log(departement);

    // departement.options.length = 0;
    let commune = $("#commune");
    //commune.options.length = 0;
    $("#population").html("");


    let optionDepart = $("<option></option>").html("--Choisir un département--");
    $(departement).append(optionDepart);
    for (let i = 0; i < tab.length; i++) {
        let optionDepartement = $("<option></option>").html(tab[i].nom);
        $(optionDepartement).attr('value', tab[i].code);
        $(departement).append(optionDepartement);
    }
}


function choixCommune() {
    let parentTab = $("#tableau").html("");
    let codeDepartement = $("#departement").val();

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
    let commune = $("#commune");
    //commune.options.length = 0;
    $("population").html("");

    let optionDepart = $("<option></option>").html("--Choisir une commune--");
    $(commune).append(optionDepart);


    for (let i = 0; i < tab.length; i++) {
        let optionCommune = $("<option></option>").html(tab[i].nom);
        $(optionCommune).attr('value', tab[i].code);

        let commune2 = [tab[i].nom, tab[i].codesPostaux, tab[i].population, tab[i].code];
        localStorage.setItem(tab[i].code, commune2);


        $(commune).append(optionCommune);

    }


}

function population() {
    let population;
    let codePost;
    let code = $("#commune").val();


    let parentTab = $("#tableau").html("");
    let popuTotal = 0;

    //iciiiiiiiiiiiiiiiiii
    let trTitre = document.createElement("tr");
    let tdTitre1 = document.createElement("td");
    tdTitre1.innerText = "Nom";
    let tdTitre2 = document.createElement("td");
    tdTitre2.innerText = "Code postal";
    let tdTitre3 = document.createElement("td");
    tdTitre3.innerText = "population";
    trTitre.appendChild(tdTitre1);
    trTitre.appendChild(tdTitre2);
    trTitre.appendChild(tdTitre3);
    parentTab.appendChild(trTitre);

    for (let i = 0; i < localStorage.length; i++) {
        let tr = document.createElement("tr");


        let listCommu = localStorage.getItem(localStorage.key(i)).split(",");


        if (listCommu[3] === code) {
            communeMeteo = listCommu[0];
            console.log(communeMeteo);
            codePost = listCommu[1];
            population = listCommu[2];
            if (population !== "undefined") {
                document.getElementById("population").innerHTML = "La population est de : " + population;
            } else {
                document.getElementById("population").innerHTML = "La population est de : pas d'information";

            }
        }
        if (codePost === listCommu[1]) {
            let tdCommune = document.createElement("td");
            //console.log(listCommu);
            tdCommune.innerHTML = listCommu[0];
            tr.appendChild(tdCommune);
            let tdCodePost = document.createElement("td");
            tdCodePost.innerHTML = listCommu[1];
            tr.appendChild(tdCodePost);
            let tdPopu = document.createElement("td");
            tdPopu.innerHTML = listCommu[2];
            tr.appendChild(tdPopu);
            parentTab.appendChild(tr);
            popuTotal += parseInt(listCommu[2]);
        }
    }
    let divPopuTotal = document.getElementById("popuTotal");
    divPopuTotal.innerText = "La population total est de : " + popuTotal;
    document.getElementById("meteo").style.visibility = "visible";
    localStorage.setItem("communeMeteo", communeMeteo);
}

function meteo() {
    window.location = "meteo.html"
}

document.getElementById("region").addEventListener("change", choixDepartement);
document.getElementById("departement").addEventListener("change", choixCommune);
document.getElementById("commune").addEventListener("change", population);
document.getElementById("meteo").addEventListener("click", meteo);
