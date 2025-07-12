
import './globals.css';
import Navbar from './components/Navbar';
import { Oxygen } from 'next/font/google';
import Script from 'next/script'; 

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'cyncraWebsite',
  description: 'Cyncra Main Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${oxygen.className} bg-light text-dark`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}