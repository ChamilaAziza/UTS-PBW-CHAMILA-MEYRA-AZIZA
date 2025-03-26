UJIAN TENGAH SEMESTER 
CHAMILA MEYRA AZIZA 
2310631250008

Penjelasan
Kode HTML:
Halaman web ini merupakan portfolio pribadi yang dibuat menggunakan HTML, CSS, dan Bootstrap. 
Halaman ini memiliki berbagai bagian utama, seperti navbar, home, about, portfolio, achievements, contact, serta footer. 
Navbar berfungsi sebagai navigasi untuk berpindah antarhalaman dengan menggunakan JavaScript yang mengatur tampilan konten sesuai dengan bagian yang diklik. 
Pada bagian home, terdapat hero section yang menampilkan nama pemilik portfolio, deskripsi singkat, serta tombol untuk melihat proyek dan menghubungi pemilik web.

Bagian about memberikan informasi lebih lanjut mengenai pemilik portfolio, termasuk latar belakang pendidikan, pengalaman organisasi, serta keterampilan yang dimiliki. 
Terdapat pula daftar keterampilan dalam bentuk ikon yang mempermudah visualisasi kemampuan pemilik. 
Selain itu, bagian ini juga mencantumkan kontak seperti nomor telepon, email, dan tautan ke media sosial.

Bagian portfolio dirancang untuk menampilkan proyek-proyek yang telah dikerjakan oleh pemilik.
Layout menggunakan sistem grid Bootstrap sehingga setiap proyek dapat ditampilkan dalam bentuk kartu yang rapi. 
Bagian achievements memiliki struktur serupa dengan portfolio, tetapi difokuskan pada pencapaian yang pernah diraih.

Bagian contact menyediakan formulir bagi pengunjung yang ingin menghubungi pemilik portfolio. 
Formulir ini terdiri dari beberapa input seperti nama, nomor telepon, email, dan pesan. 
Tombol kirim disediakan untuk mengirimkan pesan, sementara tombol kembali memungkinkan pengguna kembali ke halaman home dengan cepat.

Footer di bagian bawah halaman berisi informasi hak cipta dan beberapa ikon media sosial untuk menghubungkan pengunjung ke akun pemilik. 
Teknologi yang digunakan dalam pembuatan halaman ini mencakup Bootstrap untuk styling dan tata letak, FontAwesome untuk ikon, serta JavaScript untuk interaksi antarhalaman.
Semua elemen ini dirancang agar tampilan portfolio menjadi lebih menarik, responsif, dan mudah diakses oleh pengunjung.

Style Css:
Kode CSS ini mengatur tampilan halaman portofolio pribadi dengan desain yang modern dan responsif menggunakan Bootstrap. 
Variabel global didefinisikan dalam root, termasuk warna utama dan sekunder, serta gradien warna yang digunakan untuk beberapa elemen seperti tombol dan teks. 
Efek transisi global diterapkan agar animasi terasa lebih halus.  

Bagian utama dari halaman ini mencakup navigasi, bagian hero, tentang, keahlian, portofolio, formulir, tombol, dan footer. 
Navigasi memiliki tampilan transparan dengan efek bayangan halus, sementara tautan di dalamnya memiliki efek hover dengan perubahan warna menggunakan gradien. 
Bagian hero menampilkan gambar profil dengan efek hover yang sedikit mengangkatnya, menciptakan kesan mendalam dengan penggunaan lapisan latar belakang berbentuk gradien.  

Bagian tentang berisi gambar yang diberikan efek perbesaran saat kursor diarahkan ke atasnya. 
Bagian keahlian menampilkan beberapa item dalam bentuk kartu kecil yang diberi efek hover agar terlihat lebih menarik. 
Kartu proyek di bagian portofolio memiliki animasi yang memberikan efek mengangkat sedikit dengan tambahan bayangan saat diarahkan kursor.  

Formulir mendapatkan efek fokus yang disesuaikan dengan warna utama agar terlihat lebih interaktif.
Tombol-tombol memiliki desain yang responsif dengan gradien warna dan efek hover yang membuatnya sedikit terangkat serta menampilkan bayangan tambahan. 
Footer dirancang dengan warna latar belakang terang, sedangkan ikon media sosial memiliki bentuk lingkaran dengan efek hover yang menaikkan sedikit posisinya.  

Kode ini juga menyertakan animasi fadeIn yang diterapkan pada elemen agar muncul dengan efek lembut.
Dengan adanya media queries, desain ini tetap nyaman digunakan di berbagai ukuran layar, memastikan pengalaman pengguna yang optimal.

Javascript:
Kode JavaScript ini digunakan untuk mengelola tampilan dan interaksi pada halaman portofolio. 
Fungsi utama dari kode ini adalah untuk menavigasi antar halaman, menampilkan daftar portofolio dan prestasi, serta menyediakan fitur check-in pada item portofolio.  

Fungsi navigasi dilakukan melalui `showContent(contentId)`, yang menyembunyikan semua bagian dengan kelas `content` dan hanya menampilkan bagian yang sesuai dengan `contentId`. 
Dengan cara ini, pengguna dapat berpindah antar halaman tanpa perlu memuat ulang halaman.  
Data portofolio dan prestasi disimpan dalam dua array, yaitu `portfolioItems` untuk proyek portofolio dan `achievements` untuk daftar prestasi.
Masing-masing item dalam array ini berisi informasi berupa judul, gambar, dan deskripsi.  

Saat halaman pertama kali dimuat, fungsi `window.onload` akan secara otomatis menampilkan bagian beranda serta mengisi daftar portofolio dan prestasi menggunakan fungsi `displayItems(items, containerId)`. 
Fungsi ini mengambil data dari array dan menampilkannya dalam elemen dengan `containerId`.
Jika container kosong, fungsi ini akan membuat elemen kartu yang menampilkan gambar, judul, dan deskripsi untuk setiap item, lalu menambahkannya ke dalam container yang sesuai.  

Pada bagian portofolio, terdapat tombol check-in yang dapat digunakan untuk menandai proyek yang telah dikunjungi. 
Fungsi `toggleCheckIn(index)` memungkinkan perubahan status tombol dari "check in" menjadi "checked in" dengan tanda centang.
Selain itu, warna tombol akan berubah dari biru menjadi hijau. Jika tombol ditekan kembali, statusnya akan kembali ke kondisi semula.  

Kode ini dibuat agar pengguna dapat dengan mudah mengakses berbagai bagian dalam halaman portofolio tanpa harus berpindah halaman, 
serta memberikan pengalaman yang lebih interaktif dengan fitur check-in pada proyek yang tersedia.


Penjelasan Keseluruhan:
Halaman web ini merupakan portfolio pribadi yang dibuat menggunakan HTML, CSS, Bootstrap, dan JavaScript.
Tujuan dari halaman ini adalah untuk menampilkan informasi mengenai pemilik portfolio, termasuk latar belakang, keterampilan, proyek yang telah dikerjakan, serta pencapaian yang telah diraih.  

Struktur utama halaman ini mencakup beberapa bagian penting, seperti navbar untuk navigasi, 
home sebagai halaman utama, about yang berisi informasi pribadi, portfolio untuk menampilkan proyek-proyek yang pernah dibuat,
achievements yang memuat daftar penghargaan atau prestasi, contact untuk menyediakan formulir komunikasi, serta footer yang berisi informasi hak cipta dan tautan media sosial.  

Tata letak dan desain halaman ini menggunakan Bootstrap untuk memastikan tampilan yang responsif dan menarik di berbagai perangkat. 
CSS digunakan untuk memberikan efek visual tambahan, seperti animasi hover, transisi halus, 
serta pengaturan warna dan tipografi agar halaman lebih modern dan profesional. 
Bagian hero pada halaman utama dirancang agar memberikan kesan menarik dengan gambar profil dan tombol yang mengarahkan pengguna ke bagian proyek atau kontak.  

JavaScript digunakan untuk meningkatkan interaktivitas halaman, terutama dalam hal navigasi dan pengelolaan konten. 
Fungsi navigasi memungkinkan pengguna berpindah antar halaman tanpa perlu memuat ulang,
sementara fitur check-in pada bagian portfolio memungkinkan pengguna menandai proyek yang telah dikunjungi. 
Data portfolio dan prestasi disimpan dalam array, yang kemudian ditampilkan secara dinamis menggunakan JavaScript untuk memastikan fleksibilitas dalam pengelolaan konten.  

Setiap elemen dalam halaman ini dirancang agar mudah diakses dan digunakan, baik pada layar besar maupun perangkat mobile. 
Dengan kombinasi HTML untuk struktur, CSS untuk tampilan, Bootstrap untuk tata letak responsif, serta JavaScript untuk interaktivitas, 
halaman portfolio ini menjadi sarana yang efektif untuk menampilkan identitas dan pencapaian pemiliknya dalam format yang menarik dan profesional.
