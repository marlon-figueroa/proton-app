<template>
  <div class="vld-parent">
      <loading :active="load"
              />


  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    props:{
      load:{
        type:Boolean,
        default:true
      }
    },
      data() {
          return {


          }
      },
      components: {
          Loading
      },

  }
</script>
