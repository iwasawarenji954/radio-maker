"use client";

import React, { useState } from 'react';
import Timer from './Timer'; // Timerコンポーネントをインポート

const RecordButton: React.FC = () => {
  const [recordingState, setRecordingState] = useState<"stopped" | "recording" | "paused">("stopped");
  const [resetTimer, setResetTimer] = useState(false);

  // 録音開始処理
  const handleStartRecording = () => {
    setResetTimer(true); // タイマーをリセット
    setRecordingState("recording");
    setTimeout(() => setResetTimer(false), 100); // タイマーリセット後にフラグを解除
  };

  // 録音停止処理
  const handleStopRecording = () => {
    setRecordingState("stopped");
  };

  // 録音一時停止処理
  const handlePauseRecording = () => {
    setRecordingState("paused");
  };

  // 録音再開処理
  const handleResumeRecording = () => {
    setRecordingState("recording");
  };

  return (
    <div>
      {/* 録音状態に応じたボタン表示 */}
      {recordingState === "stopped" && (
        <button onClick={handleStartRecording} className="p-4 bg-green-500 text-white">
          録音開始
        </button>
      )}
      {recordingState === "recording" && (
        <>
          <button onClick={handlePauseRecording} className="p-4 bg-yellow-500 text-white mr-2">
            一時停止
          </button>
          <button onClick={handleStopRecording} className="p-4 bg-red-500 text-white">
            録音停止
          </button>
        </>
      )}
      {recordingState === "paused" && (
        <>
          <button onClick={handleResumeRecording} className="p-4 bg-blue-500 text-white mr-2">
            収録再開
          </button>
          <button onClick={handleStopRecording} className="p-4 bg-red-500 text-white">
            録音停止
          </button>
        </>
      )}

      {/* タイマーの表示 */}
      <Timer isRecording={recordingState === "recording"} reset={resetTimer} />
    </div>
  );
};

export default RecordButton;
