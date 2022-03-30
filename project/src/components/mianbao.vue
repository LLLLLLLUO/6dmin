<template>
    <div class="lineBox">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/home/welcome">
                <span @click="toUpTitle">首页</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{ title || '用户' }}管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            require: true
        }
    },
    data() {
        return {
            home: '/home/welcome'
        }
    },
    methods: {
        toUpTitle() {
            this.$store.dispatch('selectMenu', '/home/welcome')
        }
    }
}
</script>

<style lang="scss" scoped>
.lineBox {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-left: 5px solid skyblue;
    padding: 0 0 0 25px;
    box-sizing: border;
    .el-breadcrumb {
        line-height: 50px;
    }
}
</style>
