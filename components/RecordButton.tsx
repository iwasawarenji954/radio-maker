"use client";

import React, { useState, useRef } from 'react';
import Timer from './Timer';

interface RecordButtonProps {
  setAudioUrl: (url: string | null) => void; // 録音した音声データのURLを渡す関数
}

const RecordButton: React.FC<RecordButtonProps> = ({ setAudioUrl }) => {
  const [recordingState, setRecordingState] = useState<"stopped" | "recording" | "paused">("stopped");
  const [resetTimer, setResetTimer] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]); // 録音データのチャンク

  const handleStartRecording = async () => {
    setResetTimer(true);
    setTimeout(() => setResetTimer(false), 0);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];
    
    mediaRecorder.start();
    setRecordingState("recording");

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl); // 録音データのURLを渡す
    };
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecordingState("stopped");
  };

  const handlePauseRecording = () => {
    mediaRecorderRef.current?.pause();
    setRecordingState("paused");
  };

  const handleResumeRecording = () => {
    mediaRecorderRef.current?.resume();
    setRecordingState("recording");
  };

  return (
    <div>
      {recordingState === "stopped" ? (
        <button onClick={handleStartRecording} className="p-4 bg-green-500 text-white">録音開始</button>
      ) : recordingState === "recording" ? (
        <>
          <button onClick={handlePauseRecording} className="p-4 bg-yellow-500 text-white mr-2">一時停止</button>
          <button onClick={handleStopRecording} className="p-4 bg-red-500 text-white">録音停止</button>
        </>
      ) : (
        <>
          <button onClick={handleResumeRecording} className="p-4 bg-blue-500 text-white mr-2">収録再開</button>
          <button onClick={handleStopRecording} className="p-4 bg-red-500 text-white">録音停止</button>
        </>
      )}

      <Timer isRecording={recordingState === "recording"} reset={resetTimer} />
    </div>
  );
};

export default RecordButton;
