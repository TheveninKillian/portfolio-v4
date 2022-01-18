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
      <div v-for="(item, key) in json.portfolio" :key="item.name" class="portfolio-grid__wrapper" data-aos="flip-left" :data-aos-delay="key * 200">
        <a :href="item.link">
          <div class="content">
            <img :src="item.img" :alt="`Image du projet ${item.name}`">
          </div>

          <div class="sub-content" :class="randomPosition(4)" :style="{background: item.color}">
            <h3>{{ item.name }}</h3>
            <span>{{ item.type }}</span>
            <p>{{ item.technology }}</p>
          </div>
        </a>
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
.portfolio-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  @include breakpoint(sm){
    grid-template-columns: repeat(4, 1fr);
  }

  @include breakpoint(md){
    grid-template-columns: repeat(6, 1fr);
  }

  &__wrapper{
    position: relative;

    border: 1px solid $color-top;

    overflow: hidden;

    &::after{
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    a{
      color: #000;
    }

    .sub-content.left{
      top: 0;
      left: -100%;

      transition: left 0.5s;
    }

    .sub-content.top{
      top: -100%;
      left: 0;

      transition: top 0.5s;
    }

    .sub-content.right{
      top: 0;
      right: -100%;

      transition: right 0.5s;
    }

    .sub-content.bottom{
      bottom: -100%;
      left: 0;

      transition: bottom 0.5s;
    }

    &:hover .sub-content.left{
      left: 0;
    }

    &:hover .sub-content.top{
      top: 0;
    }

    &:hover .sub-content.right{
      right: 0;
    }

    &:hover .sub-content.bottom{
      bottom: 0;
    }
  }
}

.content{
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

.sub-content{
  position: absolute;

  padding: 20px 10px;
  width: 100%;
  height: 100%;

  text-align: center;

  transition: all .5s;

  span{
    font-size: $text-mobile;
  }

  p{
    position: absolute;
    bottom: 20px;
    left: 50%;

    width: 100%;

    transform: translateX(-50%);
  }
}
</style>
