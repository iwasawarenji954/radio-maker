"use client";

import React from 'react';

const UploadButton = () => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {  // 型を定義
    const file = event.target.files?.[0];  // ファイルが選択されているか確認

    if (file) {
      // アップロード処理をここに追加
      console.log('選択されたファイル:', file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadButton;
