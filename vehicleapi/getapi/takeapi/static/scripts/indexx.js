
/* Map */
let biensoxe = json.map(a => a.Bienso);
var long = document.querySelectorAll(".lng");
var lat = document.querySelectorAll(".lat");
var directions = document.querySelectorAll(".direc");
var speeds = document.querySelectorAll(".speed");

var platform = new H.service.Platform({
    apikey: '0LG9EzrI2_m1aZFqlcv537oM7Vlp-mesrhRmCh6WaJY'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: { lat: 21.036237, lng: 105.790583 },
    zoom: 12,
    pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

group = new H.map.Group();
map.addObject(group)
addMarkers();
setInterval(updateMarkers, 8000);
function updateMarkers(){
    group.removeAll();
    addMarkers();
}

function addMarkers(){
    for(var i=0;i<biensoxe.length;i++){
        var longtitude = document.querySelectorAll(".lng");
        var latitude = document.querySelectorAll(".lat");
        var direction = document.querySelectorAll(".direc");
        var speed = document.querySelectorAll(".speed");
        console.log(speed[i].innerHTML)
        if(speed[i].innerHTML > 0){
            var Color = '4'
        }
        if(speed[i].innerHTML == 0){
            Color = '3'
        }
        if(speed[i].innerHTML > 80){
            Color = '6'
        }
        var quotient = Math.floor(direction[i].innerHTML/10);
        var Angle = quotient * 10;
        var path = '../static/images/cars/' + Color + '/Car' + Angle + '.png';
        let html = document.createElement('div'),
        divIcon = document.createElement('div'),
        divText = document.createElement('div'),
        imgIco = document.createElement('img');
        imgIco.setAttribute('src', path);
    divIcon.appendChild(imgIco);
    divText.innerHTML = '<b>'+biensoxe[i]+'</b>';
    html.appendChild(divIcon);
    html.appendChild(divText);
    var domIcon = new H.map.DomIcon(html);
        var markers = new H.map.DomMarker({lat: latitude[i].innerHTML, lng: longtitude[i].innerHTML},{
            icon: domIcon
        })
    group.addObject(markers);
    }
};



