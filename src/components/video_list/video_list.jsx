import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'
const VideoList = (props) =>{
    const handleClickVideo=(video)=>{
        props.onClickVideo(video);
    }
    return(
            <div className={styles.videoList}>
            {
            props.videos.map(video=><VideoItem onClickVideo={handleClickVideo} key={video.id} video={video} display={props.display}/>)
            }
            </div>
    );
}

export default VideoList;