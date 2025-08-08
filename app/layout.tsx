
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'QUANTARA – Future of Betting',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: '#000',
          color: '#00f0ff',
          padding: '1rem',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          QUANTARA
        </header>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
