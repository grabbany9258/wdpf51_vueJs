<template>
    <div class="mercado-clone-wrap">
        <div class="mercado-panels-actions-wrap">
            <a class="mercado-close-btn mercado-close-panels" href="#">x</a>
        </div>
        <div class="mercado-panels"></div>
    </div>

    <!-- Header -->

    <headerpage></headerpage>

    <router-view></router-view>

    <footerpage></footerpage>
</template>


<script>
import Headerpage from "../layouts/Header.vue"
import Footerpage from "../layouts/Footer.vue"

export default
    {
        components: { Headerpage, Footerpage },
        name: 'Master',

    }
</script>
<style></style>