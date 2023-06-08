import './globals.css'

export const metadata = {
  title: 'Apple',
  description: 'A clone of Apple product website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
