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
      <div className="p-5 my-7 border-b border-gray-800">
        <p className="text-4xl font-averia">
          Miko Planas
        </p>
        <p>
        🧙‍♂️ Welcome to my space...
        </p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="text-center">
        <br></br>
        <h5 className="text-xs text-gray-700">
          Developed by Miko Planas using Next.js, Tailwind, etc.
        </h5>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className={averia.className}>
          <div className="mx-auto max-w-3xl">
            {header}
            {children}
            {footer}
          </div>
        </body>
    </html>
  )
}
