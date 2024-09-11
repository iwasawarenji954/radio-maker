// app/page.tsx
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content: Sidebar on the left, content on the right */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">ホームへようこそ！</h1>
          <p>ここではラジオ制作に関する様々な機能を操作できます。</p>
        </div>
      </div>
    </div>
  );
}
