<template>
    <div class="test">{{msg}}</div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
           msg: 'Hello world !!'
       }
    }
}
</script>
<style>
.test{
    color: red;
}
</style>