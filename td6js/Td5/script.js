$("#meteo").css("visibility", "hidden");
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
    $(departement).empty();
    let commune = $("#commune");
    $(commune).empty();
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

    $(commune).empty();
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
    let popuTotal = 0;
    
    let population;
    let codePost;


    let code = $("#commune").val();
    let parentTab = $("#tableau").html("");

    let trTitre = $("<tr></tr>");
    let tdTitre1 = $("<td></td>").html("Nom");
    let tdTitre2 = $("<td></td>").html("Code Postal");
    let tdTitre3 = $("<td></td>").html("Population");
    $(trTitre).append(tdTitre1);
    $(trTitre).append(tdTitre2);
    $(trTitre).append(tdTitre3);
    $(parentTab).append(trTitre);

    for (let i = 0; i < localStorage.length; i++) {
        let tr = $("<tr></tr>");


        let listCommu = localStorage.getItem(localStorage.key(i)).split(",");


        if (listCommu[3] === code) {
            communeMeteo = listCommu[0];
            codePost = listCommu[1];
            population = listCommu[2];
            if (population !== "undefined") {
                $("#population").html("La population est de : " + population);
            } else {
                $("#population").html("La population est de : pas d'information");

            }
        }
        if (codePost === listCommu[1]) {
            let tdCommune = $("<td></td>").html(listCommu[0]);
            $(tr).append(tdCommune);
            let tdCodePost = $("<td></td>").html(listCommu[1]);
            $(tr).append(tdCodePost);
            let tdPopu = $("<td></td>").html(listCommu[2]);
            $(tr).append(tdPopu);
            $(parentTab).append(tr);
            popuTotal += parseInt(listCommu[2]);
        }
    }
    let divPopuTotal = $("#popuTotal");
    $(divPopuTotal).html("La population total est de : " + popuTotal);
    $("#meteo").css('visibility', "visible");
    localStorage.setItem("communeMeteo", communeMeteo);
}

function meteo() {
    window.location = "meteo.html"
}

$("#region").on("change", choixDepartement);
$("#departement").on("change", choixCommune);
$("#commune").on("change", population);
$("#meteo").on("click", meteo);
