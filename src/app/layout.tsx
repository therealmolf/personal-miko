import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miko Planas',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <p className="text-4xl font-averia">
          Miko's Space 
        </p>
        <p>
        🧙‍♂️ Welcome to my space...
        </p>
        <br></br>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br></br>
        <h5 className="italic text-sky-400">
          Developed by Miko Planas
        </h5>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
