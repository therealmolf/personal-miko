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
      <div className="flex justify-between py-3 my-7 border-b border-gray-400">
          <Link href="/">
            <p className="text-2xl font-averia">
            🧙‍♂️ Miko Planas
            </p>
          </Link>

        <div className=" flex justify-between">
          <p className="text-sm px-1 hover:underline" >
          🛠️ <a href="https://github.com/therealmolf">GitHub</a>
          </p>
          <p className="text-sm px-1 hover:underline">
          👤<Link href="resume.pdf">
            Resume
            </Link>
          </p>
        </div>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="text-center">
        <br></br>
        <h5 className="text-xs text-gray-500">
          Developed by Miko Planas using Next.js and Tailwind.
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
