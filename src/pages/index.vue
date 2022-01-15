<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { width } = useWindowSize()
</script>

<template>
  <section>
    <h1>
      Développeur front-end,<br v-if="width < 500">
      <img class="letter-img" src="https://res.cloudinary.com/dbfzyht7k/image/upload/v1636387765/gmn4cvujyng6ngm5oeei.png" alt="logo vue js">ue.js
    </h1>

    <button>Contactez moi <Icon icon="akar-icons:arrow-down" /></button>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

h1{
  margin-bottom: 15px;

  @include breakpoint(md){
    margin-bottom: 25px;
  }
}

.letter-img {
  display: inline-block;

  width: 30px;

  @include breakpoint(sm){
    width: 50px;
  }
}

button {
  svg{
    margin-left: 5px;
  }
}
</style>
