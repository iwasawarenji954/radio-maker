"use client";

import React from 'react';

interface AudioRecorderProps {
  audioUrl: string | null; // 録音された音声データのURLを受け取る
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ audioUrl }) => {
  return (
    <div>
      {audioUrl ? (
        <div className="mt-4">
          <h2 className="text-xl">録音した音声:</h2>
          <audio controls src={audioUrl}></audio> {/* 音声再生コントローラ */}
        </div>
      ) : (
        <p>録音された音声はありません。</p>
      )}
    </div>
  );
};

export default AudioRecorder;
