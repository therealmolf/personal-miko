import './globals.css'
import type { Metadata } from 'next'
import { Inter, Averia_Serif_Libre } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: "300",
  display: "swap",
  variable: '--font-averia'
})

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
          Miko Planas
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
      <body className={averia.className}>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
