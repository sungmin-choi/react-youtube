
import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import VideoPlayer from './components/video_player/video_player';
import Navbar from './components/navbar/navbar';

function App({youtube}) {
  const [videos,setVideos]=useState([]);
  const [video,setVideo]=useState(null);
  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos=>setVideos(videos))

  },[youtube])

  const handleSearch=useCallback((query)=>{   
    youtube
      .search(query)
      .then(videos=>setVideos(videos))
    setVideo(null);
  },[youtube]);

  const handleClickVideo=(video)=>{
    let restVideo=videos.filter(ele=>ele!==video)
    setVideos([video,...restVideo]);
    setVideo(video);
  }

  const handleHome= useCallback(()=>{
    youtube
      .mostPopular()
      .then(videos=>setVideos(videos))
    setVideo(null);
  },[youtube]);
  return (
    <div className={styles.app}>
    <Navbar onHome={handleHome} onSearch={handleSearch}/>
    <section className={styles.content}>
      {video&& <div className={styles.detail}><VideoPlayer className={styles.videoPlayer} video={video}/></div>}
    <div className={styles.list}>
      <VideoList videos={videos} onClickVideo={handleClickVideo}
      display={video? 'list':'grid'}/>
      </div>
    
    </section>
    </div>
  );
}

export default App;
