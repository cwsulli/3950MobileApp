function init() {
    document.getElementById("btnJoke").addEventListener('click', getJoke, false);
    document.getElementById("btnQuery").addEventListener('click', getNewJoke, false);
    document.getElementById("btnZip").addEventListener('click', getWeather, false);
    //document.getElementById("zip").addEventListener('change', getWeather, false);
}

window.onload = function () {
    document.addEventListener("deviceready", init, false);

    init();
}

function getJoke() {
    $.ajax({
        type: "GET",
        url: "http://api.icndb.com/jokes/random/",
        dataType: "text",
        sucess: function (result) {
            showJoke(result);
        }
    });
}

function showJoke(result) {
    console.log("showJoke: " + result);

    var json = JQuery.parseJSON(result);
    document.getElementById('resultJoke').innerHTML = json.value.joke;
}

function getNewJoke() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;

    $.ajax({
        type: "GET",
        url: "http://api.icndb.com/jokes/random/?firstName=" + fName + "&lastName=" + lName,
        dataTpe: "text",
        success: function (result) {
            showJokeQuery(result);
        }
    });
}

function showJokeQuery(result) {
    var json = jQuery.parseJSON(result);
    document.getElementById('resultQuery').innerHTML = json.value.joke;
}

function getWeather() {
    var zip = document.getElementById('zip').value;

    $.ajax({
        type: "GET",
        url: "http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityWeatherByZIP=" + zip,
        dataType: "text",
        success: function (xml) {
            showWeather(xml);
        }
    })
}

function showWeather(xml) {
    var city = xml.getElementsByTagName('City')[0].firstChild.nodeValue;
    var temperature = xml.getElementsByTagName('Temperature')[0].firstChild.nodeValue;
    var description = xml.getElementsByTagName('Description')[0].firstChild.nodeValue;

    var output = "";

    output += city + "<br />";
    output += "Temperature: " + temperature + "<br />";
    output += "Description: " + description + "<br />";
    document.getElementById("resultWeather").innerHTML = output;
}