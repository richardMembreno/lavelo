import React, {useEffect, useRef} from "react";

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return(
        <div>
            <audio ref={audioRef} loop>
                <source src="../../music/Maluma_ADMV.mp3" type="audio/mp3"/>
            </audio>
        </div>
    );
};
export default BackgroundMusic;