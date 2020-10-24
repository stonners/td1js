
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
    let divTemp=document.getElementById("meteoTemp");
    let ville = document.createElement("p");
    ville.innerHTML = "Météo de " + commune+ " :<br/>";
    divTemp.appendChild(ville);
        let temperature= document.createElement('p');
    temperature.innerHTML="température : "+converKelvinDegres(parseFloat(tab.main.temp)).toFixed(1)+"°C";
    divTemp.appendChild(temperature);

    let ressentie= document.createElement('p');
    ressentie.innerHTML="ressentie : "+converKelvinDegres(parseFloat(tab.main.feels_like)).toFixed(1)+"°C";
    divTemp.appendChild(ressentie);

    let tempMin= document.createElement('p');
    tempMin.innerHTML="minimale : "+converKelvinDegres(parseFloat(tab.main.temp_min)).toFixed(1)+"°C";
    divTemp.appendChild(tempMin);

    let tempMax= document.createElement('p');
    tempMax.innerHTML="maximale : " +converKelvinDegres(parseFloat(tab.main.temp_max)).toFixed(1)+"°C";
    divTemp.appendChild(tempMax);

    let temps= document.createElement('p');
    temps.innerHTML="temps : "+tab.weather[0].main;
    divTemp.appendChild(temps);

    let humid= document.createElement('p');
    humid.innerHTML="pourcentage d'humidité : "+parseFloat(tab.main.humidity).toFixed(1)+"%";
    divTemp.appendChild(humid);

}
