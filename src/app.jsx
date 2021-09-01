
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';

function App({youtube}) {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos=>setVideos(videos))

  },[])

  const handleSearch=(query)=>{   
    youtube
      .search(query)
      .then(videos=>setVideos(videos))
  }
  return (
    <div className={styles.app}>
    <Navbar onSearch={handleSearch}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
