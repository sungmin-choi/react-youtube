import React from 'react';
import Iframe from 'react-iframe';
import styles from './video_player.module.css'
const VideoPlayer = ({video}) =>{
    return(
        <div className={styles.videoPlayer}>
        <Iframe id="player" type="text/html"className={styles.video}
                src={`http://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1&origin=http://example.com`}
                frameBorder="0" ></Iframe>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.description}>{video.snippet.description}</p>
        </div>
    )


}

export default VideoPlayer;