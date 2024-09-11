// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート
import { FaHome, FaUser, FaMicrophone, FaFileAlt, FaDownload, FaPlay } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="bg-teal-500 text-white w-48 h-screen p-4">
      <ul>
        <li className="mb-4 flex items-center">
          <FaHome className="mr-2" />
          <Link href="/">ホーム</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaUser className="mr-2" />
          <Link href="/mypage">マイページ</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaMicrophone className="mr-2" />
          <Link href="/record">収録</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaFileAlt className="mr-2" />
          <Link href="/script">台本</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaDownload className="mr-2" />
          <Link href="/import">インポート</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaPlay className="mr-2" />
          <Link href="/listen">聴く</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
