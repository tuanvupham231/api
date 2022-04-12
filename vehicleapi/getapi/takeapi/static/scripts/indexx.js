var map;
var group;
var arrbienso = new Array();
var arridthietbi = new Array();
var arridlaixe = new Array();
var arrtenlaixe = new Array();
var arrtrangthai = new Array();
var arrnomay = new Array();
var arrdieuhoa = new Array();
var arrvitri = new Array();
var arrLAT = new Array();
var arrLONG = new Array();
var arrhuong = new Array();
var arrTocdo = new Array();
var arrthoigian = new Array();
var arrthoigiandung = new Array();
var arrdienthoailaixe = new Array();
var arrthoigianlaixetrongngay = new Array();
var arrthoigianlaixelientuc = new Array();
var arrusername = new Array();
var arrloaixe = new Array();
var arractive = new Array();
var currentLAT = 21.036159;
var currentLONG = 105.804326;
var Pageload = 0;



function loadMap(){
    if(Pageload == 0)
        {
            var platform = new H.service.Platform({
                apikey: ''
            });
            var defaultLayers = platform.createDefaultLayers();
            var mapContainer = document.getElementById('map');

            map = new H.Map(mapContainer, defaultLayers.raster.normal.map, {
                zoom: 14,
                center: {lat: currentLAT, lng: currentLONG},
                pixelRatio: window.devicePixelRatio || 1
            });

            window.addEventListener('resize', () => map.getViewPort().resize());

            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

            var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

            group = new H.map.Group();
            map.addObject(group);

            Pageload = 1;
        }
    InsertItem();
}

function InsertItem(){
    arrbienso = document.getElementById('bienso').getAttribute('value').toString();
    arridthietbi = document.getElementById('idthietbi').getAttribute('value').toString();
    arridlaixe = document.getElementById('idlaixe').getAttribute('value').toString();
    arrtenlaixe = document.getElementById('tenlaixe').getAttribute('value').toString();
    arrtrangthai = document.getElementById('trangthai').getAttribute('value').toString();
    arrnomay = document.getElementById('nomay').getAttribute('value').toString();
    arrdieuhoa = document.getElementById('dieuhoa').getAttribute('value').toString();
    arrvitri = document.getElementById('vitri').getAttribute('value').toString();
    arrLAT = document.getElementById('LAT').getAttribute("value").toString();
    arrLONG = document.getElementById('LONG').getAttribute("value").toString();
    arrhuong = document.getElementById('huong').getAttribute("value").toString();
    arrTocdo = document.getElementById('tocdo').getAttribute("value").toString();
    arrthoigian = document.getElementById('thoigian').getAttribute("value").toString();
    arrthoigiandung = document.getElementById('thoigiandung').getAttribute("value").toString();
    arrthoigianlaixetrongngay = document.getElementById('thoigianlaixetrongngay').getAttribute("value").toString();
    arrthoigianlaixelientuc = document.getElementById('thoigianlaixelientuc').getAttribute("value").toString();
    arrusername = document.getElementById('username').getAttribute("value").toString();
    arrloaixe = document.getElementById('loaixe').getAttribute("value").toString();
    arractive = document.getElementById('active').getAttribute("value").toString();
    arrstatus1 = document.getElementById('status1').getAttribute("value").toString();
    arrstatus2 = document.getElementById('status2').getAttribute("value").toString();
    arrstatus3 = document.getElementById('status3').getAttribute("value").toString();

    var i = 0;
    var Trangthaixe = "";

    if(arrbienso.length > 0){
        for(i = 0; i < arrbienso.length; i++)
        {
            lat = arrLAT[i];
            lng = arrLONG[i];
            thoigiandung = arrthoigiandung[i];
            if (arrTocdo[i] > 0) thoigiandung = "";

            var CarColor = "4";
            var status = {arrstatus1, arrstatus2, arrstatus3};
            if(arrTocdo[i] == 0){ CarColor = "3";}
            AddMarker(lat, lng, arrbienso[i], CarColor, arrhuong[i], status, i);
        }
    }
}

function goPoint(_lat, _lng, _)

/* var html = document.createElement('div');
                    divText = document.createElement('div');    
                divText.innerHTML = '<b>' + arrbienso + '</b>';
                html.appendChild(divText); */
                /* var domIcon = new H.map.DomIcon(html); */