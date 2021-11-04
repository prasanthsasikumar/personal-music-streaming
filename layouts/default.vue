<template>
  <div id="top" class="relative">
    <Nuxt />
    <transition name="fade">
    <button v-show="showScroll" v-on:click="scrollToElement({behavior: 'smooth'})" class="scrollbutton fixed bottom-0 right-0 z-40 flex items-center justify-center w-12 h-12 mb-4 mr-4 text-white rounded-full shadow-lg bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500 sm:mb-8 sm:mr-8 sm:w-16 sm:h-16 dark:border-2 dark:border-white"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 10.25L12 4.75L6.75 10.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.25V5.75"></path></svg></button>
    </transition>
  </div>
</template>

<script>
export default {
  methods:{
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.showScroll = top > 100
    },
    scrollToElement(options) {
      const el = this.$el.getElementsByClassName('container')[0];      
      if (el) {
        el.scrollIntoView(options);
      }
    }
  },
  data(){
    return {
      showScroll: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style scoped>
.fade-enter-active{
  transition: opacity .5s
}
.fade-leave-active {
  transform: translateY(1.25em);
}

.dark .scrollbutton{
  border-width: 2px;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0
}
</style>