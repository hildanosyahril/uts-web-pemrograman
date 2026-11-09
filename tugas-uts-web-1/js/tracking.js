document.getElementById("cari").onclick = () => {
  const no = document.getElementById("noDO").value.trim().toUpperCase();
  const d = dataTracking[no];
  const hasil = document.getElementById("hasil");
  if (!d) {
    hasil.innerHTML = "<p style='color:#dc2626'>Nomor Delivery Order tidak ditemukan.</p>";
    return;
  }
  hasil.innerHTML = `
    <table>
      <tr><th>Nama Pemesan</th><td>${d.nama}</td></tr>
      <tr><th>Ekspedisi</th><td>${d.ekspedisi}</td></tr>
      <tr><th>Tanggal Kirim</th><td>${d.tanggal}</td></tr>
      <tr><th>Jenis Paket</th><td>${d.paket}</td></tr>
      <tr><th>Total Pembayaran</th><td>Rp ${d.total.toLocaleString("id-ID")}</td></tr>
    </table>
    <h3>Status: ${d.status}</h3>
    <div class="bar"><div style="width:${d.progress}%">${d.progress}%</div></div>`;
};