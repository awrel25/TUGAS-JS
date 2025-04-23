function cekNilai() {
  const konfirmasi = document.getElementById("konfirmasi").checked;
  const hasilDiv = document.getElementById("hasil");

  if (!konfirmasi) {
    hasilDiv.innerHTML =
      "<p>Silakan centang pernyataan konfirmasi terlebih dahulu.</p>";
    return;
  }
}

const dataSiswa = [
  {
    nama: "Alisha Daniyah",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "11223344",
    password: "Alisha321",
  },
  {
    nama: "Angelina Anggi Lestari",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "33445566",
    password: "Anggi321",
  },
  {
    nama: "Nadjwa Anindia Susilo",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "556677",
    password: "Nadjwa333",
  },
  {
    nama: "Nur Ayu Amalia",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "998877",
    password: "KotakAmal",
  },
  {
    nama: "Vita irmaya",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "777266",
    password: "Vita676",
  },
  {
    nama: "Halimah Setyo Utami",
    kelas: "X-A",
    jurusan: "PPLG",
    nisn: "886655",
    password: "Setyo65",
  },
  {
    nama: "Naila Ijlalun Najwa",
    kelas: "X-B",
    jurusan: "PPLG",
    nisn: "776654",
    password: "Ajlunanom",
  },
  {
    nama: "Kimberly Evangeline",
    kelas: "X-B",
    jurusan: "PPLG",
    nisn: "12341234",
    password: "Kim338",
  },
  {
    nama: "Eka Annisa Wahyu Ramadhani",
    kelas: "X-C",
    jurusan: "TJKT",
    nisn: "778867",
    password: "Niswatun",
  },
  {
    nama: "Dyanita",
    kelas: "X-C",
    jurusan: "TJKT",
    nisn: "9236777",
    password: "nittabrt",
  },
  {
    nama: "Nurul Sita Kartika",
    kelas: "X-D",
    jurusan: "TJKT",
    nisn: "777666",
    password: "Nursianti",
  },
  {
    nama: "Syifa Hadju",
    kelas: "X-D",
    jurusan: "TJKT",
    nisn: "8877766",
    password: "syifahdju",
  },
  {
    nama: "Maxiliyo",
    kelas: "X-D",
    jurusan: "TJKT",
    nisn: "7666888",
    password: "Maxbot",
  },
  {
    nama: "Siti Nurhaliza",
    kelas: "X-E",
    jurusan: "TJKT",
    nisn: "772233",
    password: "Siti75",
  },
  {
    nama: "Dewi Lestari",
    kelas: "X-E",
    jurusan: "TJKT",
    nisn: "886767",
    password: "Dewudewi",
  },
  {
    nama: "Jelita Larasati",
    kelas: "X-F",
    jurusan: "DKV",
    nisn: "777889",
    password: "jeljelyayas",
  },
  {
    nama: "Amelia rahmawati",
    kelas: "X-F",
    jurusan: "DKV",
    nisn: "333555",
    password: "melia",
  },
  {
    nama: "yamrin tohir",
    kelas: "X-F",
    jurusan: "DKV",
    nisn: "87268176",
    password: "yamtoh",
  },
  {
    nama: "Fadila Zulfa Salwa",
    kelas: "X-G",
    jurusan: "DKV",
    nisn: "990077",
    password: "Fdilzulfa",
  },
  {
    nama: "Adelia Prameswari",
    kelas: "X-G",
    jurusan: "DKV",
    nisn: "7788991",
    password: "pramadel88",
  },
  {
    nama: "Zhafira Naila Kamila",
    kelas: "X-G",
    jurusan: "DKV",
    nisn: "6622994",
    password: "zhnk2025",
  },
  {
    nama: "Rangga Yudhistira",
    kelas: "X-H",
    jurusan: "DKV",
    nisn: "8811223",
    password: "ryudhis88",
  },
  {
    nama: "Reihan Dwi Mahendra",
    kelas: "X-H",
    jurusan: "DKV",
    nisn: "8899001",
    password: "dkimhen22",
  },
  {
    nama: "Salma Aurellia",
    kelas: "X-H",
    jurusan: "DKV",
    nisn: "7766553",
    password: "aurelsal77",
  },
  {
    nama: "Revan Aldi Pratama",
    kelas: "X-I",
    jurusan: "TKR",
    nisn: "5612345",
    password: "revtrk123",
  },
  {
    nama: "Intan Meilani Putri",
    kelas: "X-I",
    jurusan: "TKR",
    nisn: "7812345",
    password: "intanPutrI",
  },
  {
    nama: "Muhammad Rafly Fadillah",
    kelas: "X-J",
    jurusan: "TKR",
    nisn: "8123477",
    password: "Raftrk789",
  },
  {
    nama: "Ardelia Zahra",
    kelas: "X-J",
    jurusan: "TKR",
    nisn: "8901233",
    password: "Delzah88",
  },
  {
    nama: "Fathir Nur Ramadhan",
    kelas: "X-K",
    jurusan: "TKR",
    nisn: "4455221",
    password: "fatNur321",
  },
  {
    nama: "Citra Anggun Wijaya",
    kelas: "X-K",
    jurusan: "TKR",
    nisn: "6677812",
    password: "CitWjy",
  },
  {
    nama: "Daffa Ghifari",
    kelas: "X-L",
    jurusan: "TKR",
    nisn: "3344567",
    password: "ghifaTKR",
  },
  {
    nama: "Kezia Marsha",
    kelas: "X-L",
    jurusan: "TKR",
    nisn: "5566991",
    password: "kezmarsha1",
  },
];

const muatanUmum = [
  "Pendidikan Agama Islam",
  "Pendidikan Pancasila",
  "Bahasa Indonesia",
  "PJOK",
  "Sejarah",
  "Seni Budaya",
  "Bahasa Jawa",
];

const muatanKejuruan = [
  "Matematika",
  "Bahasa Inggris",
  "Informatika",
  "Projek IPA & IPS",
  "Dasar Program Keahlian",
];

// Fungsi menghasilkan nilai acak
function generateRandomScore(min = 50, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cekNilai() {
  const konfirmasi = document.getElementById("konfirmasi").checked;
  const hasilDiv = document.getElementById("hasil");
  const cetakBtn = document.getElementById("btnCetak");
  cetakBtn.style.display = "none"; // Reset dulu

  if (!konfirmasi) {
    hasilDiv.innerHTML =
      "<p>Silakan centang pernyataan konfirmasi terlebih dahulu.</p>";
    return;
  }

  const nama = document.getElementById("nama").value.trim();
  const kelas = document.getElementById("kelas").value.trim().toUpperCase();
  const nisn = document.getElementById("nisn").value.trim();
  const password = document.getElementById("password").value.trim();
  const jurusanRadio = document.querySelector('input[name="jurusan"]:checked');

  if (!jurusanRadio) {
    hasilDiv.innerHTML = "<p>Silakan pilih jurusanmu.</p>";
    return;
  }

  const jurusan = jurusanRadio.value;

  const siswa = dataSiswa.find(
    (s) => s.nisn === nisn && s.password === password
  );

  if (!siswa) {
    hasilDiv.innerHTML = "<p>Data tidak ditemukan atau password salah.</p>";
    return;
  }

  if (
    siswa.nama.toLowerCase() !== nama.toLowerCase() ||
    siswa.kelas !== kelas ||
    siswa.jurusan !== jurusan
  ) {
    hasilDiv.innerHTML =
      "<p>Data siswa tidak cocok. Periksa kembali inputanmu!</p>";
    return;
  }

  const tabelUmum = muatanUmum
    .map(
      (mapel) => `<tr><td>${mapel}</td><td>${generateRandomScore()}</td></tr>`
    )
    .join("");

  const tabelKejuruan = muatanKejuruan
    .map(
      (mapel) => `<tr><td>${mapel}</td><td>${generateRandomScore()}</td></tr>`
    )
    .join("");

  hasilDiv.innerHTML = `
    <h3>Hasil Nilai: ${siswa.nama} - ${siswa.kelas} (${siswa.jurusan})</h3>
    <table>
      <tr><th colspan="2">A. Muatan Umum</th></tr>
      ${tabelUmum}
    </table>
    <br>
    <table>
      <tr><th colspan="2">B. Muatan Kejuruan</th></tr>
      ${tabelKejuruan}
    </table>
  `;

  // Tampilkan tombol cetak PDF
  cetakBtn.style.display = "block";
}
function generatePDF() {
  const hasil = document.getElementById("hasil");

  if (!hasil || hasil.innerHTML.trim() === "") {
    alert("Belum ada hasil untuk dicetak.");
    return;
  }

  const opt = {
    margin: 0.5,
    filename: "nilai-siswa.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(hasil).save();
}
