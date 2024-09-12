"use client";

import React, { useState } from 'react';
import RecordButton from '../../components/RecordButton';
import AudioRecorder from '../../components/AudioRecorder';

export default function RecordPage() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // 録音された音声のURL

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">収録画面</h1>
      
      {/* 録音ボタン */}
      <RecordButton setAudioUrl={setAudioUrl} />

      {/* 録音された音声を再生 */}
      <AudioRecorder audioUrl={audioUrl} />
    </div>
  );
}
