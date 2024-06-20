// Dapatkan referensi ke elemen HTML
const inputSuhu = document.getElementById('inputSuhu');
const hasilKonversi = document.getElementById('hasilKonversi');
const tombolKonversi = document.getElementById('tombolKonversi');

// Tambahkan pendengar acara ke tombol
tombolKonversi.addEventListener('click', function() {
  // Dapatkan nilai suhu yang dimasukkan pengguna
  const nilaiSuhu = parseFloat(inputSuhu.value);

  // Validasi input
  if (isNaN(nilaiSuhu)) {
    alert('Masukkan nilai suhu yang valid!');
    return;
  }

  // Lakukan perhitungan konversi suhu
  const satuanAwal = document.querySelector('input[name="satuanAwal"]:checked').value;
  const satuanHasil = document.querySelector('input[name="satuanHasil"]:checked').value;

  let suhuKonversi;
  if (satuanAwal === 'Celcius' && satuanHasil === 'Fahrenheit') {
    suhuKonversi = (nilaiSuhu * 9/5) + 32;
  } else if (satuanAwal === 'Fahrenheit' && satuanHasil === 'Celcius') {
    suhuKonversi = (nilaiSuhu - 32) * 5/9;
  } else {
    // Konversi untuk satuan yang sama (Celcius ke Celcius atau Fahrenheit ke Fahrenheit)
    suhuKonversi = nilaiSuhu;
  }

  // Perbarui elemen hasil konversi
  hasilKonversi.textContent = ${suhuKonversi.toFixed(2)} ${satuanHasil};
});