
export enum DubbingStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  TRANSLATING = 'TRANSLATING',
  GENERATING_VOICE = 'GENERATING_VOICE',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface DubbingTask {
  id: string;
  videoUrl: string;
  originalName: string;
  status: DubbingStatus;
  progress: number;
  dubbedAudioUrl?: string;
  translation?: string;
  error?: string;
}

export interface VoiceOption {
  id: string;
  name: string;
  gender: 'male' | 'female';
}
