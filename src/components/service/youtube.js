class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    async mostPopular(){
        const mostPopularUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;
        try {
            const response = await fetch(mostPopularUrl, this.getRequestOptions);
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }

    }
    async search(query){
        const searchUrl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`; 
        try {
            const response = await fetch(searchUrl, this.getRequestOptions);
            const result_1 = await response.json();
            const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
            return items;
        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube;