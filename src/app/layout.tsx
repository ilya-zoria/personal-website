import { ThemeProvider } from "../components/theme-provider"
import Script from 'next/script'
import "./globals.css"

export const metadata = {
  title: 'Ilya Zoria Portfolio',
  description: 'Portfolio website of Ilya Zoria, UI/UX and product designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
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

