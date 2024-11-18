import React, {useRef} from "react";
import Sectiontitle from '../section-title'
import './style.css';
import cancion from '../../music/Maluma_ADMV.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

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
                    <audio ref={audioRef} src={cancion} />
                    <div className="next-post">
                        <a href="#" onClick={handlePlayMusic}><span className="post-control-link">Reproducir</span></a>
                    </div>
                    <div className="next-post">
                        <a href="#" onClick={handlePauseMusic}><span className="post-control-link">Pausar</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BackgroundMusic;