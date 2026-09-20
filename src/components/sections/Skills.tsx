/*
 * Keahlian dikelompokkan per peran, ditulis sebagai kalimat — bukan badge bertebaran.
 * Urutan di tiap kelompok = yang paling sering dipakai di sistem yang berjalan (lihat hero).
 */
const kelompok = [
  {
    nama: 'Backend',
    isi: 'Laravel dan PHP (sejak 2020), Go (chi, pgx, migrasi tersemat), Node.js dan Express, Python dan Django untuk kebutuhan tertentu.',
  },
  {
    nama: 'Frontend',
    isi: 'React dan Next.js, TypeScript, Vue.js, Tailwind CSS, Blade dan Alpine untuk aplikasi Laravel, HTML dan CSS yang saya tulis sejak awal.',
  },
  {
    nama: 'Data',
    isi: 'PostgreSQL (RLS, TimescaleDB), MySQL (sejak 2020, multi-tenant DB per pelanggan), MongoDB, Redis, NATS JetStream.',
  },
  {
    nama: 'Infrastruktur',
    isi: 'Docker Compose di VPS, Nginx dan FrankenPHP, Cloudflare (DNS, Pages, Workers), GitHub Actions, backup dan pemantauan yang saya jalankan sendiri.',
  },
  {
    nama: 'Di luar kode',
    isi: 'Menggali kebutuhan bersama pemilik usaha, merancang alur akuntansi dan persediaan yang benar, menulis dokumentasi dalam Bahasa Indonesia.',
  },
];

export function Skills() {
  return (
    <section id="keahlian" className="border-t border-rule">
      <div className="section-grid mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="judul text-xl text-ink">Keahlian</h2>
        <dl className="divide-y divide-rule border-y border-rule">
          {kelompok.map((k) => (
            <div key={k.nama} className="grid gap-1 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
              <dt className="font-medium text-ink">{k.nama}</dt>
              <dd className="prosa text-ink-2">{k.isi}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
