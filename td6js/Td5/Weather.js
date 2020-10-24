
let commune=localStorage.getItem("communeMeteo");

let API='https://api.openweathermap.org/data/2.5/weather?q='+commune+'&appid=68b22d5b12c297cdfec98329113f1ef8';
fetch(API ,{
    method : "GET",
})
    .then(response =>response.json())
    .then(json =>donneesMeteo(json))
    .catch(function (err) {
        console.log("il y a eu un problème avec l'opération fetch : " + err.message);
    });


function converKelvinDegres(K){
    return K - 273.15;
}

function donneesMeteo(tab){
    localStorage.clear();
    let divTemp=$("#meteoTemp");
    let ville = $("<p></p>");
    $(ville).html("Météo de " + commune+ " :<br/>");
    $(divTemp).append(ville);
        let temperature= $("<p></p>");
    $(temperature).html("température : "+converKelvinDegres(parseFloat(tab.main.temp)).toFixed(1)+"°C");
    $(divTemp).append(temperature);

    let ressentie= $("<p></p>");
    $(ressentie).html("ressentie : "+converKelvinDegres(parseFloat(tab.main.feels_like)).toFixed(1)+"°C");
    $(divTemp).append(ressentie);

    let tempMin= $("<p></p>");
    $(tempMin).html("minimale : "+converKelvinDegres(parseFloat(tab.main.temp_min)).toFixed(1)+"°C");
    (divTemp).append(tempMin);

    let tempMax= $("<p></p>");
    $(tempMax).html("maximale : " +converKelvinDegres(parseFloat(tab.main.temp_max)).toFixed(1)+"°C");
    (divTemp).append(tempMax);

    let temps= $("<p></p>");
    $(temps).html("temps : "+tab.weather[0].main);
    $(divTemp).append(temps);

    let humid= $("<p></p>");
    humid.html("pourcentage d'humidité : "+parseFloat(tab.main.humidity).toFixed(1)+"%");
    $(divTemp).append(humid);

}
