import React, {useRef, useState} from "react";
import cancion from '../../music/Maluma_ADMV.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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

    console.log('URL del audio:', cancion);

    return(
        <div>
            <audio ref={audioRef} src={cancion} />
            <button onClick={handlePlayMusic} disabled={isPlaying}>Reproducir</button>
            <button onClick={handlePauseMusic} disabled={!isPlaying}>Pausar</button>
        </div>
    );
};
export default BackgroundMusic;