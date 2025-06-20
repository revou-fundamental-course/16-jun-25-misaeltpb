function hitungLuas(e) {
  e.preventDefault();
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const luas = 0.5 * alas * tinggi;
  document.getElementById('hasilLuas').textContent = `Luas = 1/2 × ${alas} × ${tinggi} = ${luas}`;
}

function hitungKeliling(e) {
  e.preventDefault();
  const s1 = parseFloat(document.getElementById('s1').value);
  const s2 = parseFloat(document.getElementById('s2').value);
  const s3 = parseFloat(document.getElementById('s3').value);
  const keliling = s1 + s2 + s3;
  document.getElementById('hasilKeliling').textContent = `Keliling = ${s1} + ${s2} + ${s3} = ${keliling}`;
}
