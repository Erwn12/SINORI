<script>
  document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Mencegah form melakukan reload halaman

    // Ambil nilai NIP dan Password dari input fields
    const nip = document.getElementById('nip').value;
    const password = document.getElementById('password').value;

    // Kirim data ke Google Apps Script
    const response = await fetch('https://script.google.com/macros/s/AKfycbxtipDKdyjdno6G3g4naC8Xd5GBeaMyDfhsXngPdOeSv2RgvthFsVTEdxSz5YzQfqJT/exec?nip=' + nip + '&password=' + password);
    const result = await response.json();

    // Cek hasil validasi
    if (result.success) {
      window.location.href = 'https://erwn12.github.io/SINORI/dashboard'; // Redirect ke dashboard jika login berhasil
    } else {
      document.getElementById('errorMessage').classList.remove('hidden'); // Tampilkan pesan kesalahan
    }
  });
</script>
