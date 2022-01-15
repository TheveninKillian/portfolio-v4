/* eslint-disable vue/html-self-closing */
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
      <div v-if="width < 992">
        <Icon icon="ci:hamburger" @click="navActive = !navActive" />
      </div>

      <transition name="fade">
        <div v-if="navActive && width < 992" class="overlay" @click="navActive = !navActive" />
      </transition>

      <nav :class="{ active: navActive }">
        <ul>
          <router-link to="/" @click="navActive = !navActive">
            <li>
              Accueil
            </li>
          </router-link>

          <router-link to="/portfolio" @click="navActive = !navActive">
            <li>
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

  @include breakpoint(md){
    padding-top: $marge-all-max;
    padding-bottom: $marge-all-max;
  }

  p{
    font-size: $h3-mobile;
    font-weight: bold;

    @include breakpoint(sm){
      font-size: $h3-tablet;
    }
    @include breakpoint(md){
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
    width: 70%;

    transition: left .5s;

    @include breakpoint(xs){
        width: 30%;
      }

    @include breakpoint(md){
      position: inherit;

      height: auto;
      width: auto;
    }

    ul{
      height: 100vh;

      background-color: $color-background;

      @include breakpoint(md){
        display: flex;
        align-items: center;

        height: auto;
        width: auto;
      }

      a{
        color: $color-text;
        text-decoration: none;

        transition: color .5s;

        &:hover{
          color: $color-top;
        }
      }

      .router-link-active{
        color: $color-top;
      }

      li{
        padding: 20px 0;

        font-size: $h3-mobile;
        text-align: center;

        @include breakpoint(md){
          margin-left: 15px;
          padding: 0;
        }
      }
    }

    &.active{
      left: 0;
    }
  }
}

.overlay{
  position: absolute;
  top: 0;
  left: -15px;

  height: 100vh;
  width: 100vw;

  background-color: rgba(255, 255, 255, 0.1);
}
</style>
