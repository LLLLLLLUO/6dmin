<template>
    <div class="lineBox">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ title || '用户' }}管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {

        }
    },
    methods: {

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
