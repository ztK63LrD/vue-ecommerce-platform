<template>
    <template v-if="route.path != '/login'">
        <global-menu></global-menu>
        <global-header></global-header>
        <router-view></router-view>
        <global-footer></global-footer>
    </template>
    <template v-else>
        <router-view></router-view>
    </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

let route = useRoute()

</script>

<style lang="scss">
* {
    box-sizing: border-box;
	text-decoration: none;
}
</style>
