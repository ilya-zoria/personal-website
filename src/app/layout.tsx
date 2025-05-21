import { ThemeProvider } from "../components/theme-provider"
import Script from 'next/script'
import "./globals.css"

export const metadata = {
  title: 'Ilya Zoria',
  description: 'Product designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cloud.umami.is" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/images/favicon-32x32.png" as="image" type="image/png" />
        <link rel="preload" href="/images/apple-touch-icon.png" as="image" type="image/png" />
        <link rel="preload" href="/images/thumbnail.jpg" as="image" type="image/jpeg" />
        
        {/* Favicon and touch icons */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
        
        {/* Meta tags */}
        <meta property="og:title" content="Ilya Zoria" />
        <meta property="og:description" content="Product designer" />
        <meta property="og:image" content="/images/thumbnail.jpg" />
        <meta property="og:url" content="https://ilyazoria.design/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ilya Zoria" />
        <meta name="twitter:description" content="Product designer" />
        <meta name="twitter:image" content="/thumbnail.jpg" />
        
        {/* Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="078490c7-d605-4a05-a992-e25f51bb189f"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">
          <div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

