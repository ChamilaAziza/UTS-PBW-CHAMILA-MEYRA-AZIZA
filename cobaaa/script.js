// Fungsi Navigasi
function showContent(contentId) {
    document.querySelectorAll('.content').forEach(item => item.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

// Data Portfolio
const portfolioItems = [
    { title: "Web Strawberry", img: "web strawberry.png", desc: "Pembuatan Web Strawberry dengan HTML." },
    { title: "Formulir Pendaftaran", img: "form pmb.png", desc: "Pembuatan Formulir Pendaftaran Mahasiswa Baru." },
    { title: "Tabel Nilai", img: "tabel nilai.png", desc: "Pembuatan Tabel Kumpulan Nilai Mahasiswa" },
    { title: "Galeri Idol", img: "galeri ceye.png", desc: "Pembuatan Kumpulan Foto Chanyeol EXO" },
    { title: "Kalkulator", img: "Kalkulator.png", desc: "Web kalkulator aritmatika sederhana dengan JavaScript" },
    { title: "Kalkulator Fibonacci", img: "Kalkulator Fibonaci.png", desc: "Web kalkulator Fibonacci dengan JavaScript" },
    { title: "Website EXO - Home", img: "web exo.png", desc: "Tampilan Home Website EXO" },
    { title: "Website EXO - About", img: "web exo 2.png", desc: "Tampilan About Website EXO" },
    { title: "Website EXO - Contact", img: "web exo 3.png", desc: "Tampilan Contact Website EXO" }
];

// Data Prestasi
const achievements = [
    { title: "Olimpiade Bahasa Inggris Nasional", img: "bing.png", desc: "Meraih Medali Perunggu." },
    { title: "Olimpiade Fisika Nasional", img: "fisika.png", desc: "Meraih Medali Perak." },
    { title: "Olimpiade Kimia Nasional", img: "kimia.png", desc: "Meraih Medali Emas." },
    { title: "Olimpiade Matematika Nasional", img: "matematika.png", desc: "Meraih Medali Emas." },
    { title: "Pelatihan Cloud Generative AI", img: "pelatihan.png", desc: "Sertifikat Pelatihan." }
];

// Fungsi inisialisasi saat halaman dimuat
window.onload = function() {
    // Tampilkan halaman beranda secara default
    showContent('home');
    
    // Menampilkan Portfolio
    displayItems(portfolioItems, "portfolio-container");
    
    // Menampilkan Prestasi
    displayItems(achievements, "achievement-container");
};

// Fungsi untuk menampilkan item (portfolio atau prestasi)
function displayItems(items, containerId) {
    const container = document.getElementById(containerId);
    
    // Pastikan container ada
    if (!container) return;
    
    // Kosongkan container terlebih dahulu
    container.innerHTML = '';
    
    // Tambahkan item ke container
    items.forEach((item, index) => {
        let colDiv = document.createElement("div");
        colDiv.className = "col";
        colDiv.innerHTML = `
            <div class="card shadow-sm">
                <img src="${item.img}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    ${containerId === "portfolio-container" ? 
                        `<button class="btn btn-primary checkin-btn" id="checkin-${index}" onclick="toggleCheckIn(${index})">Check In</button>` : 
                        ''}
                </div>
            </div>
        `;
        container.appendChild(colDiv);
    });
}

// Fungsi Check-In
function toggleCheckIn(index) {
    let button = document.getElementById(`checkin-${index}`);
    if (button.innerText === "Check In") {
        button.innerText = "Checked In ✅";
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");
    } else {
        button.innerText = "Check In";
        button.classList.remove("btn-success");
        button.classList.add("btn-primary");
    }
}