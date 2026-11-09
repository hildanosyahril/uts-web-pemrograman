const jam = new Date().getHours();
let sapa = "Selamat Malam";
if (jam >= 4 && jam < 11) sapa = "Selamat Pagi";
else if (jam >= 11 && jam < 15) sapa = "Selamat Siang";
else if (jam >= 15 && jam < 18) sapa = "Selamat Sore";

document.getElementById("greeting").textContent = sapa + "!";
document.getElementById("user").textContent = sessionStorage.getItem("userEmail") || "Tamu";
document.getElementById("histori").onclick = e => {
  e.preventDefault();
  alert("Fitur Histori Transaksi akan segera hadir.");
};