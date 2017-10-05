<template>
    <div id="banner">
        <div class="ui panorama test ad" data-text="" v-for="texto of textos">
            <img :src="texto.banner" alt="banner">
        </div>
    </div> 
</template>

<script>
export default {
    name: "banner",

    props: ['textos']

}
</script>

<style lang="scss">
.ui.panorama{
    width: 100%!important;
    margin-bottom: 20px!important;
}
</style>
