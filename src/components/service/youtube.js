import axios from "axios";
// 옛날 버전과 호환이 가능하고 가독성도 높일수있고 그래서 axios를 많이 사용한다
class Youtube{
    constructor(key){
        this.youtube=axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params:{key:key},
        });
    }
    async mostPopular(){
        const response = await this.youtube.get('videos',{
            params:{
                part:'snippet',
                chart:'mostPopular',
                maxResults:25,
            }
        });

        return response.data.items;
        // const mostPopularUrl=`/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;
        // try {
        //     const response = await fetch(mostPopularUrl, this.getRequestOptions);
        //     const result_1 = await response.json();
        //     return result_1.items;
        // } catch (error) {
        //     return console.log('error', error);
        // }

    }
    async search(query){
        const response = await this.youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:25,
                type:'video',
            }
        });

        const items=response.data.items.map(item=>({...item,id:item.id}));
        return items;
    //     const searchUrl=`/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`; 
    //     try {
    //         const response = await fetch(searchUrl, this.getRequestOptions);
    //         const result_1 = await response.json();
    //         const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    //         return items;
    //     } catch (error) {
    //         return console.log('error', error);
    //     }
     }
}

export default Youtube;