<template>
    <div id="app">
        <hello></hello>
        <router-view/>
    </div>
</template>
<script>
import Hello from './components/HelloWorld';
export default {
    name: 'App',
    components: {Hello},
    data() {
       return {
       }
    }
}
</script>
<style>
</style>