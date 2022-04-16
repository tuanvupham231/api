

from urllib import response
import json
from django.shortcuts import render
import requests
from email.policy import HTTP
from requests.auth import HTTPBasicAuth


# Create your views here.

def index(request):
    response = requests.get("http://api.maax.vn/api/MaaxApi/GetVehicles",auth=HTTPBasicAuth('lengoc','lengoc01'))
    geodata = response.json()
    drivers = []
    for driver in geodata["vehicleList"]:  
        drivers.append({
        "ID" : driver["ID"],
        "Bienso" : driver["BienSo"],
        "IDThietbi" : driver["IDThietbi"],
        "Tenlaixe" : driver["TenLaiXe"],
        "IDlaixe" : driver["IDLaixe"],
        "TrangThai": driver["TrangThai"],
        "NoMay": driver["NoMay"],
        "DieuHoa": driver["DieuHoa"],
        "LAT" : driver["LAT"],
        "LONG" : driver["LONG"],
        "ViTri" : driver["ViTri"],
        "Huong" : driver["Huong"],
        "TocDo" : driver["TocDo"],
        "ThoiGian": driver["ThoiGian"],
        "ThoiGianDung": driver["ThoiGianDung"],
        "DienThoaiLaiXe" : driver["DienThoaiLaiXe"],
        "ThoiGianLaiXeTrongNgay" : driver["ThoiGianLaiXeTrongNgay"],
        "ThoiGianLaiXeLienTuc": driver["ThoiGianLaiXeLienTuc"],
        "UserName": driver["UserName"],
        "LoaiXe": driver["LoaiXe"],
        "Active": driver["Active"],
        "StatusColor1" :driver["StatusColor1"],
        "StatusColor2" : driver["StatusColor2"],
        "StatusColor3" : driver["StatusColor3"]
        }) 
    return render(request, 'index.html',{"data": drivers}) 

def getTable(request):
    response = requests.get("http://api.maax.vn/api/MaaxApi/GetVehicles",auth=HTTPBasicAuth('lengoc','lengoc01'))
    geodata = response.json()
    drivers = []
    for driver in geodata["vehicleList"]:  
        drivers.append({
            "ID" : driver["ID"],
            "Bienso" : driver["BienSo"],
            "IDThietbi" : driver["IDThietbi"],
            "Tenlaixe" : driver["TenLaiXe"],
            "IDlaixe" : driver["IDLaixe"],
            "TrangThai": driver["TrangThai"],
            "NoMay": driver["NoMay"],
            "DieuHoa": driver["DieuHoa"],
            "LAT" : driver["LAT"],
            "LONG" : driver["LONG"],
            "ViTri" : driver["ViTri"],
            "Huong" : driver["Huong"],
            "TocDo" : driver["TocDo"],
            "ThoiGian": driver["ThoiGian"],
            "ThoiGianDung": driver["ThoiGianDung"],
            "DienThoaiLaiXe" : driver["DienThoaiLaiXe"],
            "ThoiGianLaiXeTrongNgay" : driver["ThoiGianLaiXeTrongNgay"],
            "ThoiGianLaiXeLienTuc": driver["ThoiGianLaiXeLienTuc"],
            "UserName": driver["UserName"],
            "LoaiXe": driver["LoaiXe"],
            "Active": driver["Active"],
            "StatusColor1" :driver["StatusColor1"],
            "StatusColor2" : driver["StatusColor2"],
            "StatusColor3" : driver["StatusColor3"]
        }) 
    return render(request, 'map/getTable.html',{"data": drivers}) 
    
 