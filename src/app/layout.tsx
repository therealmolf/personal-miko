import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
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
      <div className="flex justify-between py-3 my-7 border-b border-gray-800">
        <div>
          <Link href="/">
            <p className="text-3xl p-1 font-averia">
              Miko Planas
            </p>
          </Link>
          <p className="text-sm text-slate-500">
          🧙‍♂️ Welcome to my space...
          </p>
        </div>

        <div className="m-5 flex justify-center">
          <p className="px-2 hover:underline">
          🛠️ Works
          </p>
          <p className="px-2 hover:underline">
          👤About
          </p>
        </div>
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
