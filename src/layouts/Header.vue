<template>
  <header id="header">
    <nav class="ui large pointing menu">
      <div class="ui container">
        <div class="logo-menu item">
          <router-link :to="{ name: 'home'}" class="logo">
            <img src="/static/images/logo.svg" alt="">
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Menu from '../layouts/Menu.vue'

export default {
  name: 'header',
  components: {
    'menu-component': Menu
  }
}
</script>

<style lang="scss">
/* ==========================================================================
   HEADER - HOME
   ========================================================================== */
#header {
  nav{ 
    background: $second;
    width: 100%;
    border: none;
    border-radius: 0;
    .item{
      border: none;
      &::before{
        display: none;
      }
    }
    .logo img{
      width: 100px;
    }
  }
  .ui.container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
