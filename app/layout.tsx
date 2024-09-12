// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <body>
        <div className="h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Main content: Sidebar on the left, content on the right */}
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
