import './globals.css'

export const metadata = {
  title: 'WiseCharm — L\'art des mots & de la séduction',
  description: 'Assistant intelligent de séduction et romance par WiseEmpire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#0B0C10] text-[#F4F5F7] min-h-screen antialiased selection:bg-[#8B1E3F] selection:text-white">
        {children}
      </body>
    </html>
  )
}
