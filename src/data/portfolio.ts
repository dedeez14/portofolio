import {
  PersonalInfo,
  SocialLinks,
  Project,
  Skill,
  Experience,
  Education,
  Certificate,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Dede Febriansyah",
  title: "Full Stack Developer",
  subtitle: "Building digital experiences with modern technologies",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. Always eager to learn new technologies and best practices.",
  location: "Indonesia",
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
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/project/sekolah.png",
    featured: true,
    category: "web",
    startDate: "2024-06-01",
    status: "in-progress",
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
    location: "Jakarta, Indonesia",
    startDate: "2022-04-19",
    endDate: "2024-10-12",
    description: [
      "Contributed to the development of web applications using CakePHP, Node.js, and MySQL",
      "Assisted in implementing microservices architecture to improve system performance",
      "Collaborated with senior developers to maintain code quality and follow best practices",
      "Worked with product managers and designers to deliver user-focused features",
    ],
    technologies: ["CakePHP", "Node.js", "MySQL"],
    type: "full-time",
  },
  {
    id: "2",
    company: "PT. Insan Kreatif Cendekia",
    position: "Full Stack Developer",
    location: "Jakarta, Indonesia",
    startDate: "2024-11-01",
    description: [
      "Developed custom web applications for clients using Laravel",
      "Built responsive web platforms with payment gateway integrations",
      "Optimized application performance resulting in 60% faster page load times",
      "Worked directly with clients to gather requirements and provide technical solutions",
      "Maintained and updated legacy PHP applications while migrating to modern stack",
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
    location: "Jakarta, Indonesia",
    startDate: "2025-03-01",
    endDate: "2025-08-28",
    description: [
      "Built responsive web interfaces using Laravel and modern CSS frameworks",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and implemented state management with Redux",
      "Participated in code reviews and maintained high code quality standards",
      "Contributed to the development of the company's design system",
    ],
    technologies: ["Laravel", "Docker", "Redis", "Nodejs", "Git"],
    type: "internship",
  },
  {
    id: "4",
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: "2018-01-01",
    description: [
      "Developed custom websites and web applications for small to medium businesses",
      "Created responsive WordPress themes and custom PHP applications",
      "Provided technical consultation and digital transformation solutions",
      "Managed multiple projects simultaneously while maintaining quality standards",
      "Built long-term relationships with clients resulting in repeat business",
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
