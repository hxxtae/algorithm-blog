import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core';

import './globals.css'
import ThemeProvider from '@/components/themeProvider/themeProvider';
import GoogleAnalytics from '@/components/googleAnalytics/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Algorithm",
  description: "algorithms-blog.vercel.app, Heetae의 알고리즘 풀이 및 해설을 위한 블로그 입니다."
}
