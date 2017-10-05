<template>
  <div id="app">

    <header-component>
    </header-component>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>

// importando routes
import {routes} from './routes'

// importando os layouts
import Header from './layouts/Header.vue'

export default {

  data () {
    return {
      routes : routes.filter(route => route.menu)
    }
  },

  // apelido para importar o footer
  components: {
    'header-component': Header
  }

}
</script>

<style lang="scss">

/* ==========================================================================
   GERAL
   ========================================================================== */
*:focus {
  outline: none !important;
}

.ui.segment,
.ui.segments .segment {
  font-size: $font-tamanho-padrao;
}

.ui.header,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-family-title!important;
  color: $header;
  text-transform: uppercase;
}


.sub.header {
  font-weight: 400;
  color: $font-secundaria!important;
  line-height: $line-height-title!important;
  text-transform: uppercase;
  font-family: $font-family!important;

}


.ui.items > .item > .content > .header {
  font-family: $font-family-title;
}

//Fix Sidebar
body.pushable {
  background: none!important;
  margin-bottom: -20px !important;
}

body.pushable > .pusher {
  background: $background!important;
}

body {
  font-size: $font-tamanho-padrao;
  overflow-x: hidden;
  color: $font;
  background: $background;
  -webkit-font-smoothing: antialiased;
  font-family: $font-family;
}

/* ==========================================================================
   CONTENT
   ========================================================================== */
main{
  width: 100%;
}

</style>
