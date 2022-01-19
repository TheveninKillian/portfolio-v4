<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { width } = useWindowSize()
</script>

<template>
  <section data-aos="fade-down">
    <h1>
      Développeur front-end,<br v-if="width < 500">
      <img class="letter-img" src="https://res.cloudinary.com/dbfzyht7k/image/upload/v1636387765/gmn4cvujyng6ngm5oeei.png" alt="logo vue js">ue.js
    </h1>

    <button>
      <a href="#contact">
        Contactez moi <Icon icon="akar-icons:arrow-down" />
      </a>
    </button>
  </section>

  <hr>

  <section class="about-skills">
    <div class="about" data-aos="fade-right">
      <h2>A propos de moi</h2>

      <div class="about-wrapper">
        <p>Dans le milieu du web en autodidacte depuis 2017, j'ai obtenu plusieurs certifications dans mon domaine grâce aux formations OpenClassrooms et Freecodecamp. Je suis spécialisé dans la création du site web mais j'ai pour objectif d'apprendre aussi à réaliser des applications android/IOS et desktop.</p>

        <p>Mon but est de reproduire votre maquette en code de qualité pour rendre le tout agréable et dynamique à parcourir, tout en respectant les règles d'optimisation, de sécurité, d'accessibilité et de référencement.</p>

        <p>Je réalise une veille constante sur les languages, librairies et outils de ma stack technique, ce qui fait que je suis à jour sur les nouveautés. Je suis aussi prêt à sortir de ma zone de confort et à apprendre de nouvelles choses.</p>
      </div>
    </div>

    <div class="skills" data-aos="fade-left">
      <h2>Mes compétences</h2>

      <div class="skills-container">
        <div>
          <h3>La base du développement front-end</h3>

          <ul class="skills-wrapper">
            <li>
              <Icon icon="vscode-icons:file-type-html" />
              <span>HTML</span>
            </li>

            <li>
              <Icon icon="vscode-icons:file-type-css" />
              <span>CSS</span>
            </li>

            <li>
              <Icon icon="logos:javascript" />
              <span>Javascript</span>
            </li>

            <li>
              <Icon icon="logos:typescript-icon" />
              <span>Typescript</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Framework et outils</h3>

          <ul class="skills-wrapper">
            <li>
              <Icon icon="logos:vue" />
              <span>Vue</span>
            </li>

            <li>
              <Icon icon="logos:sass" />
              <span>SASS</span>
            </li>

            <li>
              <Icon icon="logos:git-icon" />
              <span>Git</span>
            </li>

            <li>
              <Icon icon="logos:vitejs" />
              <span>Vite</span>
            </li>

            <li>
              <Icon icon="codicon:terminal-cmd" color="white" />
              <span>CMD</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Design</h3>

          <ul class="skills-wrapper">
            <li>
              <Icon icon="grommet-icons:figma" />
              <span>Figma</span>
            </li>

            <li>
              <Icon icon="vscode-icons:file-type-photoshop" />
              <span>Photoshop</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <hr>

  <section id="contact" class="contact" data-aos="fade-up">
    <h2>Contact</h2>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
      m="t-5"
    >
      <input type="hidden" name="form-name" value="contact">

      <div>
        <input type="text" placeholder="Nom" required name="name">
        <input type="email" placeholder="Email" required name="email">
      </div>

      <textarea name="message" placeholder="Message" required />

      <input type="submit" value="Envoyer" cursor="pointer">
    </form>

    <div class="service">
      <h3>
        Micro-service
      </h3>

      <ul>
        <li>
          <a href="https://5euros.com/profil/killian85">5EUROS</a>
        </li>
        <li><a href="https://www.fiverr.com/killian_dev85">FIVERR</a></li>
      </ul>
    </div>

    <div class="social">
      <h3>
        Social
      </h3>

      <ul>
        <li><a href="https://github.com/TheveninKillian">GITHUB</a></li>
        <li><a href="https://twitter.com/Killian_Thvn">TWITTER</a></li>
      </ul>
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

  a{
    display: flex;
    align-items: center;

    color: $color-text;
  }

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

.about,
.skills{
  @include breakpoint(lg){
    margin-left: $marge-all-min;
    margin-right: $marge-all-min;
    width: 50%;
  }
}

.about{
  &-wrapper{
    margin-top: $marge-all-min;
    margin-bottom: $marge-all-max;

    @include breakpoint(lg){
      margin-top: $marge-all-max;
    }

    p{
      margin-bottom: 15px;
    }
  }
}

.skills{
  &-container{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    margin-top: $marge-all-min;
    margin-bottom: $marge-all-min;

    @include breakpoint(sm){
      grid-template-columns: 1fr 1fr;
    }

    @include breakpoint(lg){
      margin-top: $marge-all-max;
      margin-bottom: $marge-all-max;
    }

    div{
      padding: 15px 0;

      border: 2px solid $color-top;
      border-radius: 5px;

      text-align: center;

      &:nth-child(1){
        grid-column: 1;

        @include breakpoint(sm){
          grid-column: 1 / 3;
        }
      }

      &:nth-child(2){
        grid-row: 2;
      }

      &:nth-child(3){
        grid-row: 3;

        @include breakpoint(sm){
          grid-row: 2;
        }
      }
    }

    h3{
      margin-bottom: 15px;
    }
  }

  &-wrapper{
    display: flex;
    justify-content: center;

    li{
      display: flex;
      align-items: center;
      flex-direction: column;

      margin: 0 10px;

      svg{
        margin-bottom: 5px;

        font-size: $h2-tablet;

        @include breakpoint(lg){
          font-size: $h2-desktop;
        }
      }

      span{
        font-size: 12px;
      }
    }
  }
}

.contact{
  margin: auto;
  max-width: 600px;

  h2{
    margin-bottom: $marge-all-min;

    @include breakpoint(lg){
      margin-bottom: $marge-all-max;
    }
  }

  form{
    input, textarea{
      margin-bottom: 5px;
      padding: 10px;
    }

    div{
      @include breakpoint(sm){
        display: flex;
      }

      input[type=text]{
        @include breakpoint(sm){
          margin-right: 2.5px;
        }
      }

      input[type=email]{
        @include breakpoint(sm){
          margin-left: 2.5px;
        }
      }
    }

    input[type=text],
    input[type=email],
    textarea{
      width: 100%;

      background-color: #1D1E21;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: $color-text;

      font-weight: 500;
    }

    textarea{
      height: 100px;
      resize: vertical;
    }

    input[type=submit]{
      background-color: $color-background;
      border: 1px solid $color-top;
      color: $color-top;

      font-weight: bold;

      cursor: pointer;
      transition: .3s;

      &:hover{
        background-color: $color-top;
        color: $color-background;
      }
    }
  }
  .social,
  .service{
    margin-top: 1.75rem;

    font-weight: 500;

    ul{
      display: flex;

      li{
        margin-right: 10px;

        font-size: 13px;

        a{
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;

          transition: all .3s;

          &:hover{
            color: $color-top;
          }
        }
      }
    }
  }
}
</style>
