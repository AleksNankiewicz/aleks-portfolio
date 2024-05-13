import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Providers from './providers'
import Footer from '@/components/layouts/Footer'
import TopGradient from '@/components/layouts/TopGradient'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Aleksa Nankiewicza',
  description:
    'Jako front-end developer, moim celem jest tworzenie funkcjonalnych i estetycznych stron internetowych, które spełniają potrzeby moich klientów. Z pasją podchodzę do każdego projektu, dbając o każdy detal, aby stworzyć wizualnie przyjemne i intuicyjne doświadczenia dla użytkowników. Jeśli potrzebujesz pomocy w stworzeniu swojej strony internetowej, chętnie Ci w tym pomogę.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          <Toaster richColors />
          <main className="  overflow-hidden  w-[90%] md:w-[85%] lg:w-[80%] max-w-[1024px]  mx-auto sm:pt-28 pt-32 z-10">
            <Navbar />
            <TopGradient />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
