<template>
  <div>
    <div class="maindiv dark:bg-gray-800">      
      <Header/>
      <div>Test</div> 
    </div>  
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData ({ params }) {
    const message = await axios.get('https://api.github.com/repos/prasanthsasikumar/personal-music-streaming/git/trees/master?recursive=1')
    var songs = [];
    message.data.tree.forEach(element => {
      if(element.path.startsWith('static/songs/')){
        var songName = element.path.slice(element.path.lastIndexOf('/') + 1)
        var song = {};
        song.title = songName.slice(songName.lastIndexOf('-')+1)
        song.artist = songName.slice(0, songName.lastIndexOf('-')+1)
        song.src = "songs/"+ songName;
        songs.push(song);
      }
    });
    return { songs }
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
    }
  },
  methods: {
    
  }
}
</script>
