/* Map */
let biensoxe = json.map(a => a.Bienso);
let tocdo = json.map(b => b.TocDo);
let huong = json.map(c => c.Huong);
let _lat = json.map(d => d.LAT);
let _lng = json.map(e => e.LONG);

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
/* setInterval(function(){
    updateLatLng();
    updateMarkers();
}, 5000)
    
function updateLatLng(){
    group.removeAll();
}  */
function addMarkers(){
    for(var i=0;i<biensoxe.length;i++){
        var latitude = _lat[i];
        var longtitude = _lng[i];
        console.log(latitude, longtitude)
        var direction = huong[i];
        var speed = tocdo[i];
        if(speed>0){
            var Color = '4'
        }
        if(speed == 0){
            Color = '3'
        }
        if(speed>90){
            Color = '6'
        }
        var quotient = Math.floor(direction/10);
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
        var markers = new H.map.DomMarker({lat: latitude, lng: longtitude},{
            icon: domIcon
        })
    group.addObject(markers);
    }
};




