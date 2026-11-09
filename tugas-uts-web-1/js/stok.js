const tbody = document.getElementById("tabelStok");
const rupiah = n => "Rp " + Number(n).toLocaleString("id-ID");

function tambahBaris(b) {
  const tr = document.createElement("tr");
  [b.kode, b.judul, b.kategori, rupiah(b.harga), b.stok].forEach(isi => {
    const td = document.createElement("td");
    td.textContent = isi;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
}

dataKatalogBuku.forEach(tambahBaris);

document.getElementById("tambah").onclick = () => {
  const b = {
    kode: document.getElementById("kode").value.trim(),
    judul: document.getElementById("judul").value.trim(),
    kategori: document.getElementById("kategori").value.trim(),
    harga: document.getElementById("harga").value,
    stok: document.getElementById("stok").value
  };
  if (Object.values(b).some(v => v === "")) return alert("Semua kolom wajib diisi");
  dataKatalogBuku.push(b);
  tambahBaris(b);
  document.querySelectorAll("section input").forEach(i => i.value = "");
  alert("Stok baru berhasil ditambahkan");
};