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
    const message = await axios.get('https://prasanthsasikumar.com/api/hello-world/')
    console.log(message.data.songs)
    return {  }
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
