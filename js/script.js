document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("user-message").value.trim();

  // Validasi gender
  if (!genderEl) {
    alert("Pilih jenis kelamin terlebih dahulu.");
    return;
  }

  const gender = genderEl.value;

  // Validasi nomor telepon
  if (!/^[0-9]{10,13}$/.test(phone)) {
    alert("Nomor telepon harus terdiri dari 10 hingga 13 angka.");
    return;
  }

  // Tampilkan hasil ke output
  document.getElementById("outputName").textContent = name;
  document.getElementById("outputEmail").textContent = email;
  document.getElementById("outputPhone").textContent = phone;
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputMessage").textContent = message;

  // Ganti nama di bagian hero
  document.getElementById("name-display").textContent = name;

  // Tampilkan waktu saat ini
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleString();
});
