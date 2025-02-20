import { ThemeProvider } from "../components/theme-provider"
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

