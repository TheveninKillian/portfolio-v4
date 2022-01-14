<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<template>
  <header>
    <p>Killian Thevenin</p>

    <div>
      <div v-if="width <= 992">
        Button
      </div>

      <nav>
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

<style lang="scss">
@import '../styles/variables.scss';

header{
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;

  padding-top: $marge-all-min;
  padding-bottom: $marge-all-min;

  background-color: $color-background;
}

header p{
  font-size: $h3-mobile;
  font-weight: bold;
}
</style>
