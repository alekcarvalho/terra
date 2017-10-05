<template>
  <div class="hero">

    <div v-for="texto of textos">

      <div class="hero--image" :style="{ backgroundImage: 'url(' + texto.imagemPrincipal + ')' }">
        
        <menu-component></menu-component>

      </div>
      <div class="hero--content">
        <h1 class="ui header">
          {{texto.tituloPrincipal.titulo}}
          <div class="sub header">
            {{texto.tituloPrincipal.subtitulo}}
          </div>
        </h1>
      </div>
    
  </div>

  </div>
</template>

<script>
import Menu from '../layouts/Menu.vue'

export default {
  name: "hero",

  props: ['textos'],

  components: {
    'menu-component': Menu
  }

}
</script>

<style lang="scss" scoped>
.hero{
  width: 100%;
}
.hero--image{
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  height: 500px;
}
.hero--content{
  width: 100%;
  background: $third;
  padding: 40px;
  text-align: center;
  h1{
    text-transform: uppercase;
    font-size: 50px;
    width: 100%;
  }
  .sub.header{
    font-size: 20px!important;
    margin-top: 10px;
  }
}

</style>
