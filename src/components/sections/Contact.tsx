import Image from 'next/image';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { nomorWa } from './Hero';

export function Contact() {
  const kanal = [
    { label: 'WhatsApp', nilai: personalInfo.phone ?? '', href: `https://wa.me/${nomorWa}`, Icon: MessageCircle },
    { label: 'Email', nilai: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail },
    { label: 'GitHub', nilai: 'github.com/dedeez14', href: socialLinks.github ?? '', Icon: Github },
    { label: 'LinkedIn', nilai: 'dede-febriansyah', href: socialLinks.linkedin ?? '', Icon: Linkedin },
  ].filter((k) => k.href);

  return (
    <section id="kontak" className="border-t border-rule">
      <div className="section-grid mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="judul text-xl text-ink">Kontak</h2>
        <div>
          <p className="judul max-w-[24ch] text-3xl text-ink sm:text-4xl">
            Punya kebutuhan sistem? Ceritakan, saya balas dalam sehari.
          </p>
          <p className="prosa mt-4 text-ink-2">
            Paling cepat lewat WhatsApp. Untuk penawaran resmi, lampiran, atau kerja sama perusahaan, kirim email.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {kanal.map(({ label, nilai, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-lg border border-rule bg-board px-4 py-3 hover:border-ink"
                >
                  <Icon size={18} className="shrink-0 text-ink-2" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-3">{label}</span>
                    <span className="block truncate text-sm font-medium text-ink">{nilai}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4">
            <Image src="/profile.jpg" alt="Foto Dede Febriansyah" width={56} height={56} className="h-14 w-14 rounded-full border border-rule object-cover" />
            <p className="text-sm text-ink-2">
              <span className="font-medium text-ink">{personalInfo.name}</span>
              <br />
              {personalInfo.title}, {personalInfo.location}. Bekerja di bawah bendera{' '}
              <a href="https://karyaciptasolusi.com" target="_blank" rel="noopener noreferrer" className="text-link hover:underline underline-offset-4">
                PT Karya Cipta Solusi
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
