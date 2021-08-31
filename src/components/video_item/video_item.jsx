import React from 'react';
import styles from './video_item.module.css';
const VideoItem = ({video:{snippet}}) =>{
    return(
        <div className={styles.videoItem}>
            <img className={styles.thumnails} src={`${snippet.thumbnails.medium.url}`} alt="video thumbnail"/>
            <div className={styles.spanBox}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channelTitle}>{snippet.channelTitle}</p>
            </div>

        </div>
    );
}

export default VideoItem;