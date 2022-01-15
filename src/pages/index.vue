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

  <hr>

  <section class="about-skills">
    <div class="about">
      <h2>A propos de moi</h2>

      <div class="about-wrapper">
        <p>Développeur front-end autodidacte depuis 5 ans maintenant, je suis issus de formation OpenClassrooms et Freecodecamp. J'ai obtenu plusieurs certifications dans mon domaine.</p>
        <p>Je suis spécialisé dans la création de site web et j'ai pour objectif de pouvoir réaliser des applications multiplateforme (mobile et desktop).</p>
        <p>Mon but est de vous trouver une solution pour optimiser mon travail un maximum et rendre du contenu qualitatif.</p>
        <p>Je réalise une veille constante sur les languages, librairies et outils de ma stack technique, ce qui fait que je suis à jour sur les nouveautés. Je suis aussi prêt à sortir de ma zone de confort et à apprendre de nouvelles choses.</p>
      </div>
    </div>

    <div class="skills">
      <h2>Mes compétences</h2>

      <div class="skills-wrapper">
        <div>1</div>
      </div>
    </div>
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

.about-skills{
  display: flex;
  flex-direction: column;

  @include breakpoint(lg){
    flex-direction: row;
  }
}

.about{
  @include breakpoint(lg){
    margin-left: $marge-all-min;
    margin-right: $marge-all-min;
    width: 50%;
  }

  &-wrapper{
    margin-top: $marge-all-min;
    margin-bottom: $marge-all-min;

    @include breakpoint(lg){
      margin-top: $marge-all-max;
      margin-bottom: $marge-all-max;
    }

    p{
      margin-bottom: 15px;
    }
  }
}

.skills{
  @include breakpoint(lg){
    margin-left: $marge-all-min;
    margin-right: $marge-all-min;
    width: 50%;
  }

  &-wrapper{
    margin-top: $marge-all-min;
    margin-bottom: $marge-all-min;

    @include breakpoint(lg){
      margin-top: $marge-all-max;
      margin-bottom: $marge-all-max;
    }
  }
}
</style>
