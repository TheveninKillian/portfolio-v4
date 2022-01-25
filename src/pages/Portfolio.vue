<script lang="ts" setup>
import json from '../assets/portfolio.json'

const position: string[] = ['left', 'top', 'right', 'bottom']

const randomPosition = (max: number): string => {
  const randomize: number = Math.floor(Math.random() * max)
  const positionName: string = position[randomize]
  return positionName
}
</script>

<template>
  <section>
    <h1 data-aos="fade-down">
      Portfolio
    </h1>

    <div class="portfolio-grid">
      <div v-for="(item, key) in json.portfolio" :key="item.name" class="portfolio-grid__wrapper" data-aos="flip-left" :data-aos-delay="key * 100">
        <div class="details">
          <h2>{{ item.name }}</h2>

          <p class="details-text">
            {{ item.description }}
          </p>

          <p>
            <span>Tech:</span> {{ item.technology }}
          </p>
        </div>

        <div class="content">
          <a :href="item.link">
            <div class="content-img">
              <img :src="item.img" :alt="`Image du projet ${item.name}`">
            </div>

            <div class="content-sub" :class="randomPosition(4)">
              <div class="content-sub__back" :style="{background: item.color.background}" />

              <div class="content-sub__infos" :style="{color: item.color.text}">
                Ouvrir
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

h1{
  margin-bottom: 30px;
}

h2, span{
  color: $color-top;
  text-decoration: none;
}
.portfolio-grid{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  @include breakpoint(sm){
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint(1440){
    grid-template-columns: repeat(3, 1fr);
  }

  &__wrapper{
    position: relative;

    overflow: hidden;

    a{
      color: #000;
    }
  }

  .details{
    &-text{
      display: flex;
      align-items: center;

      height: 100px;
    }
  }

  .content{
    position: relative;

    height: 300px;
    margin: 25px auto 0;
    width: 300px;

    border: 2px solid $color-top;
    border-radius: 10px;

    overflow: hidden;

    &:hover .content-img img{
      filter: blur(1px);
    }

    &:hover .left{
      left: 0;
    }

    &:hover .top{
      top: 0;
    }

    &:hover .right{
      right: 0;
    }

    &:hover .bottom{
      bottom: 0;
    }

    &-img{
      img{
        width: 100%;

        transition: all .5s;
      }
    }

    &-sub{
      position: absolute;

      width: 100%;
      height: 100%;

      text-align: center;

      transition: all .5s;

      &.left{
        top: 0;
        left: -100%;
      }

      &.top{
        top: -100%;
        left: 0;
      }

      &.right{
        top: 0;
        right: -100%;
      }

      &.bottom{
        bottom: -100%;
        left: 0;
      }

      &__back,
      &__infos{
        position: absolute;

        width: 100%;
        height: 100%;
      }

      &__back{
        opacity: .9;
      }

      &__infos{
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 28px;
        text-align: center;
      }

      span{
        font-size: 12px;

        @include breakpoint(xs){
          font-size: $text-mobile;
        }
      }

      p{
        position: absolute;
        bottom: 20px;
        left: 50%;

        width: 100%;

        font-size: $text-mobile;

        transform: translateX(-50%);

        @include breakpoint(lg){
          font-size: $text-tablet;
        }
      }
    }
  }
}
</style>
