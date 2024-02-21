<script>
import pop from './components/pop.vue';
import home from './views/home.vue';
import tsth from './components/tsth.vue';


export default {
  components: {
    home,
    tsth,
    pop,
    
  },
};
</script>

<template>  

    <div>
      <tsth />
    </div>
    <div>
      <router-view />
    </div>
    <div class="">
      <pop />
    </div>


</template>