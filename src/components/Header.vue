<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { width } = useWindowSize()

const navActive = ref<Boolean>(false)
</script>

<template>
  <header>
    <p>Killian Thevenin</p>

    <div class="naviguated">
      <div v-if="width < 992" class="container-icon">
        <transition name="turn">
          <Icon v-if="!navActive" icon="ci:hamburger" @click="navActive = !navActive" />
          <Icon v-else icon="gridicons:cross" @click="navActive = !navActive" />
        </transition>
      </div>

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
  .container-icon{
    position: relative;

    svg{
      font-size: $h2-mobile;

      @include breakpoint(sm){
        font-size: $h2-tablet;
      }

      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  nav{
    position: fixed;
    top: 58px;
    left: 0;

    max-height: 0px;
    width: 100%;

    border-bottom: 1px solid $color-top;

    overflow: hidden;
    transition: all .5s;

    @include breakpoint(md){
      position: inherit;

      max-height: inherit;
      width: auto;

      border-bottom: none;
    }

    ul{
      padding-bottom: 15px;

      background-color: $color-background;

      @include breakpoint(md){
        display: flex;
        align-items: center;

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
        margin-left: 15px;
        padding: 5px 0;

        font-size: $text-mobile;

        @include breakpoint(md){
          padding: 0;

          font-size: $text-desktop;
        }
      }
    }

    &.active{
      max-height: 100px;
    }
  }
}
</style>
