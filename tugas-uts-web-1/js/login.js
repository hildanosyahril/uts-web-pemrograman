document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const cocok = dataUser.find(u => u.email === email && u.password === pass);
  if (cocok) {
    sessionStorage.setItem("userEmail", email);
    window.location.href = "dashboard.html";
  } else {
    alert("email/password yang anda masukkan salah");
  }
});

const buka = id => document.getElementById(id).classList.add("show");
const tutup = () => document.querySelectorAll(".modal").forEach(m => m.classList.remove("show"));

document.getElementById("btnLupa").onclick = () => buka("modalLupa");
document.getElementById("btnDaftar").onclick = () => buka("modalDaftar");
document.querySelectorAll(".tutup").forEach(b => b.onclick = tutup);

document.getElementById("kirimLupa").onclick = () => {
  const em = document.getElementById("emailLupa").value.trim();
  if (!em) return alert("Email wajib diisi");
  alert("Link reset password dikirim ke " + em);
  tutup();
};

document.getElementById("kirimDaftar").onclick = () => {
  const em = document.getElementById("emailDaftar").value.trim();
  const pw = document.getElementById("passDaftar").value;
  if (!em || pw.length < 6) return alert("Email wajib diisi dan password minimal 6 karakter");
  dataUser.push({ email: em, password: pw });
  alert("Pendaftaran berhasil, silakan login");
  tutup();
};