let dataCities;
document.getElementById("details").style.display = "none";
getRegions();

/**
 * Appel de l'API gouvernementale
 *
 * @param url : l'url, selon le cas, pour les données de régions/départements/communes
 * @param oneSelect : la balise select à remplir
 * @param callbackFunction : la fonction à appeler suite à la mise à jour du select ( = le select suivant)
 */
function fetchGeoApi(url, oneSelect, callbackFunction) {

    fetch(url,
        {
            method: 'GET',
        })
        .then(function (response) {
            let contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                response.json().then(function (json) {
                    if (url.endsWith("communes")) {
                        dataCities = json;
                    }
                    let options = '';
                    for (const oneData of json) {
                        options += "<option value='" + oneData.code + "'>" + oneData.nom + "</option>";
                    }
                    oneSelect.innerHTML = options;
                    callbackFunction(oneSelect);
                });
            }
        })
        .catch(function (error) {
            console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
        });
}

function getRegions() {

    fetchGeoApi('https://geo.api.gouv.fr/regions',
        document.getElementById("regions"),
        getDepartements);
}

function getDepartements(regionSelect) {

    fetchGeoApi('https://geo.api.gouv.fr/regions/' + regionSelect.value + '/departements',
        document.getElementById("departements"),
        getCities);
}

function getCities(dptSelect) {

    fetchGeoApi('https://geo.api.gouv.fr/departements/' + dptSelect.value + '/communes',
        document.getElementById("cities"),
        citySelected);
}

function citySelected(citySelect) {

    // Exercice 1.2
    document.getElementById("details").style.display = "inline";
    let population = dataCities[citySelect.selectedIndex].population;
    document.getElementById("population").innerHTML = population === undefined ? "[Donnée non disponible]" : population;

    // Exercice 1.3 FOREACH, FILTER, MAP, REDUCE, INCLUDES
    let tableCities = document.getElementById("tdata");
    tableCities.innerHTML = "";

    let arrayCPReference = dataCities[citySelect.selectedIndex].codesPostaux;
    let filteredArray = dataCities.filter(value => arrayCPReference.includes(value.codesPostaux[0]));
    filteredArray.forEach(element => {
        let population = element.population === undefined ? "--" : element.population;
        tableCities.innerHTML += `<tr><td>${element.nom}</td><td>${element.codesPostaux[0]}</td><td>${population}</td></tr>`
    });

    let total = filteredArray.map(element => element.population).reduce((elt1, elt2) => elt1 + elt2);

    document.getElementById("total").innerHTML = isNaN(total) ? "[Donnée non disponible]" : total;

    // Preparation Exercice 2
    sessionStorage.setItem("cityName", dataCities[citySelect.selectedIndex].nom);
}
