<template>
  <div>
    <div class="maindiv dark:bg-gray-800">      
      <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500">
        <div class="absolute inset-0 pcb mix-blend-overlay"></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-x-0 bottom-0 w-full h-12 text-white md:h-32 lg:h-48 dark:text-gray-800">
            <polygon points="0,100 0,0 100,100" class="fill-current"></polygon>
        </svg>
        <Header/>
        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-16">            
          <div class="flex flex-col items-center text-white">
            <div class="relative mb-4 lg:mb-4 invisible lg:visible">
              <div class="relative z-10 w-full">
                  <!-- <div class="font-extrabold tracking-wide text-center text-purple-700 uppercase bg-white rounded-full shadow px-4 py-2 text-2xl">PSK</div> -->
              </div>
            </div>
            <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full" ><br></div>
            <div class="relative  mb-4 lg:mb-4">
              <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded-full"> </div>
              <div class="relative z-10 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-50 -50 400 400" class="fill-current"><path d="M37.7,138.9c0.4-0.5,0.7-1.3,0.7-1.9c0-8.6,0-17.1,0-25.7c0-1.2,0.4-1.7,1.6-1.7c0.8,0,1.7,0.2,2.5,0.2 c5,0.1,10,0.2,15,0.2c35.3,0,70.6-0.1,106-0.2c11.4,0,22.9-0.1,34.3-0.2c0.5,0,1.3-0.3,1.6-0.7c2.6-2.9,5.1-5.9,7.7-8.9 c16.7-19.4,33.4-38.7,50-58.1c7.1-8.3,14.3-16.5,21.4-24.8c0.3-0.4,0.6-1.1,0.5-1.6c0-0.2-0.9-0.5-1.4-0.5 c-6.6,0-13.3,0.2-19.9,0.2c-44.7,0-89.4-0.1-134.2-0.1c-15,0-30.1-0.1-45.1-0.1c-1.8,0-2,0.3-2,2c0,6.4,0,12.8,0,19.2 c0,2.8,0,2.8,2.7,2.8c3.8,0,7.7,0.1,11.5,0.1c43,0,85.9,0,128.9,0c0.7,0,1.4,0,2,0.1c0.5,0.1,1,0.4,1.2,0.8c0.7,1,0.3,3.9-0.5,4.8 c-10.8,12.3-21.5,24.6-32.3,36.9c-0.9,1.1-2.1,1.6-3.6,1.6c-14.6-0.1-29.1-0.1-43.7-0.1c-33.5,0-67,0-100.6,0c-0.4,0-0.7,0-1.1,0 c-1.8-0.2-2.7-1.2-2.7-2.9c0-15.9,0-31.8,0-47.6c0-5.4,0-10.8,0-16.2c0-1.5-0.3-1.7-1.8-1.6c-1,0.1-2,0.2-3,0.2 c-5.1,0-10.2-0.1-15.4-0.2c-1.4,0-1.5,0.2-1.4,1.5c0.1,1.4,0.2,2.7,0.2,4.1c0,22.6,0,45.1,0,67.7c0,17.8-0.1,35.6-0.1,53.4 c0,6.9,0,13.8,0,20.9c0.4-0.4,0.6-0.7,0.9-0.9C24.5,154.1,31.1,146.5,37.7,138.9z"/> <path d="M141.6,183.8c2-2.3,4-4.7,6.1-7.2c-0.7,0-1.2,0-1.7,0c-30.1,0-60.2,0-90.3,0c-0.4,0-0.7,0-1.1,0c-3-0.2-4.2-2.4-2.7-4.9 c0.4-0.7,0.9-1.4,1.5-2c2.6-3,5.2-6,7.7-9.1c3.5-4.4,6.9-8.8,10.4-13.2c0.9-1.1,2.1-1.5,3.5-1.5c2,0.1,3.9,0.4,5.9,0.4 c7.8,0.1,15.7,0.1,23.5,0.1c22-0.1,43.9-0.2,65.9-0.3c0.8,0,1.2-0.3,1.7-0.8c7-8.5,14-17.1,21-25.6c0.5-0.6,0.7-1.2,1.2-2 c-2.3,0-4.3,0-6.4,0c-28.3,0.2-56.5,0.3-84.8,0.5c-11.5,0.1-23,0.1-34.4,0.2c-0.9,0-1.7,0-2.4,0.9c-15.9,18.6-31.8,37.2-47.6,55.9 c-0.4,0.5-0.7,1.3-0.7,1.9c0,7.4,0,14.9,0,22.3c0,0.4,0,0.8,0.1,1.3c0.5,0,1,0,1.5,0c20.4,0,40.9,0,61.3,0c2.9,0,5.8,0,8.8,0 c2.3,0,3.2,1.2,2.2,3.3c-0.6,1.2-1.3,2.4-2.1,3.5c-9.8,11.6-19.7,23.2-29.5,34.7c-1.4,1.6-3.1,2.6-5.2,2.9 c-1.6,0.2-3.2,0.3-4.8,0.2c-10.3-0.1-20.6-0.1-30.8-0.2c-0.4,0-0.8,0-1.3,0c0,9,0,17.9,0,26.8c0.3,0,0.5,0.1,0.8,0.1 c15.6,0,31.3,0,46.9,0c0.4,0,1-0.3,1.3-0.6c9.5-11,19-22.1,28.4-33.1C110.6,220,126.1,201.9,141.6,183.8z"/> <path d="M196.7,132.9c-13.4,17.8-26.8,35.4-40.1,53.1c0.3,0.4,0.6,0.8,0.8,1.1c21.2,27.7,42.3,55.4,63.5,83.1 c0.5,0.6,0.9,0.9,1.8,0.9c26.7,0,53.4,0,80,0c0.3,0,0.7,0,1.2-0.1C268.1,225,232.5,179,196.7,132.9z"/> <path d="M147.4,195.8c-19.5,25.1-39,50.1-58.5,75.3c19.9,0,39.6,0,59.5,0c-0.2-25.2-0.5-50.2-0.7-75.3 C147.6,195.8,147.5,195.8,147.4,195.8z"/></svg>
              </div>
            </div>
            <div class="flex flex-col items-center pb-8 text-center lg:text-left lg:items-start">   
              <div class="lg:hidden" ><br><br></div>          
              <div class="whitespace-pre-line lg:text-lg lg:mt-4 text-pink-50 text-center">
              
              <audio v-bind:src="current.src" preload="auto" autoplay ref="audioPlayer" />
              <div class="bg-transparent shadow-lg rounded-lg w-screen" >
                <div class="flex">
                  <div class="w-full p-8">
                    <div class="flex justify-between">
                      <div>
                        <h3 class="text-2xl text-grey-darkest font-medium">A Sky Full of Stars</h3>
                        <p class="text-sm text-grey mt-1">Ghost Stories</p>
                      </div>
                      <button class="text-red-lighter">
                        <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
                      </button>
                    </div>
                    <div class="flex justify-between items-center mt-8">
                      <button class="text-grey-darker">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
                      </button>
                      <button class="text-grey-darker" @click="prev">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
                      </button>
                      <button class="text-white p-8 rounded-full bg-red-light shadow-lg" v-if="!isPlaying" @click="play">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="st0" d="M14.4,8.7l-7.4-5c-0.2-0.2-0.6-0.2-0.8,0C6,3.8,5.8,4.1,5.8,4.4v10c0,0.3,0.2,0.6,0.4,0.7 c0.3,0.1,0.6,0.1,0.8,0l7.4-5c0.2-0.2,0.4-0.4,0.4-0.7C14.8,9.2,14.7,8.9,14.4,8.7z"/></svg>
                      </button>
                      <button class="text-white p-8 rounded-full bg-red-light shadow-lg" v-else @click="pause">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
                      </button>
                      <button class="text-grey-darker" @click="next">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
                      </button>
                      <button class="text-grey-darker">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mx-8 py-4">
                  <div class="flex justify-between text-sm text-grey-darker">
                    <p>0:40</p>
                    <p>4:20</p>
                  </div>
                  <div class="mt-1">
                    <div class="h-1 bg-grey-dark rounded-full">
                      <div class="w-1/5 h-1 bg-red-light rounded-full relative">
                        <span class="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              </div>
            </div>
          </div>   
        </div>
        <br>
        <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full" ><br><br></div>
      </div>

      <!-- <div class="flex flex-col gap-4 lg:gap-12 lg:grid lg:grid-cols-3">
        <div class="lg:col-span-2">
          <div class="relative ">
              <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded"></div>
              <div class="relative z-10 mx-auto">
                  <nuxt-img src="/about.jpg" width="1200" height="700" class="w-full mt-2 rounded shadow-xl md:mt-4 bg-gradient-to-br from-gray-800 to-gray-700"/>
              </div>
          </div> 
        </div>
        <div class="flex flex-col items-center pb-8 text-center lg:text-left lg:items-start">
          <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full" ><br><br><br></div>              
          <div class="whitespace-pre-line lg:text-lg lg:mt-4 text-pink-50"> {{post.abstract}} </div>
        </div>
      </div> -->

      <!-- Body Part -->
      <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex flex-col-reverse justify-between mt-8 lg:space-x-24 lg:flex-row lg:mt-16">
        
        <!--Left side navigation. Disappars on mobile -->
        <div class="relative">
          <div class="p-4 py-8 -mx-4 rounded md:p-8 lg:p-4 md:-mx-8 lg:py-4 lg:mx-0 bg-gray-50 dark:bg-gray-900 sticky lg:mt-0 top-20 lg:max-w-80 lg:w-80">            
            <nuxt-img src="/aboutblack.svg" width="1200" height="700" class="w-full mt-2 rounded-full shadow-xl md:mt-4 bg-gradient-to-br from-gray-800 to-gray-700"/>
            <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Github</h3> 
            <a href="https://github.com/prasanthsasikumar" target="_blank" class="flex items-stretch overflow-hidden text-sm text-white text-gray-500 bg-gray-900 rounded dark:bg-gray-100 mb-4 md:mb-8">
                <div class="flex items-center justify-center p-4 text-gray-300 bg-gray-800 dark:bg-white dark:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"> </path> </svg>
                </div>
                <div class="p-4 text-gray-300 dark:text-gray-500"> Explore my projects <span class="text-white dark:text-gray-700"> on GitHub.</span></div>
            </a>
                      
            <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Checkout my Tags</h3>
            <div class="flex flex-wrap text-xs font-bold uppercase mb-4 md:mb-8">
              <NuxtLink :to="`/tag/MagicMirror`" :href="`tag/MagicMirror`" class="block px-2 py-1 mb-2 mr-2 text-purple-400 transition-colors duration-100 bg-purple-500 rounded-sm whitespace-nowrap hover:bg-pink-500 hover:text-pink-300">
                <span class="-mr-px">#</span> <span class="text-white">MagicMirror</span>
              </NuxtLink>
              <NuxtLink :to="`/tag/AugmentedReality`" :href="`tag/AugmentedReality`" class="block px-2 py-1 mb-2 mr-2 text-purple-400 transition-colors duration-100 bg-purple-500 rounded-sm whitespace-nowrap hover:bg-pink-500 hover:text-pink-300">
                <span class="-mr-px">#</span> <span class="text-white">Augmented Reality</span>
              </NuxtLink>
            </div>        
          </div>
        </div> 

         <article class="min-w-0 prose prose-lg prose-pink max-w-none dark:prose-dark dark:text-white">
          <section class="playlist px-8 py-8">
            <h3 class="text-black text-lg text-center">Playlist</h3>
            <button v-for="song in songs" :key="song.src" @click="play(song)" class="block w-full cursor-pointer" :class="(song.src == current.src) ? 'text-white bg-gradient-to-br from-gray-900 via-purple-600 to-pink-400' : 'song'">
              {{ song.title }} - {{ song.artist }}
            </button>
          </section>
          
          <p>Explore the github song repo at <a href="https://github.com/prasanthsasikumar/prasanthsasikumar">https://github.com/prasanthsasikumar</a>. Use this app to add songs to this repo</p>
          <br>
        </article> 
        
      </div>
    </div>
    <Footer/>    
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';
export default {
  head() {
    return {
      title: 'My Music',
      meta: [
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'XR Developer | HCI Researcher' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://prasanthsasikumar.com/about.svg`,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'XR Developer | HCI Researcher.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://prasanthsasikumar.com/about.svg`,
        },
      ],
    }
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Grateful',
          artist: 'Neffex',
          src: 'neffex-grateful.mp3'
        },
        {
          title: 'Invincible',
          artist: 'Deaf Kev',
          src: 'deaf-kev-invincible.mp3'
        }
      ],
    }
  },
  methods: {
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;

        this.$refs.audioPlayer.src = this.current.src;
      }

      this.$refs.audioPlayer.play();
      this.$refs.audioPlayer.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }

        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.$refs.audioPlayer.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    }
  },
  mounted: function(){
    this.current = this.songs[this.index];
    this.$refs.audioPlayer.src = this.current.src;
    this.$refs.audioPlayer.pause();
    mixpanel.init('1950ef41a915ca73e07757bc46f92ddc', {api_host: "https://proxy-rnqtvd4zrq-uc.a.run.app", debug: true}); 
    mixpanel.track('music')
  }
}
</script>
<style scoped>
.pcb {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='500' height='500'%3E%3Cpath fill='%23fff' fill-opacity='.05' d='M44.1 224a5 5 0 110 2H0v-2h44.1zm160 48a5 5 0 110 2H82v-2h122.1zm57.8-46a5 5 0 110-2H304v2h-42.1zm0 16a5 5 0 110-2H304v2h-42.1zm6.2-114a5 5 0 110 2h-86.2a5 5 0 110-2h86.2zm-256-48a5 5 0 110 2H0v-2h12.1zm185.8 34a5 5 0 110-2h86.2a5 5 0 110 2h-86.2zM258 12.1a5 5 0 11-2 0V0h2v12.1zm-64 208a5 5 0 11-2 0v-54.2a5 5 0 112 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 112 0zm16 16V64h46v2h-48V37.9a5 5 0 112 0zm-128 96V208h16v12.1a5 5 0 11-2 0V210h-16v-76.1a5 5 0 112 0zm-5.9-21.9a5 5 0 110 2H114v48H85.9a5 5 0 110-2H112v-48h12.1zm-6.2 130a5 5 0 110-2H176v-74.1a5 5 0 112 0V242h-60.1zm-16-64a5 5 0 110-2H114v48h10.1a5 5 0 110 2H112v-48h-10.1zM66 284.1a5 5 0 11-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 110 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 110-2H274v44.1a5 5 0 11-2 0V146h-10.1zm-64 96a5 5 0 110-2H208v-80h16v-14h-42.1a5 5 0 110-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 110 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 110-2H96v-42.1a5 5 0 112 0zM53.9 34a5 5 0 110-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 110-2H80V64h32V37.9a5 5 0 112 0zM101.9 82a5 5 0 110-2H128V37.9a5 5 0 112 0V82h-28.1zm16-64a5 5 0 110-2H146v44.1a5 5 0 11-2 0V18h-26.1zm102.2 270a5 5 0 110 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 112 0zM53.9 18a5 5 0 110-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 110-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 01-9.8-2h2.07a3 3 0 105.66 0H178v34h-18V21.9a5 5 0 112 0V32h14V2h-58.1zm0 96a5 5 0 110-2H137l32-32h39V21.9a5 5 0 112 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 11-2 0v-76.51L175.59 80H224V21.9a5 5 0 112 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 11-2 0v-99.51L184.59 96H300.1a5 5 0 013.9-3.9v2.07a3 3 0 000 5.66v2.07a5 5 0 01-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 11-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 110 2H0v-65.41l48-48V53.9a5 5 0 112 0zm-16 16v19.51l-34 34v-2.82l32-32V69.9a5 5 0 112 0zM12.1 32a5 5 0 110 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 110-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 110-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 110-2H64v-22.59L40.59 194H21.9a5 5 0 110-2h19.51L66 216.59V242H53.9zm150.2 14a5 5 0 110 2H96v-56.6L56.6 162H37.9a5 5 0 110-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 110-2H80v-46.59L48.59 178H21.9a5 5 0 110-2h27.51L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 013.9 3.9H3.83A3 3 0 000 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 016 97a5 5 0 01-6 4.9v-2.07a3 3 0 100-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 00-5.66 0h-2.07a5 5 0 019.8 0zM5.9 0A5.02 5.02 0 010 5.9V3.83A3 3 0 003.83 0H5.9zm294.2 0h2.07A3 3 0 00304 3.83V5.9a5 5 0 01-3.9-5.9zm3.9 300.1v2.07a3 3 0 00-1.83 1.83h-2.07a5 5 0 013.9-3.9zM97 100a3 3 0 100-6 3 3 0 000 6zm0-16a3 3 0 100-6 3 3 0 000 6zm16 16a3 3 0 100-6 3 3 0 000 6zm16 16a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm-48 32a3 3 0 100-6 3 3 0 000 6zm16 16a3 3 0 100-6 3 3 0 000 6zm32 48a3 3 0 100-6 3 3 0 000 6zm-16 16a3 3 0 100-6 3 3 0 000 6zm32-16a3 3 0 100-6 3 3 0 000 6zm0-32a3 3 0 100-6 3 3 0 000 6zm16 32a3 3 0 100-6 3 3 0 000 6zm32 16a3 3 0 100-6 3 3 0 000 6zm0-16a3 3 0 100-6 3 3 0 000 6zm-16-64a3 3 0 100-6 3 3 0 000 6zm16 0a3 3 0 100-6 3 3 0 000 6zm16 96a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm16 16a3 3 0 100-6 3 3 0 000 6zm16-144a3 3 0 100-6 3 3 0 000 6zm0 32a3 3 0 100-6 3 3 0 000 6zm16-32a3 3 0 100-6 3 3 0 000 6zm16-16a3 3 0 100-6 3 3 0 000 6zm-96 0a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm16-32a3 3 0 100-6 3 3 0 000 6zm96 0a3 3 0 100-6 3 3 0 000 6zm-16-64a3 3 0 100-6 3 3 0 000 6zm16-16a3 3 0 100-6 3 3 0 000 6zm-32 0a3 3 0 100-6 3 3 0 000 6zm0-16a3 3 0 100-6 3 3 0 000 6zm-16 0a3 3 0 100-6 3 3 0 000 6zm-16 0a3 3 0 100-6 3 3 0 000 6zm-16 0a3 3 0 100-6 3 3 0 000 6zM49 36a3 3 0 100-6 3 3 0 000 6zm-32 0a3 3 0 100-6 3 3 0 000 6zm32 16a3 3 0 100-6 3 3 0 000 6zM33 68a3 3 0 100-6 3 3 0 000 6zm16-48a3 3 0 100-6 3 3 0 000 6zm0 240a3 3 0 100-6 3 3 0 000 6zm16 32a3 3 0 100-6 3 3 0 000 6zm-16-64a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm-16-32a3 3 0 100-6 3 3 0 000 6zm80-176a3 3 0 100-6 3 3 0 000 6zm16 0a3 3 0 100-6 3 3 0 000 6zm-16-16a3 3 0 100-6 3 3 0 000 6zm32 48a3 3 0 100-6 3 3 0 000 6zm16-16a3 3 0 100-6 3 3 0 000 6zm0-32a3 3 0 100-6 3 3 0 000 6zm112 176a3 3 0 100-6 3 3 0 000 6zm-16 16a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zM17 180a3 3 0 100-6 3 3 0 000 6zm0 16a3 3 0 100-6 3 3 0 000 6zm0-32a3 3 0 100-6 3 3 0 000 6zm16 0a3 3 0 100-6 3 3 0 000 6zM17 84a3 3 0 100-6 3 3 0 000 6zm32 64a3 3 0 100-6 3 3 0 000 6zm16-16a3 3 0 100-6 3 3 0 000 6z'/%3E%3C/svg%3E");
}
</style>
<style>

/* The actual popup */
.popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: relative;
  z-index: 1;
  bottom: 125%;
}

/* Popup arrow */
.popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;} 
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
