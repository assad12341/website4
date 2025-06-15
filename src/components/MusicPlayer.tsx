import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: '1',
      title: 'Lofi Dreams',
      artist: 'MatchaOS',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    },
    {
      id: '2',
      title: 'Soft Hearts',
      artist: 'MatchaOS',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTrackData = tracks[currentTrack];

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 w-72 border border-pink-200">
      <audio ref={audioRef} src={currentTrackData?.url} />
      
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">🎵</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-800 truncate text-sm">
            {currentTrackData?.title}
          </p>
          <p className="text-gray-500 text-xs truncate">
            {currentTrackData?.artist}
          </p>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
          
          <button
            onClick={handleNext}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <SkipForward className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
        <span>{formatTime(currentTime)}</span>
        <div className="flex-1 bg-gray-200 rounded-full h-1">
          <div 
            className="bg-pink-500 h-1 rounded-full transition-all duration-100"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;