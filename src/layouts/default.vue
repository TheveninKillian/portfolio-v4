<template>
  <main>
    <Header />

    <router-view />

    <hr>

    <footer>
      <p>Design et développement : Killian</p>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

footer{
  padding-top: $marge-section-min;
  padding-bottom: $marge-section-min;

  @include breakpoint(lg){
    padding-top: $marge-section-max;
    padding-bottom: $marge-section-max;
  }

  p{
    color: $color-top;
    text-align: center;
  }
}
</style>
