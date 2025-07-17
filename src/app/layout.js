import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Oxygen } from 'next/font/google';

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Cyncra",
  description: "Official Cyncra website",
  icons: {
    icon: "/image/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oxygen.className}>
      <body className="flex min-h-screen flex-col bg-background text-text antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
