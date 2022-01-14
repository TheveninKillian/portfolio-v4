/* eslint-disable vue/html-self-closing */
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { width } = useWindowSize()

const navActive = ref(false)
const borderSelected = ref('home')
</script>

<template>
  <header>
    <p>Killian Thevenin</p>

    <div class="naviguated">
      <div v-if="width <= 1200">
        <Icon icon="ci:hamburger" @click="navActive = !navActive" />
      </div>

      <nav :class="{ active: navActive }" @click="navActive = !navActive">
        <ul>
          <router-link to="/">
            <li :class="{ activeBorder: borderSelected === 'home' }" @click="borderSelected = 'home'">
              Accueil
            </li>
          </router-link>

          <router-link to="/portfolio">
            <li :class="{ activeBorder: borderSelected === 'portfolio' }" @click="borderSelected = 'portfolio'">
              Portfolio
            </li>
          </router-link>
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
  align-items: center;

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
    left: -100%;

    height: 100vh;
    width: 100%;

    transition: left .5s;

    ul{
      width: 70%;
      height: 100vh;

      background-color: $color-background;

      @include breakpoint(sm){
        width: 30%;
      }

      @include breakpoint(lg){
        display: flex;
        align-items: center;

        height: auto;
        width: auto;
      }

      a{
        color: $color-text;
        text-decoration: none;
      }

      .router-link-active{
        color: $color-top;
      }

      li{
        padding: 20px 0;

        font-size: $h3-mobile;
        text-align: center;

        @include breakpoint(lg){
          margin-left: 15px;
          padding: 10px;
        }
      }

      .activeBorder{
        position: relative;

        border: 2px solid $color-top;

        &::before, &::after{
          content: '';
          position: absolute;
          left: 50%;

          height: 2px;
          width: 50%;

          transform: translateX(-50%);

          background-color: $color-background;
        }

        &::before{
          top: -2px;
        }

        &::after{
          bottom: -2px;
        }

        @include breakpoint(lg){
          border: none;

          text-decoration: underline;

          &::before, &::after{
            display: none;
          }
        }
      }
    }

    @include breakpoint(sm){
      left: -30%;
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
