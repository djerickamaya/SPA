import React, { useState, useRef } from 'react';

function Player() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="player">
            <audio ref={audioRef} src="URL-DE-TU-AUDIO.mp3" />
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => audioRef.current.currentTime -= 10}>
                Rewind 10s
            </button>
            <button onClick={() => audioRef.current.currentTime += 10}>
                Forward 10s
            </button>
        </div>
    );
}

export default Player;
