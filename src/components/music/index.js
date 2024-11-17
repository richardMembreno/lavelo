import React, {useRef} from "react";
import { Button } from "react-bootstrap";

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    const handlePlayMusic = () => {
        if(audioRef.current){
            audioRef.current.play().catch(error => {
                console.error('Error al reproducir la cancion', error);
            });
        } 
    };

    return(
        <div>
            <audio ref={audioRef}>
            <source src="../../music/Maluma_ADMV.mp3" type="audio/mp3" />
            </audio>
            <Button onClick={handlePlayMusic}>Reproducir cancion</Button>
        </div>
    );
};
export default BackgroundMusic;