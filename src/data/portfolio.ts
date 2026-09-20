import { PersonalInfo, SocialLinks, Project, Skill, Experience, Education, Certificate, Sistem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Dede Febriansyah",
  title: "Full Stack Developer",
  subtitle: "Membangun sistem yang dipakai bisnis setiap hari",
  bio: "Full-stack developer dari Depok. Sejak 2018 saya membangun aplikasi untuk usaha kecil sampai perusahaan: ERP, kasir, akuntansi, koperasi, BUM Desa, dan monitoring server. Saya menangani seluruh rantainya sendiri, dari menggali kebutuhan, merancang basis data, menulis backend dan antarmuka, sampai menjalankannya di server produksi dan merawatnya.",
  location: "Depok, Indonesia",
  email: "febriansyahd65@gmail.com",
  phone: "+62 838-9891-1244",
  website: "https://dedeproject.dev",
  avatar: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/dedeez14",
  linkedin: "https://linkedin.com/in/dede-febriansyah",
  twitter: "https://twitter.com/dedefebriansyah",
  instagram: "https://instagram.com/dede.febriansyah",
  medium: "https://medium.com/@dedefebriansyah",
  dev: "https://dev.to/dedefebriansyah",
};

/** Papan sistem di hero: produk yang benar-benar berjalan di server sendiri. `tayang: false` = disembunyikan sampai tayang. */
export const sistemBerjalan: Sistem[] = [
  { slug: "movera", nama: "MOVERA ERP", fungsi: "ERP multi-perusahaan: pembelian, penjualan, persediaan, akuntansi, HRD, POS", url: "https://erp.karyaciptasolusi.com/", domain: "erp.karyaciptasolusi.com", stack: "Laravel 12, MySQL", sejak: "2025", tayang: true },
  { slug: "tuleh", nama: "Tuléh POS", fungsi: "Kasir desktop & Android untuk 26 bidang usaha, tersambung ke MOVERA", url: "https://pos.tatreport.com/", domain: "pos.tatreport.com", stack: "Electron, Flutter, Go", sejak: "2025", tayang: true },
  { slug: "bengkel", nama: "Bengkel ERP", fungsi: "Job-shop bengkel bubut: SPK shop-floor realtime, QC, situs perusahaan", url: "https://bengkel.karyaciptasolusi.com/", domain: "bengkel.karyaciptasolusi.com", stack: "Go, React, PostgreSQL", sejak: "2026", tayang: true },
  { slug: "macco", nama: "Macco", fungsi: "Akuntansi: jurnal, buku besar, rekonsiliasi bank, tutup buku, pajak UMKM", url: "https://macco.karyaciptasolusi.com/", domain: "macco.karyaciptasolusi.com", stack: "Go, React, PostgreSQL", sejak: "2026", tayang: true },
  { slug: "bumdes", nama: "SIBUMDes", fungsi: "Tata kelola & pembukuan BUM Desa dengan portal desa publik", url: "https://bumdes.karyaciptasolusi.com/", domain: "bumdes.karyaciptasolusi.com", stack: "Go, React, PostgreSQL", sejak: "2026", tayang: true },
  { slug: "ksp", nama: "SISKOMEPU", fungsi: "Koperasi simpan pinjam: anggota, simpanan, pinjaman, SHU", url: "https://ksp.karyaciptasolusi.com/", domain: "ksp.karyaciptasolusi.com", stack: "Go, React, MySQL", sejak: "2026", tayang: true },
  { slug: "sekolah", nama: "Sistem Manajemen Sekolah", fungsi: "Multi-sekolah: siswa, guru, jadwal, absensi, rapor, keuangan", url: "https://sekolah.karyaciptasolusi.com/", domain: "sekolah.karyaciptasolusi.com", stack: "Laravel 12, MySQL", sejak: "2024", tayang: true },
  { slug: "fleetctl", nama: "FleetCtl", fungsi: "Monitoring & kendali banyak VPS sebagai satu fleet", url: "https://monitoring.karyaciptasolusi.com/", domain: "monitoring.karyaciptasolusi.com", stack: "Go, Next.js, TimescaleDB", sejak: "2026", tayang: true },
];

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 1,
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "TypeScript",
    category: "language",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "JavaScript",
    category: "language",
    proficiency: "expert",
    yearsOfExperience: 2,
  },
  {
    name: "Vue.js",
    category: "frontend",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    name: "HTML5",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 3,
  },
  {
    name: "CSS3",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 3,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    name: "Python",
    category: "language",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    name: "Django",
    category: "backend",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    name: "PHP",
    category: "language",
    proficiency: "intermediate",
    yearsOfExperience: 3,
  },
  {
    name: "Laravel",
    category: "backend",
    proficiency: "intermediate",
    yearsOfExperience: 4,
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "MySQL",
    category: "database",
    proficiency: "advanced",
    yearsOfExperience: 4,
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },

  // Tools & Others
  {
    name: "Git",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "Docker",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    name: "Vercel",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },
  {
    name: "Figma",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
];

export const projects: Project[] = [
  // ── Aplikasi yang berjalan di server sendiri (karyaciptasolusi.com), 2026-09 ──
  {
    id: "movera",
    title: "MOVERA ERP",
    description: "ERP multi-perusahaan & multi-tenant: pembelian, penjualan, persediaan, akuntansi, HRD, POS, dan modul proyek/kontraktor.",
    longDescription:
      "MOVERA adalah ERP berbasis Laravel 12 untuk bisnis Indonesia yang saya bangun dan operasikan sendiri: satu instalasi melayani banyak perusahaan (DB per tenant), dengan modul pembelian, penjualan, persediaan FIFO, akuntansi otomatis (jurnal, neraca, laba rugi, arus kas, analisis rasio), HRD & penggajian, rekrutmen, CRM, POS, serta modul opsional seperti Maintenance armada dan Kontraktor (RAB/RAP, kurva S, lapangan). Dilengkapi mesin persetujuan berjenjang, jejak audit menyeluruh, rekonsiliasi rekening koran, impor CSV, dan marketplace plugin bertanda tangan Ed25519. Demo publik tersedia dengan data contoh.",
    technologies: ["Laravel 12", "PHP 8.4", "MySQL 8", "FrankenPHP", "Docker", "Cloudflare"],
    liveUrl: "https://erp.karyaciptasolusi.com/",
    imageUrl: "/project/movera.png",
    featured: true,
    category: "web",
    startDate: "2025-02-01",
    status: "in-progress",
  },
  {
    id: "bengkel",
    title: "Bengkel ERP — Job-Shop Bubut & Fabrikasi",
    description: "ERP bengkel bubut: customer → project → drawing → SPK shop-floor realtime → QC, plus situs perusahaan dengan SEO.",
    longDescription:
      "Aplikasi manajemen bengkel bubut/machining bergaya job-shop: pelanggan, proyek, gambar teknik, work order (SPK) yang dipantau realtime di lantai produksi lewat WebSocket, kontrol kualitas, penawaran & penagihan, sampai buku besar yang tetap seimbang. Situs perusahaan publiknya dirender server-side dengan robots/sitemap dinamis, JSON-LD, dan media AVIF/WebP. Backend Go modular (chi, pgx, migrasi embedded), frontend React 19 + Vite, PostgreSQL 16, dikemas Docker di balik reverse proxy.",
    technologies: ["Go", "React 19", "PostgreSQL 16", "WebSocket", "Docker", "Nginx"],
    liveUrl: "https://bengkel.karyaciptasolusi.com/",
    imageUrl: "/project/bengkel.png",
    featured: true,
    category: "web",
    startDate: "2026-08-01",
    status: "completed",
  },
  {
    id: "bumdes",
    title: "SIBUMDes — Sistem Informasi BUM Desa",
    description: "Tata kelola, permodalan, unit usaha, pembukuan berpasangan, pelaporan & pajak BUM Desa, plus portal desa publik.",
    longDescription:
      "Sistem informasi manajemen BUM Desa yang mengikuti bagan akun Kepmendesa 136/2022: tata kelola organisasi, permodalan, unit usaha, pembukuan berpasangan, pelaporan keuangan dan pajak, serta portal desa publik untuk warga. Keamanan diperlakukan serius: Row-Level Security PostgreSQL dengan dua peran database, enkripsi kolom sensitif (NIK, rekening) AES-256-GCM, MFA, backup terenkripsi terjadwal, dan retensi data pribadi. Backend Go, frontend React 19 + Vite + Tailwind 4.",
    technologies: ["Go", "React 19", "PostgreSQL 16", "Tailwind 4", "Docker"],
    liveUrl: "https://bumdes.karyaciptasolusi.com/",
    imageUrl: "/project/bumdes.png",
    featured: true,
    category: "web",
    startDate: "2026-09-01",
    status: "completed",
  },
  {
    id: "ksp",
    title: "SISKOMEPU — Koperasi Simpan Pinjam",
    description: "Keanggotaan, simpanan, kas, siklus pinjaman, akuntansi & SHU, dan portal anggota — penulisan ulang dari CodeIgniter ke Go + React.",
    longDescription:
      "Penulisan ulang aplikasi koperasi simpan pinjam legacy (CodeIgniter 2.2, PHP 5.6) menjadi backend Go dan frontend React 18 tanpa memutus data lama: skema legacy dipertahankan lewat 24 migrasi inkremental, sandi lama (SHA1) diterima lalu dinaikkan ke bcrypt saat login, sesi aman dengan kunci server, unggah foto anggota, backup mysqldump terjadwal, dan PWA untuk portal anggota. Mencakup keanggotaan, simpanan wajib/sukarela, kas, pengajuan & angsuran pinjaman, jurnal, dan perhitungan SHU.",
    technologies: ["Go", "React 18", "MySQL 8.4", "PWA", "Docker"],
    liveUrl: "https://ksp.karyaciptasolusi.com/",
    imageUrl: "/project/ksp.png",
    featured: true,
    category: "web",
    startDate: "2026-08-15",
    status: "completed",
  },
  {
    id: "macco",
    title: "Macco — Aplikasi Akuntansi",
    description: "Jurnal, buku besar, rekonsiliasi bank, aset tetap & penyusutan, tutup buku, laporan keuangan, dan pajak UMKM — penulisan ulang dari Laravel ke Go + React.",
    longDescription:
      "Macco (dulu Hisabuna v2) adalah aplikasi akuntansi berbasis web untuk UMKM dan biro jasa: catat cepat uang masuk/keluar tanpa memikirkan debit-kredit, template jurnal berulang, kontak dengan umur piutang & utang, rekonsiliasi bank, tutup buku dengan penguncian periode, aset tetap dengan penyusutan otomatis, ekspor Excel seluruh laporan, laporan pajak UMKM (peredaran bruto & estimasi PPh final), dan bisa dipasang di layar utama ponsel. Rumus dan alur akuntansi dipertahankan sama persis dengan aplikasi lama yang digantikannya.",
    technologies: ["Go", "React 18", "PostgreSQL 16", "Tailwind", "PWA", "Docker"],
    liveUrl: "https://macco.karyaciptasolusi.com/",
    imageUrl: "/project/macco.png",
    featured: true,
    category: "web",
    startDate: "2026-06-01",
    status: "completed",
  },
  {
    id: "fleetctl",
    title: "FleetCtl — Mission Control untuk Fleet VPS",
    description: "Kelola banyak VPS sebagai satu fleet: monitoring metrik realtime, akses SSH, firewall, cron, file, git, dan audit berantai hash.",
    longDescription:
      "Platform multi-tenant untuk mengelola armada VPS: gateway tunggal dengan JWT dan WebSocket, layanan identity (MFA), lisensi & entitlement, vault rahasia, executor SSH fan-out, inventory server dengan host-key pinning, dan modul-modul (monitor, access, firewall, cron, files, git, database, console). Metrik CPU/memori/disk/jaringan dikumpulkan lewat SSH tiap 20 detik ke TimescaleDB, event lewat NATS JetStream, audit log berantai hash. Frontend Next.js 15 + React 19. Demo publik memantau server dummy.",
    technologies: ["Go", "Next.js 15", "TimescaleDB", "NATS JetStream", "Redis", "Docker"],
    liveUrl: "https://monitoring.karyaciptasolusi.com/",
    imageUrl: "/project/fleetctl.png",
    featured: true,
    category: "web",
    startDate: "2026-07-01",
    status: "in-progress",
  },
  {
    id: "tuleh",
    title: "Tuléh POS — Kasir Desktop & Android",
    description: "Aplikasi kasir untuk 26 bidang usaha dengan sinkronisasi ke server MOVERA: desktop Electron, Android Flutter, kiosk self-service.",
    longDescription:
      "Sistem POS lintas platform yang terhubung ke ERP MOVERA: aplikasi desktop (Electron) dan Android (Flutter) dengan manifest fitur per bidang usaha (restoran, ritel, bengkel, salon, dll.), hak akses kasir/manajer/pemilik dari master data, PIN kasir, sesi kas, refund penuh/sebagian, produk per toko, mode jual per kg/nominal, pembayaran QRIS Midtrans, kiosk self-service, dan pembaruan aplikasi wajib yang dikendalikan server.",
    technologies: ["Electron", "Flutter", "Laravel API", "Midtrans", "Go"],
    liveUrl: "https://pos.tatreport.com/",
    imageUrl: "/project/tuleh.png",
    featured: false,
    category: "desktop",
    startDate: "2025-11-01",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Sistem Manajemen Sekolah",
    description: "Aplikasi manajemen sekolah berbasis Laravel dengan sistem role dan permission lengkap untuk multi sekolah.",
    longDescription:
      "Sistem manajemen sekolah komprehensif berbasis Laravel yang mendukung multi sekolah dengan role-based access control (RBAC) menggunakan 6 level role yang berbeda. Aplikasi ini dirancang untuk mengelola seluruh aspek akademik termasuk manajemen siswa, guru, kelas, dan sistem penilaian rapor otomatis. Dilengkapi dengan sistem keuangan terintegrasi yang mencakup manajemen pembayaran dan tagihan, dashboard analytics dengan visualisasi data real-time, serta granular permission system dengan lebih dari 70 permission yang dapat dikustomisasi. Fitur utama meliputi manajemen tahun ajaran, sistem penjadwalan pelajaran otomatis, absensi digital, rapor otomatis berdasarkan penilaian, tracking pembayaran real-time, sistem pengumuman multi-channel, dan laporan komprehensif. Database schema yang robust terdiri dari lebih dari 20 tabel yang mencakup core system, RBAC module, dan berbagai modul akademik. Sistem ini juga menyediakan REST API lengkap, dokumentasi teknis yang detail, dan pengujian menyeluruh untuk memastikan kualitas dan keandalan aplikasi.",
    technologies: [
      "Laravel 12",
      "PHP 8.1+",
      "MySQL 8.0+",
      "Composer",
      "Node.js",
      "RBAC",
      "Blade",
      "Tailwind CSS"
    ],
    liveUrl: "https://sekolah.karyaciptasolusi.com/",
    imageUrl: "/project/sekolah.png",
    featured: true,
    category: "web",
    startDate: "2024-06-01",
    status: "completed",
  },
  {
    id: "1",
    title: "Hisabuna",
    description: "Perangkat Lunak Akuntansi Komprehensif",
    longDescription:
      "Hisabuna adalah perangkat lunak akuntansi komprehensif yang dibangun menggunakan Laravel 12, dirancang khusus untuk memenuhi kebutuhan bisnis modern dalam mengelola keuangan perusahaan. Aplikasi ini dilengkapi dengan sistem autentikasi pengguna yang aman, mendukung multi-user dengan role-based access control, Chart of Accounts yang fleksibel dan dapat dikustomisasi sesuai kebutuhan bisnis, sistem Journal Entries yang akurat untuk pencatatan transaksi keuangan, dan berbagai laporan keuangan yang detail dan real-time. Terintegrasi dengan payment gateway Midtrans untuk memudahkan proses pembayaran online, serta dilengkapi dengan dashboard admin yang komprehensif untuk monitoring dan kontrol penuh atas semua aspek keuangan. Interface yang user-friendly dengan desain modern menggunakan Tailwind CSS memastikan kemudahan penggunaan bagi semua level pengguna, dari akuntan profesional hingga pemilik bisnis yang baru memulai.",
    technologies: [
      "PHP 8.3",
      "Laravel 12",
      "MySQL 5",
      "JQuery",
      "Midtrans",
      "Tailwind CSS",
    ],
    liveUrl: "https://hisabuna.id/",
    liveUrlNew: "https://dev.hisabuna.id/",
    imageUrl: "/project/hisabuna.png",
    featured: true,
    category: "web",
    startDate: "2024-01-15",
    endDate: "2024-04-30",
    status: "completed",
  },
  {
    id: "2",
    title: "Sistem ERP (Enterprise Resource Planning)",
    description: "Sistem ERP terintegrasi untuk otomatisasi proses bisnis perusahaan.",
    longDescription:
      "Sistem ERP kustom yang dirancang khusus untuk mengotomatisasi dan mengintegrasikan proses bisnis inti perusahaan seperti manajemen inventori, penjualan, pembelian, dan keuangan dalam satu platform terpadu. Dibangun menggunakan Laravel 12 dengan arsitektur yang scalable dan maintainable, sistem ini dilengkapi dengan dashboard real-time yang memberikan insight mendalam tentang performa bisnis, role-based access control untuk keamanan data, sistem pelaporan yang komprehensif dan dapat dikustomisasi, workflow approval yang fleksibel, dan integrasi seamless dengan berbagai layanan pihak ketiga. Sistem ini mendukung operasi multi-cabang dengan sinkronisasi data real-time, fitur barcode scanning untuk efisiensi operasional, dan modul-modul yang dapat dikustomisasi sesuai dengan kebutuhan spesifik bisnis. Containerized menggunakan Docker dengan FrankenPHP sebagai built-in server untuk deployment yang efisien dan scalable.",
    technologies: [
      "Laravel",
      "MySQL",
      "JQuery",
      "Bootstrap",
      "FrankenPHP (Built-in docker server)",
      "Docker",
    ],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/project/erp.png",
    featured: true,
    category: "web",
    startDate: "2024-08-01",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Platform Travel - Haji dan Umrah",
    description: "Platform web travel dengan informasi lengkap dan sistem booking untuk perjalanan Haji dan Umrah.",
    longDescription:
      "Platform travel komprehensif yang dibangun menggunakan Laravel, dirancang khusus untuk memberikan layanan informasi dan booking perjalanan Haji dan Umrah yang terpercaya dan mudah digunakan. Aplikasi ini dilengkapi dengan sistem autentikasi pengguna yang aman, fitur perencanaan perjalanan yang detail dengan panduan lengkap untuk ibadah Haji dan Umrah, sistem manajemen booking yang terintegrasi dengan real-time availability checking, dan integrasi payment gateway untuk proses pembayaran yang aman dan mudah. Platform ini mendukung multi-language (Bahasa Indonesia, Arab, dan Inggris) dan multi-currency untuk memberikan pengalaman yang seamless bagi jamaah dari berbagai negara. Dilengkapi dengan sistem tracking perjalanan, panduan ibadah digital, galeri foto dan video, testimoni jamaah, serta customer support 24/7. Interface yang responsive dan user-friendly memastikan kemudahan akses dari berbagai device, baik desktop maupun mobile.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "MySQL",
    ],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/project/travel.png",
    featured: false,
    category: "web",
    startDate: "2024-05-01",
    status: "in-progress",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "PT. CDC GLOBAL INFORMATIKA",
    position: "Junior Developer",
    location: "Jakarta",
    startDate: "2022-04-19",
    endDate: "2024-10-12",
    description: [
      "Mengembangkan aplikasi web dengan CakePHP, Node.js, dan MySQL untuk klien perusahaan.",
      "Ikut memecah sistem monolit menjadi layanan-layanan kecil agar lebih cepat dan mudah dirawat.",
      "Bekerja bersama developer senior menjaga kualitas kode lewat tinjauan dan standar tim.",
      "Menerjemahkan kebutuhan dari product manager dan desainer menjadi fitur yang dipakai pengguna.",
    ],
    technologies: ["CakePHP", "Node.js", "MySQL"],
    type: "full-time",
  },
  {
    id: "2",
    company: "PT. Insan Kreatif Cendekia",
    position: "Full Stack Developer",
    location: "Jakarta",
    startDate: "2024-11-01",
    description: [
      "Membangun aplikasi web pesanan klien dengan Laravel, dari analisis kebutuhan sampai tayang.",
      "Mengintegrasikan payment gateway dan membuat platform yang responsif di ponsel.",
      "Mengoptimalkan kinerja aplikasi hingga halaman termuat sekitar 60% lebih cepat.",
      "Berhubungan langsung dengan klien: menggali kebutuhan dan memberi solusi teknis.",
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "NodeJS",
      "PHP",
    ],
    type: "part-time",
  },
  {
    id: "3",
    company: "PT. Batir Tech",
    position: "Full Stack Developer",
    location: "Jakarta",
    startDate: "2025-03-01",
    endDate: "2025-08-28",
    description: [
      "Membangun antarmuka web responsif dengan Laravel dan framework CSS modern.",
      "Menerapkan desain dari tim UX/UI secara presisi.",
      "Mengintegrasikan REST API dan mengelola state dengan Redux.",
      "Ikut tinjauan kode dan menjaga standar kualitas tim.",
    ],
    technologies: ["Laravel", "Docker", "Redis", "Nodejs", "Git"],
    type: "internship",
  },
  {
    id: "4",
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Jarak jauh",
    startDate: "2018-01-01",
    description: [
      "Membuat situs dan aplikasi web untuk usaha kecil dan menengah.",
      "Membangun tema WordPress kustom dan aplikasi PHP sesuai kebutuhan.",
      "Memberi konsultasi teknis dan pendampingan transformasi digital.",
      "Mengelola beberapa proyek sekaligus dengan kualitas yang terjaga.",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL", "React", "Golang"],
    type: "freelance",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "SMK Asy- Syifa Cimanggis Depok",
    degree: "High School",
    field: "Rekayasa Perangkat Lunak",
    startDate: "2015-03-01",
    endDate: "2018-05-31",
    achievements: [
      // "Valedictorian",
      // "National Mathematics Olympiad participant",
      // "Student Council President",
    ],
  },
];

export const certificates: Certificate[] = [
  // {
  //   id: "1",
  //   name: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   date: "2023-08-15",
  //   url: "https://aws.amazon.com/certification/",
  //   imageUrl: "/certificates/aws-cert.jpg",
  // },
  // {
  //   id: "2",
  //   name: "React Developer Certification",
  //   issuer: "Meta",
  //   date: "2023-03-20",
  //   url: "https://developers.facebook.com/",
  //   imageUrl: "/certificates/react-cert.jpg",
  // },
  // {
  //   id: "3",
  //   name: "Google Cloud Professional Cloud Architect",
  //   issuer: "Google Cloud",
  //   date: "2022-11-10",
  //   url: "https://cloud.google.com/certification",
  //   imageUrl: "/certificates/gcp-cert.jpg",
  // },
  // {
  //   id: "4",
  //   name: "Full Stack Web Development",
  //   issuer: "freeCodeCamp",
  //   date: "2021-09-05",
  //   url: "https://freecodecamp.org/",
  //   imageUrl: "/certificates/freecodecamp-cert.jpg",
  // },
];
