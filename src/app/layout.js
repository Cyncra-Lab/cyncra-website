
import './globals.css';
 import { Oxygen } from 'next/font/google';
import Script from 'next/script'; 
import NavBar from '../components/Navbar';
import Footer from '../components/Footer'


 const oxygen = Oxygen({
  weight: [ '400', '700'],
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
      <body className={oxygen.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}