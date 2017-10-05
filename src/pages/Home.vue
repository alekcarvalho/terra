<template>

  <div id="home">

    <hero-component :textos="textos"></hero-component>

    <div class="ui main container" v-for="texto of textos">

      <section class="intro" v-scroll-reveal>

          <p>
            {{texto.tituloPrincipal.intro}}
          </p>
        
      </section>

      <section class="destination" v-scroll-reveal>
        <h2 class="ui header">
          {{texto.primeiraSecao.titulo}}
          <div class="divider-title divider-one"></div>
          <div class="sub header">{{texto.primeiraSecao.subtitulo}}</div>
        </h2>
        <div class="content">
          <p>
            {{texto.primeiraSecao.primeiroParagrafo}}
          </p>
          <div class="ui fluid image">
            <img :src="texto.primeiraSecao.imagem" :alt="texto.primeiraSecao.titulo">
          </div>
          <p>
            {{texto.primeiraSecao.segundoParagrafo}}
          </p>
          <div class="icon-item">
            <div class="icon-item--div">
              <i class="icon-item--icon icon-eat"></i>
            </div>
            <div class="icon-item--content">
              <span>
              {{texto.primeiraSecao.icone}}
            </span>
            </div>
          </div>
        </div>

        <h3 class="ui header">{{texto.primeiraSecao.primeiraSubSecao.titulo}}</h3>
        <div class="ui fluid image">
          <img :src="texto.primeiraSecao.primeiraSubSecao.imagem" :alt="texto.primeiraSecao.primeiraSubSecao.titulo">
        </div>
        <div class="content">
          <blockquote>{{texto.primeiraSecao.primeiraSubSecao.quote}}</blockquote>
          <p>
            {{texto.primeiraSecao.primeiraSubSecao.paragrafo}}
          </p>
          <div class="icon-item">
              <div class="icon-item--div">
                <i class="icon-item--icon icon-map"></i>
              </div>
              <div class="icon-item--content">
                <span>
                {{texto.primeiraSecao.primeiraSubSecao.icone}}
              </span>
              </div>
            </div>
        </div>

        <h3 class="ui header">{{texto.primeiraSecao.segundaSubSecao.titulo}}</h3>
        <div class="ui fluid image">
          <img :src="texto.primeiraSecao.segundaSubSecao.imagem" :alt="texto.primeiraSecao.segundaSubSecao.titulo">
        </div>
        <div class="content">
          <p>
            {{texto.primeiraSecao.segundaSubSecao.primeiroParagrafo}}
          </p>
          <div class="informativo">
            {{texto.primeiraSecao.segundaSubSecao.info}}
          </div>
          <p>
            {{texto.primeiraSecao.segundaSubSecao.segundoParagrafo}}
          </p>
        </div>

        
      </section>

      <section class="destination" v-scroll-reveal>
        <h2 class="ui header">
          {{texto.segundaSecao.titulo}}
          <div class="divider-title divider-two"></div>
          <div class="sub header">{{texto.segundaSecao.subtitulo}}</div>
        </h2>
        <div class="content">
          <p>
            {{texto.segundaSecao.primeiroParagrafo}}
          </p>
          <div class="ui fluid image">
            <img :src="texto.segundaSecao.imagem" :alt="texto.segundaSecao.titulo">
          </div>
          <p>
            {{texto.segundaSecao.segundoParagrafo}}
          </p>
          <div class="icon-item">
            <div class="icon-item--div">
              <i class="icon-item--icon icon-eat"></i>
            </div>
            <div class="icon-item--content">
              <span>
              {{texto.segundaSecao.icone}}
            </span>
            </div>
          </div>
        </div>

        <h3 class="ui header">{{texto.segundaSecao.primeiraSubSecao.titulo}}</h3>
        <div class="ui fluid image">
          <img :src="texto.segundaSecao.primeiraSubSecao.imagem" :alt="texto.segundaSecao.primeiraSubSecao.titulo">
        </div>
        <div class="content">
          <p>
            {{texto.segundaSecao.primeiraSubSecao.paragrafo}}
          </p>
          <div class="icon-item">
              <div class="icon-item--div">
                <i class="icon-item--icon icon-map"></i>
              </div>
              <div class="icon-item--content">
                <span>
                {{texto.segundaSecao.primeiraSubSecao.icone}}
                </span>
              </div>
            </div>
        </div>

        <h3 class="ui header">{{texto.segundaSecao.segundaSubSecao.titulo}}</h3>
        <div class="ui fluid image">
          <img :src="texto.segundaSecao.segundaSubSecao.imagem" :alt="texto.segundaSecao.segundaSubSecao.titulo">
        </div>
        <div class="content">
          <p>
            {{texto.segundaSecao.segundaSubSecao.primeiroParagrafo}}
          </p>
          <p>
            {{texto.segundaSecao.segundaSubSecao.segundoParagrafo}}
          </p> 
        </div> 
        
      </section>

      <section class="destination" v-scroll-reveal>
        <h2 class="ui header">
          {{texto.terceiraSecao.titulo}}
          <div class="divider-title divider-three"></div>
          <div class="sub header">{{texto.terceiraSecao.subtitulo}}</div>
        </h2>
        <div class="content">
          <p>
            {{texto.terceiraSecao.primeiroParagrafo}}
          </p>
          <div class="ui fluid image">
            <img :src="texto.terceiraSecao.imagem" :alt="texto.terceiraSecao.titulo">
          </div>
          <p>
            {{texto.terceiraSecao.segundoParagrafo}}
          </p>
        </div>

        <h3 class="ui header">{{texto.terceiraSecao.primeiraSubSecao.titulo}}</h3>
        <div class="ui fluid image">
          <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/27/11/machu-picchu.jpg" alt="">
        </div>
        <div class="content">
          <p>
            {{texto.terceiraSecao.primeiraSubSecao.primeiroParagrafo}}
          </p>

          <p>
            {{texto.terceiraSecao.primeiraSubSecao.segundoParagrafo}}
          </p>

          <p>
            {{texto.terceiraSecao.primeiraSubSecao.terceiroParagrafo}}
          </p>
        </div>
  
        
      </section>

      <banner-component :textos="textos"></banner-component>
    
    </div>

  </div>

</template>

<script>
import { HTTP } from '../domain/http-common'
import Hero from '../components/Hero.vue'
import Banner from '../components/Banner.vue'

export default {
  name: 'home',

  components: {
    'hero-component': Hero,
    'banner-component': Banner
  },

  data: () => ({
    textos: [],
  }),


  created(){
    HTTP.get('data.json')
      .then(response => {
        // JSON responses are automatically parsed.
        //console.log(response.data)
        this.textos = response.data
        })
      .catch(e => {
        this.errors.push(e)
      })
  },
  
  mounted(){
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    this.calcWidth('.divider-one');
    this.calcWidth('.divider-two');
    this.calcWidth('.divider-three');
  },

  methods:{
    calcWidth(element){
      $(window).scroll(function(event) {
        let docWidth = $(document).width();
        let scrollTop = $(window).scrollTop();
        let scrollBottom = $(window).scrollTop() + $(window).height();
        let offset = $(element).offset().top;
        let percent = Math.round((scroll / docWidth) * 100);
        let result = Math.round((scrollBottom - offset));

        //if(scrollBottom > offset){
        //result = offset - scrollBottom;
        // }

        console.log('top ' + scrollTop);
        console.log('bottom ' + scrollBottom);
        console.log('offset ' + offset);

        $(element).css('width', result + 'px');
      });
    }
  }

}
</script>

<style lang="scss" scoped>
/* ==========================================================================
   HOME
   ========================================================================== */
#home{
  width: 100%;
  margin-bottom: 40px;
  .main.container{
    width: 700px;
  }
}
.intro{
  margin-top: 40px;
  span{
    color: $third;
    font-size: 48px;
  }
  p{
    font-family: $font-family-title;
    color: $fourth;
    font-size: 20px;
    font-weight: bold;
    line-height: $line-height-title;
  }
}
.destination{
  margin: 50px 0;
  h2{
    text-align: center;
    font-size: 40px;
    .sub.header{
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5px;
    }
  }
  h3{
   font-size: 30px; 
   margin-top: 40px;
   display: flex;
    align-items: center;
   &::before{
     content: '';
     display: inline-block;
     width: 15px;
     height: 2px;
     background-color: $sixth;
     margin-right: 5px;
   }
  }
  .divider-title{
    display: block;
    min-width: 100px;
    height: 2px;
    background-color: $sixth;
    //position: absolute;
    left: 0;
  }
  .content{
    p{
      line-height: $line-height;
    }
  }
}

.ui.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    max-height: 400px; //max-width: 500px;
    //object-fit: none; /* Do not scale the image */
    //object-position: center; /* Center the image within the element */
  }
  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 20px;
    background-color: $third;
    position: absolute;
    top: -5px;
    right: 0;
  }
}

.icon-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 25px;
  .icon-item--div {
    border: 3px solid $third;
    padding: 8px;
    margin-right: 15px;
  }
  .icon-item--content {
    line-height: 1.8em;
    display: inline;
    span {
      font-family: $font-family-title;
      font-weight: bold;
      font-size: 18px;
      background: $sixth;
      padding: 2px 0;
      box-shadow: 7px 0 0 $sixth, -7px 0 0 $sixth;
      box-decoration-break: clone;
    }
  }
}

blockquote {
  margin: 20px 0;
  font-family: $font-family-title;
  font-weight: bold;
  font-size: 22px;
  font-style: italic;
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: center;
  &::before {
    content: "\201C";
    font-family: Georgia, serif;
    font-size: 50px;
    font-weight: bold;
    color: $sixth;
    margin-right: 18px;
    display: inline;
    height: 0;
    line-height: 0;
    position: relative;
    top: 20px;
  }
  &::after {
    content: "\201D";
    font-family: Georgia, serif;
    font-size: 50px;
    font-weight: bold;
    color: $sixth;
    display: inline;
    height: 0;
    line-height: 0;
    position: relative;
    top: 35px;
    margin-left: 5px;
  }
}

.informativo{
  font-family: $font-family-title;
  line-height: $line-height;
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0!important;
}

.icon-item--icon{
  display: block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
}

.icon-eat {
  background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNTA1LjEzLDQ2LjYyNWMtMC4wMjEtMTcuMzY1LTUuOTMxLTMyLTE3LjUzNi00My41MmMtMy44NC0zLjgxOS05LjkyLTQuMTM5LTE0LjE2NS0wLjc2OCAgICAgYy0yLjAyNywxLjYyMS0zNy41NDcsMzYuODY0LTQ1My4zNzYsNDUzLjI2OUM3LjU1MSw0NjguMTI5LDcuNTMsNDg4LjQ4MSwyMC4wMSw1MDAuOTM5YzYuMDU5LDYuMDU5LDE0LjEwMSw5LjM4NywyMi42NTYsOS4zODcgICAgIGM4LjUxMiwwLDE2LjUzMy0zLjMyOCwyMi41NzEtOS4zNDRsMTM1Ljc4Ny0xMzUuODA4YzUyLjMwOS01Mi4zMDksNzQuOTY1LTU5LjU2Myw4Ny40NDUtNjAuNDU5ICAgICBjMjMuNDQ1LTEuNjg1LDQzLjY2OS0xMC40MTEsNTguNTE3LTI1LjI1OUM0MTQuOTMzLDIxMS40ODksNTA1LjI3OSwxMTMuNDE5LDUwNS4xMyw0Ni42MjV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik04NS44MjMsMTkxLjI4NmMwLjA2NCwwLjA2NCwwLjA4NSwwLjE0OSwwLjE0OSwwLjIxM2MxNC41MDcsMTQuMjcyLDM0LjQ3NSwyMi42OTksNTcuNzA3LDI0LjQwNSAgICAgYzEyLjM1MiwwLjg5NiwyNy45NjgsOC45MzksNDcuNzY1LDI0LjU5N2MxLjk0MSwxLjUzNiw0LjI4OCwyLjMwNCw2LjYxMywyLjMwNGMyLjczMSwwLDUuNDgzLTEuMDQ1LDcuNTUyLTMuMTM2bDM0LjA2OS0zNC4wOTEgICAgIGMzLjgxOS0zLjg0LDQuMTgxLTkuODk5LDAuODMyLTE0LjE2NWMtMjIuMzE1LTI4LjI2Ny0yNC43ODktNDIuNjQ1LTI0LjY4My01MS4wMDhjMC4yMTMtMTguOTg3LTcuNzQ0LTM3LjkzMS0yMi40NDMtNTIuNTY1ICAgICBsLTIuNzUyLTIuMzI1YzAsMC0wLjAyMSwwLTAuMDIxLTAuMDIxbC05Ni04MS4zNDRjLTQuNTAxLTMuODE5LTExLjI0My0zLjI0My0xNS4wNCwxLjIzN2MtMy44MTksNC40OC0zLjI0MywxMS4yMjEsMS4yMzcsMTUuMDQgICAgIGw4Ny4xNjgsNzMuODU2bC0yOS4zMTIsMjkuMzEyTDUwLjIxOCwzNS4xNDdjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMGMtNC4xNiw0LjE2LTQuMTYsMTAuOTIzLDAsMTUuMDgzbDg4LjQ0OCw4OC40NDggICAgIEw5My42MzEsMTY4LjYzbC03NS4yLTc5LjkzNmMtNC4wMzItNC4yODgtMTAuNzk1LTQuNDgtMTUuMDgzLTAuNDQ4Yy00LjI4OCw0LjAzMi00LjQ4LDEwLjc5NS0wLjQ0OCwxNS4wODNsODIuNzA5LDg3LjgwOCAgICAgQzg1LjY3NCwxOTEuMjAxLDg1Ljc1OSwxOTEuMjIyLDg1LjgyMywxOTEuMjg2eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNNTAyLjYzNCw0NTcuMzc3TDM1Ni4wMSwzMTAuNzUzYy0zLjQ5OS0zLjUyLTguOTM5LTQuMTM5LTEzLjE0MS0xLjUzNmMtMTEuNzk3LDcuMjUzLTI1LjM0NCwxMi4yNDUtNDAuMzIsMTQuODA1ICAgICBjLTMuOTI1LDAuNjYxLTcuMTQ3LDMuNDc3LTguMzYzLDcuMjc1Yy0xLjIxNiwzLjc5Ny0wLjE5Miw3Ljk1NywyLjYyNCwxMC43NzNsMTYwLjU1NSwxNjAuNTU1ICAgICBjNi4wMzcsNi4wMzcsMTQuMDgsOS4zNjUsMjIuNjM1LDkuMzY1YzguNTU1LDAsMTYuNTc2LTMuMzI4LDIyLjYzNS05LjM2NWM2LjA1OS02LjAzNyw5LjM2NS0xNC4wOCw5LjM2NS0yMi42MTMgICAgIFM1MDguNjcxLDQ2My40MzUsNTAyLjYzNCw0NTcuMzc3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K')
}

.icon-map {
  background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxLjE2OCA2MS4xNjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxLjE2OCA2MS4xNjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBhdGggZD0iTTUwLjIxNiwzNy41ODRoLTcuMTYxbDMuMDQ3LTQuNGM1Ljc1NS03LjY3MSw0LjkyMi0yMC4yOC0xLjc4MS0yNi45ODJjLTMuNjIxLTMuNjIyLTguNDM3LTUuNjE3LTEzLjU2LTUuNjE3ICBjLTUuMTIyLDAtOS45MzgsMS45OTUtMTMuNTYsNS42MTdjLTYuNzAzLDYuNzAyLTcuNTM2LDE5LjMxMi0xLjgwNCwyNi45NTJsMy4wNjgsNC40MzFoLTcuNTEzTDAsNjAuNTg0aDYxLjE2OEw1MC4yMTYsMzcuNTg0eiAgIE0zMC45MzgsMTIuNTg0YzMuODU5LDAsNywzLjE0MSw3LDdzLTMuMTQxLDctNyw3cy03LTMuMTQxLTctN1MyNy4wNzgsMTIuNTg0LDMwLjkzOCwxMi41ODR6IE0xMi4yMTYsMzkuNTg0aDcuNjM0bDEwLjkxMSwxNS43NTcgIGwxMC45MS0xNS43NTdoNy4yODFsOS4wNDgsMTlIMy4xNjhMMTIuMjE2LDM5LjU4NHoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==')
}
</style>
