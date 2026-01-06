// VideoProcessor code

import React, { useState, useRef } from 'react';
import { DubbingStatus, DubbingTask } from '../types';
import { geminiService, decodeBase64, decodeAudioDataManual } from '../services/geminiService';

const VideoProcessor: React.FC = () => {
  const [task, setTask] = useState<DubbingTask | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoUrlInput, setVideoUrlInput] = useState<string>('');
  const [voice, setVoice] = useState<string>('Kore');
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const initAudio = () => {
    if (typeof window !== 'undefined' && !audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(blob);
    });
  };

  const audioBufferToWav = (buffer: AudioBuffer): ArrayBuffer => {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2 + 44;
    const bufferArray = new ArrayBuffer(length);
    return bufferArray;
  };

  return (
    <div>
      <h2>Video Processor</h2>
      <p>Dubblash komponenti tayyor</p>
    </div>
  );
};

export default VideoProcessor;
