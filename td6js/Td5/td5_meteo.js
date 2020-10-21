let cityName = sessionStorage.getItem("cityName");
document.getElementById("cityName").innerText = cityName;
weather(cityName);

function weather(cityName) {

    let appid = "01cd2a43a52ecaee81d9f9b7af4fa448"

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ",fr&units=metric&lang=fr&appid=" + appid, {method: 'GET'})
        .then(function (response) {
            let contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                response.json().then(function (json) {
                    displayData(json)
                });

            }
        })
        .catch(function (error) {
            console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
        });
}


function displayData(json) {

    if (json.weather) {
        document.getElementById("temps").innerHTML = json.weather[0].description;
        document.getElementById("pct").innerHTML = json.main.humidity + '%';
        document.getElementById("ressentie").innerHTML = json.main.feels_like + '°C';
        document.getElementById("temperature").innerHTML = json.main.temp + '°C';
        document.getElementById("min").innerHTML =  json.main.temp_min + '°C';
        document.getElementById("max").innerHTML = json.main.temp_max + '°C';
    } else {
        document.getElementById("details").style.display="none";
        document.getElementById("erreur").style.display="block";
    }
}