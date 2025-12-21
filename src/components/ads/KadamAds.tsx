'use client';

import Script from 'next/script';

export function KadamAds() {
  return (
    <>
      <div className="ZENfzR412083"></div>
      <Script
        id="kadam-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.k_init = window.k_init || [];
            k_init.push({
              id: 'ZENfzR412083',
              type: 'bn',
              domain: 'hdbkome.com',
              refresh: false,
              next: 0
            });
          `,
        }}
      />
      <Script
        id="kadam-sdk"
        src="https://hdbkome.com/gfa4909z.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />
    </>
  );
}
