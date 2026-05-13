import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.scss'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {  
  title: 'Form kwnDev',
  description: 'Form kwnDev Login and signup page',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        url: '/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
