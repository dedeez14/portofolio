const cara = [
  {
    tajuk: 'Satu orang, dari kebutuhan sampai server.',
    isi: 'Saya duduk bersama pemilik usaha untuk memahami alur kerjanya, lalu merancang basis data, menulis backend dan antarmuka, dan menayangkannya di server produksi. Tidak ada yang hilang di antara serah terima.',
  },
  {
    tajuk: 'Benar dulu, baru cantik.',
    isi: 'Sistem bisnis menyimpan uang dan kepercayaan orang. Neraca harus seimbang, stok harus cocok, hak akses harus tegas. Tampilan menyusul setelah angkanya bisa dipertanggungjawabkan.',
  },
  {
    tajuk: 'Dipakai bertahun-tahun, jadi harus bisa dirawat.',
    isi: 'Kode yang rapi, migrasi yang bisa diulang, backup otomatis, dan pemantauan. Semua sistem di halaman ini saya rawat sendiri, jadi saya membangunnya seperti yang ingin saya rawat.',
  },
];

export function Pendekatan() {
  return (
    <section id="cara" className="border-t border-rule">
      <div className="section-grid mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="judul text-xl text-ink">Cara saya bekerja</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cara.map((c) => (
            <div key={c.tajuk}>
              <h3 className="judul text-lg text-ink">{c.tajuk}</h3>
              <p className="prosa mt-3 text-ink-2">{c.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
