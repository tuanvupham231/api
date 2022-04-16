/* Map */
let biensoxe = json.map(a => a.Bienso);
let tocdo = json.map(b => b.TocDo);
let huong = json.map(c => c.Huong);


var latlng = [[driver1[8], driver1[9]], [driver2[8], driver2[9]], [driver3[8], driver3[9]],
[driver4[8], driver4[9]], [driver5[8], driver5[9]], [driver6[8], driver6[9]], [driver7[8], driver7[9]],
[driver8[8], driver8[9]], [driver9[8], driver9[9]], [driver10[8], driver10[9]], [driver11[8], driver11[9]],
[driver12[8], driver12[9]], [driver13[8], driver13[9]], [driver14[8], driver14[9]], [driver15[8], driver15[9]],
[driver16[8], driver16[9]], [driver17[8], driver17[9]], [driver18[8], driver18[9]], [driver19[8], driver19[9]],
[driver20[8], driver20[9]], [driver21[8], driver21[9]],[driver22[8], driver22[9]], [driver23[8], driver23[9]]];


var platform = new H.service.Platform({
    apikey: '0LG9EzrI2_m1aZFqlcv537oM7Vlp-mesrhRmCh6WaJY'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: { lat: 21.036237, lng: 105.790583 },
    zoom: 14,
    pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

group = new H.map.Group();
map.addObject(group)
addMarkers();
/* setInterval(function(){
    updateLatLng()
}, 5000)
    
function updateLatLng(){
    group.removeAll();
    addNewMarkers();
}  */
function addMarkers(){
    for(i=0;i<huong.length;i++){
        const quotient=Math.floor(huong[i] / 10);
        const Angle = quotient * 10;
        var path = '../static/images/cars/3/Car'+ Angle +'.png';
    }
    var icon = new H.map.Icon(path);
    let markers = [];
    let html = document.createElement('div'),
        divIcon = document.createElement('div'),
        divText = document.createElement('div'),
        imgIco = document.createElement('img');
    imgIco.setAttribute('src', path);
    divIcon.appendChild(imgIco);
    biensoxe.forEach(element => divText.innerHTML = '<b>'+element+'</b>');
    
    html.appendChild(divIcon);
    html.appendChild(divText);
    domIcon = new H.map.DomIcon(html);
    latlng.forEach(function(pos){
        let markerss = new H.map.DomMarker({lat: pos[0], lng: pos[1]},{
            icon: domIcon
        });
        markers.push(markerss);
    });
    group.addObjects(markers);
    window.addEventListener('resize', function(){
        map.getViewPort().resize();
    });
}

function addNewMarkers(){
    let lat = [document.getElementById("getlat").getAttribute("value")];
    console.log(lat)
}
