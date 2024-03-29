import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import ThemeContextToggle from './context/ThemeContext'
import AuthProvider from './components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LaLaLand Blog',
  description: 'Blog about every thing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeContextToggle>
      <AuthProvider>
      <div className='container'>
        <NavBar/>
        {children}
        <Footer/>
        </div>
      </AuthProvider>
      </ThemeContextToggle>
        </body>
    </html>
  )
}
