<template>
    <div id="app">
        <div class="test">Hello World !</div>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style>
.test{
    color: red;
}
</style>