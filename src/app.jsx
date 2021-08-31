
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';
const APIKEY="AIzaSyBDuoQSpRRxse1_nDwu-MT4_HDSzLJFfmI";

function App() {
  const [videos,setVideos]=useState([]);
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(()=>{

    const mostPopularUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${APIKEY}`;
    fetch(mostPopularUrl, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])

  const handleSearch=(search)=>{   
    const searchUrl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${APIKEY}`; 
    fetch(searchUrl, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }
  return (
    <div className={styles.app}>
    <Navbar onSearch={handleSearch}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
