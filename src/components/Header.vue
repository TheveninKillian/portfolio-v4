<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { width } = useWindowSize()

const navActive = ref(false)
</script>

<template>
  <header>
    <p>Killian Thevenin</p>

    <div class="naviguated">
      <div v-if="width <= 992">
        <Icon icon="ci:hamburger" @click="navActive = !navActive" />
      </div>

      <nav :class="{ active: navActive }">
        <ul>
          <li>
            Accueil
          </li>

          <li>
            Portfolio
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

header{
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;

  padding-top: $marge-all-min;
  padding-bottom: $marge-all-min;

  background-color: $color-background;

  @include breakpoint(lg){
    padding-top: $marge-all-max;
    padding-bottom: $marge-all-max;
  }

  p{
    font-size: $h3-mobile;
    font-weight: bold;

    @include breakpoint(sm){
      font-size: $h3-tablet;
    }
    @include breakpoint(lg){
      font-size: $h3-desktop;
    }
  }
}

.naviguated{
  svg{
    font-size: $h2-mobile;

    @include breakpoint(sm){
      font-size: $h2-tablet;
    }
  }

  nav{
    position: fixed;
    top: 0;
    left: -70%;

    height: 100vh;
    width: 70%;

    background-color: $color-background;

    transition: left .3s;

    @include breakpoint(sm){
      left: -30%;

      width: 30%;
    }

    @include breakpoint(lg){
      position: inherit;

      height: auto;
      width: auto;
    }

    &.active{
      left: 0;
    }
  }
}
</style>
