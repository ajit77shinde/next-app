import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import SideNav from '@/components/side-nav'
import HeaderMobile from '@/components/header-mobile'
import MarginWidthWrapper from '@/components/margin-width-wrapper'
import PageWrapper from '@/components/page-wrapper'
import LoginPage from '@/components/Auth/login'
import RegisterPage from '@/components/Auth/register'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let login = false;
  let signUp = true;
  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>
        {login && (<div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>)
        }
        {!login && !signUp &&(<LoginPage />)}
        {!login && signUp && (<RegisterPage />)}
      </body>
    </html>
  )
}
