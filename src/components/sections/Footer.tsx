import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Dibangun dengan Next.js, disajikan lewat Cloudflare.
        </p>
        <p>
          <a href="https://karyaciptasolusi.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            karyaciptasolusi.com
          </a>
        </p>
      </div>
    </footer>
  );
}
