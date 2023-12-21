"use client";

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=GTM-N2WHMLQW`}
      />

      <Script id='ga-script'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-N2WHMLQW');
        `}
      </Script>
    </>
  )
}