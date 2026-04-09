import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NZ5ZXR8PKJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NZ5ZXR8PKJ');
          gtag('config', 'AW-757510680');
        `}
      </Script>
    </>
  );
}
