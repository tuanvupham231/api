/* Map */

var biensoxe = [driver1[1], driver2[1], driver3[1], driver4[1], driver5[1], driver6[1], driver7[1],
driver8[1], driver9[1], driver10[1], driver11[1], driver12[1], driver13[1], driver14[1], driver15[1],
driver16[1], driver17[1], driver18[1], driver19[1], driver20[1], driver21[1], driver22[1], driver23[1]];
var i;
var b;
console.log(biensoxe)
let sum = 0;




var tocdo = [driver1[12], driver2[12], driver3[12], driver4[12], driver5[12], driver6[12],driver7[12],
driver8[12], driver9[12], driver10[12], driver11[12], driver12[12], driver13[12], driver14[12], driver15[12],
driver16[12], driver17[12], driver18[12], driver19[12], driver20[12], driver21[12], driver22[12], driver23[12]];
if(tocdo.length>0){
    for(i=0;i<tocdo.length;i++){
        
    }
}



var direction = [driver1[11], driver2[11], driver3[11], driver4[11], driver5[11], driver6[11],
driver7[11], driver8[11], driver9[11], driver10[11], driver11[11], driver12[11], driver13[11],
driver14[11], driver15[11], driver16[11], driver17[11], driver18[11], driver19[11], driver20[11],
driver21[11], driver22[11], driver23[11] ];
console.log(direction)



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
    addMarkers();
}  */
function addMarkers(){
    for(i=0;i<direction.length;i++){
        const quotient=Math.floor(direction[i] / 10);
        console.log(quotient)
        
        var path = '../static/images/cars/3/Car'+ quotient +'.png';
    }

    /*var Angle = quotient * 10;*/
    
    
    var icon = new H.map.Icon(path);
    var markers = [];
    var html = document.createElement('div'),
        divIcon = document.createElement('div'),
        divText = document.createElement('div'),
        imgIco = document.createElement('img');
    imgIco.setAttribute('src', path);
    divIcon.appendChild(imgIco);
    biensoxe.forEach(element => divText.innerHTML='<b>'+element+'</b>');
    
    html.appendChild(divIcon);
    html.appendChild(divText);
    domIcon = new H.map.DomIcon(html);
    latlng.forEach(function(pos){
        var markerss = new H.map.DomMarker({lat: pos[0], lng: pos[1]},{
            icon: domIcon
        });
        markers.push(markerss);
    });
    group.addObjects(markers);

    window.addEventListener('resize', function(){
        map.getViewPort().resize();
    });
}
