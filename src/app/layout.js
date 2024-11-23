import './globals.css'

export const metadata = {
  title: 'Vira Yoga',
  description: 'Premium yoga wear for men',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}