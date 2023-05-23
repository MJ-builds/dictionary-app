import './globals.css'

export const metadata = {
  title: 'Dictionary App',
  description: 'Dictionary App produced for Frontend Mentors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
