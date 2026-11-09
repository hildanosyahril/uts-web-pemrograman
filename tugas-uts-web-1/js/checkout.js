const pesanan = [];
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const pilih = document.getElementById("pilihBuku");

dataKatalogBuku.forEach((b, i) => {
  const o = document.createElement("option");
  o.value = i;
  o.textContent = b.judul + " - " + rupiah(Number(b.harga));
  pilih.appendChild(o);
});

function render() {
  const tb = document.getElementById("tabelPesanan");
  tb.innerHTML = "";
  let total = 0;
  pesanan.forEach((p, i) => {
    const sub = p.harga * p.qty;
    total += sub;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${p.judul}</td><td>${rupiah(p.harga)}</td>
      <td><input type="number" min="1" value="${p.qty}" data-i="${i}" class="qty" style="width:70px"></td>
      <td>${rupiah(sub)}</td>
      <td><button class="btn-red hapus" data-i="${i}">Hapus</button></td>`;
    tb.appendChild(tr);
  });
  document.getElementById("total").textContent = rupiah(total);
  document.querySelectorAll(".qty").forEach(el => el.onchange = () => {
    pesanan[el.dataset.i].qty = Math.max(1, Number(el.value));
    render();
  });
  document.querySelectorAll(".hapus").forEach(el => el.onclick = () => {
    pesanan.splice(el.dataset.i, 1);
    render();
  });
}

document.getElementById("tambahBuku").onclick = () => {
  const b = dataKatalogBuku[pilih.value];
  const ada = pesanan.find(p => p.judul === b.judul);
  if (ada) ada.qty++;
  else pesanan.push({ judul: b.judul, harga: Number(b.harga), qty: 1 });
  render();
};

document.getElementById("formPesan").onsubmit = e => {
  e.preventDefault();
  if (pesanan.length === 0) return alert("Tambahkan minimal satu buku ke pesanan");
  alert("Pesanan atas nama " + document.getElementById("nama").value + " berhasil dibuat!");
  pesanan.length = 0;
  render();
  e.target.reset();
}