import { Roboto } from 'next/font/google';
import './globals.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Los pesos que prefieras
  variable: '--font-roboto',
  display: 'swap',
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
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
