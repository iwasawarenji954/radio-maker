// components/EffectButton.tsx
'use client'
import React, { useState } from 'react';

const EffectButton = () => {
  const [isEcho, setIsEcho] = useState(false);

  const toggleEcho = () => {
    setIsEcho(!isEcho);
    // エコーエフェクトのロジックをここに追加
  };

  return (
    <button
      onClick={toggleEcho}
      className={`p-4 text-white font-bold ${isEcho ? 'bg-blue-500' : 'bg-gray-500'} rounded`}
    >
      {isEcho ? 'エコーON' : 'エコーOFF'}
    </button>
  );
};

export default EffectButton;
