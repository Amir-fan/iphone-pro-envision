
import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video
    }
  }, []);
  
  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      <video 
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </div>
  );
};

export default VideoBackground;
