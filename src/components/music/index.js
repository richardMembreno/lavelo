import React, {useRef, useState} from "react";

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioUrl = "https://docs.google.com/uc?export=download&id=1LMMFSarV43L-s2fNVlNudirKSEhKiuM6";

    const handlePlayMusic = () => {
        if(audioRef.current){
            audioRef.current.play()
            .then(() => { setIsPlaying(true); console.log('Reproduciendo música'); })
            .catch(error => { console.error('Error al reproducir la música:', error);});
        } 
    };

    const handlePauseMusic = () => { 
        if (audioRef.current)
        {
            audioRef.current.pause(); 
            setIsPlaying(false); 
            console.log('Música pausada');
        }
    };

    console.log('URL del audio:', audioUrl);

    return(
        <div>
            <audio ref={audioRef} src={audioUrl} />
            <button onClick={handlePlayMusic} disabled={isPlaying}>Reproducir</button>
            <button onClick={handlePauseMusic} disabled={!isPlaying}>Pausar</button>
        </div>
    );
};
export default BackgroundMusic;