<template>
    <div class="lineBox">
        <el-breadcrumb separator-class="el-icon-arrow-right">
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

    }
}
</script>

<style lang="scss" scoped>
.lineBox {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-left: 5px solid skyblue;
    padding: 0 0 0 25px;
    box-sizing: border-box;
    .el-breadcrumb {
        line-height: 30px;
    }
    font-size: 12px !important;
}
</style>
