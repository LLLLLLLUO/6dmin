<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app,
.el-container,
.el-aside,
.el-main {
    height: 100%;
}
</style>
