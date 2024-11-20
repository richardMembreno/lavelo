import React, {useEffect, useRef, useState} from "react";
import Sectiontitle from '../section-title'
import './style.css';
import cancion from '../../music/Maluma_ADMV.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => { const handleUserInteraction = () => { setUserInteracted(true); document.removeEventListener('click', handleUserInteraction); }; document.addEventListener('click', handleUserInteraction); return () => { document.removeEventListener('click', handleUserInteraction); }; },[]);

    useEffect(() => {
        if(audioRef.current){
            audioRef.current.play()
            .catch(error => { console.error('Error al reproducir la música:', error);});
        } 
    },[userInteracted]);

    const handlePlayMusic = () => {
        if(audioRef.current){
            audioRef.current.play()
            .catch(error => { console.error('Error al reproducir la música:', error);});
        } 
    };

    const handlePauseMusic = () => { 
        if (audioRef.current)
        {
            audioRef.current.pause(); 
        }
    };

    return(
        <div className="container">
            <Sectiontitle section={'Nuestra Canción'} />
            <div className="col-md-12">
                <div className="buttons-music">
                    <audio ref={audioRef} src={cancion} autoPlay/>
                    <div className="next-post">
                        <button href="/#" onClick={handlePlayMusic}><span className="post-control-link">Reproducir</span></button>
                    </div>
                    <div className="next-post">
                        <button href="/#" onClick={handlePauseMusic}><span className="post-control-link">Pausar</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BackgroundMusic;