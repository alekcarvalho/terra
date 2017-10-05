<template>

  <div id="menu">
    <a class="open-menu" href="#">
      <span class="menu-icon">
        <span class="menu-line menu-line-1"></span>
        <span class="menu-line menu-line-2"></span>
        <span class="menu-line menu-line-3"></span>
      </span>
    </a>

    
  <div class="menu-overlay">
    <div class="ui text vertical menu">
      <span class="menu-overlay--title">Confira os destinos</span>
    
      <a class="item menu-overlay-item">
        Tailândia
      </a>
      <a class="item menu-overlay-item">
        Veneza
      </a>
      <a class="item menu-overlay-item">
        Moscou
      </a>
      <a class="item menu-overlay-item">
        Buenos Aires
      </a>

    </div>
  </div>

</div>

</template>

<script>
export default{
  name: 'menu',

  props: ['routes'],

  mounted() {

    $(".open-menu").on('click', function(e) {
      e.preventDefault();
      $(".menu-overlay").toggleClass("open");
      $(".open-menu").toggleClass("open");
      $(".menu-overlay").removeClass("close");
      $(".open-menu").removeClass("close");
    });

    $(".menu-overlay-item").on('click', function() {
      $(".menu-overlay").toggleClass("close");
      $(".open-menu").toggleClass("close");
      $(".menu-overlay").removeClass("open");
      $(".open-menu").removeClass("open");
    });
  }
  
}
</script>

<style lang="scss">
/* ==========================================================================
   NAV
   ========================================================================== */

.open-menu {
  padding: 28px;
  max-height: 15px;
  position: absolute;
  left: 0;
  top: 250px;
  z-index: 999;
  background: $fourth;
  box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
}

.menu-icon {
  position: absolute;
  width: 30px;
  height: 19px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 1px;
}

.menu-line {
  background-color: $primary;
  height: 3px;
  width: 100%;
  position: absolute;
  left: 0;
  transition: all 0.25s ease-in-out;
}

.menu-line-2 {
  top: 0;
  width: 70%;
  bottom: 0;
  margin: auto;
}

.menu-line-3 {
  bottom: 0;
}

.open-menu.open .menu-line-1 {
  transform: translateY(12px) translateY(-50%) rotate(-45deg);
}

.open-menu.open .menu-line-2 {
  opacity: 0;
}

.open-menu.open .menu-line-3 {
  transform: translateY(-7px) translateY(50%) rotate(45deg);
}


.menu-overlay {
  background-color: $fourth;
  height: 100%;
  width: 100%;
  padding: 70px 0;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  .menu-overlay--title{
    color: $primary;
    font-size: 30px;
    width: 100%;
    font-family: $font-family-title;

  }
  .ui.vertical.menu {
    width: 100%;
    a {
      font-size: 35px;
      font-weight: bold;
      color: $menu-link;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        color: $third;
      }
      &::after{
        content: '';
        width:50px;
        height: 3px;
        background-color: #fff;
        display: inline-flex;
        margin-top: 20px;
        margin-bottom: -20px;
      }
      &:last-child:after{
        display: none;
      }
    }
  }
}

.menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

.menu-overlay.close {
  opacity: 0;
  visibility: hidden;
}



</style>
