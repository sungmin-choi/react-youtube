import React, { memo } from 'react';
import styles from './video_item.module.css';
const VideoItem = memo(({video:{snippet},onClickVideo,video,display}) =>{
    const displayType = display==='list' ? styles.list:styles.grid;
    const handleClick=()=>{
        onClickVideo(video);
    }
    return(
        <div className={`${styles.videoItem} ${displayType}`} onClick={handleClick}>
            <img className={styles.thumnails} src={`${snippet.thumbnails.medium.url}`} alt="video thumbnail"/>
            <div className={styles.spanBox}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channelTitle}>{snippet.channelTitle}</p>
            </div>

        </div>
    );
}

)

export default VideoItem;