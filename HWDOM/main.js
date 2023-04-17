// <------------- DOM BÀI 1 ------------->
// Đầu vào:
//     tạo biến lương
//     tạo biến lương 1 ngày
//     tạo biến số ngày làm
// Xử lý:
//     lương = lương 1 ngày * số ngày làm
// Đầu ra:
//     kết quả

var btntinhluong = document.getElementById("btntinhluong").onclick = function(){
    var luong1ngay = document.getElementById("luong1ngay").value * 1;
    var songaylam = document.getElementById("songaylam").value * 1;
    var tinhluong = luong1ngay * songaylam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var luong = "<p class='text-white'>Tiền Lương Là: " + currentFormat.format(tinhluong) + " VND</p>";
    document.getElementById("Footertinhluong").innerHTML = luong;
    document.getElementById("Footertinhluong").classList.add("style1");
}

//<------------- DOM BÀI 2 ------------->
// Đầu vào:
//     tạo 5 biến số thực từ 1,2,3...
 //     tạo biến trungbinh để tính tổng
// Xử lý:
//     cộng 5 số này lại rồi chia 5
// Đầu ra:
//     kết quả ra được trung bình của 5 số này
var btntinhtb = document.getElementById("btntinhtb").onclick = function(){
    var sothuc1 = document.getElementById("sothuc1").value * 1;
    var sothuc2 = document.getElementById("sothuc2").value * 1;
    var sothuc3 = document.getElementById("sothuc3").value * 1;
    var sothuc4 = document.getElementById("sothuc4").value * 1;
    var sothuc5 = document.getElementById("sothuc5").value * 1;
    var trungbinh = (sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5) / 5;
    var giatritb = "<p class='text-white'>Giá trị trung bình là: " + trungbinh + "</p>"
    document.getElementById("Footertinhtb").innerHTML = giatritb;
    document.getElementById("Footertinhtb").classList.add("style2");
}
// <------------- DOM BÀI 3 ------------->
// Đầu vào:
//     tạo biến số tiền USD cần nhập
// Xử lý:
//     tongtien = số tiền USD cần nhập * VND(23.500)
// Đầu ra:
//     kết quả đổi tiền USD -> VND
var btndoitien = document.getElementById("btndoitien").onclick = function(){
    var doitien = document.getElementById("doitien").value * 1;
    var tinhtiendoi = doitien * 23500;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tiendoi = "<p class='text-white'>Tiền Đổi Được Là: " + currentFormat.format(tinhtiendoi) + " VND</p>"
    document.getElementById("Footerdoitien").innerHTML = tiendoi;
    document.getElementById("Footerdoitien").classList.add("style3");
}

// <------------- DOM BÀI 4 ------------->
// Đầu vào:
//     tạo biến chiều rộng
//     tạo biến chiều dài
// Xử lý:
//     diện tích = dài * rộng
//     chu vi = (dài + rộng) * 2
// Đầu ra:
//     kết quả diện tích,chu vi

var btntinhhcn = document.getElementById("btntinhhcn").onclick = function(){
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    var tinhdt = chieudai * chieurong;
    var tinhcv = (chieudai + chieurong) * 2;
    var kqtinh ="";
    kqtinh += "<p class='text-dark'>Diện Tích Là: " + tinhdt + "</p>";
    kqtinh += "<p class='text-dark'>Chu Vi Là: " + tinhcv + "</p>";
    document.getElementById("FooterHCN").innerHTML = kqtinh;
    document.getElementById("FooterHCN").classList.add("style4");
}
// <------------- DOM BÀI 5 ------------->
// Đầu vào:
//     tạo biến 2 chữ số
// Xử lý:
//     lấy tổng 2 ký số
// Đầu ra:
//     kết quả
var btnsothuc = document.getElementById("btnsothuc").onclick = function(){
    var sothuc = document.getElementById("sothuc").value * 1;
    var hangdv = sothuc % 10;
    var hangtram = Math.floor(sothuc / 10);
    var tong = hangdv + hangtram;
    var kqatong = "<p class='text-white'>Tổng 2 Ký Số Là: " + tong + "</p>";
    document.getElementById("Footersothuc").innerHTML = kqatong;
    document.getElementById("Footersothuc").classList.add("style5");
}
























