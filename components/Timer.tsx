"use client";

import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  isRecording: boolean;
  reset: boolean;
}

const Timer: React.FC<TimerProps> = ({ isRecording, reset }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // タイマーをリセットする処理
    if (reset) {
      setSeconds(0);
    }
  }, [reset]);

  useEffect(() => {
    // 録音が開始されたらタイマーを動かす
    if (isRecording) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
      }
    } else {
      // 録音が停止または一時停止されたらタイマーを止める
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  // 秒数を h:mm:ss 形式にフォーマットする関数
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(1, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return <div className="text-xl">録音時間: {formatTime(seconds)}</div>;
};

export default Timer;
