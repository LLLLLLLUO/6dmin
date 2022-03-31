<template>
    <div class="homeBox">
        <el-container>
            <el-header>
                <h2>梦学谷管理傻逼系统</h2>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>
                            <template>
                                <span @click="logout">退出登录</span>
                            </template>

                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        :default-active="home"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                        unique-opened
                        @select="select"
                    >
                        <el-menu-item index="/home/welcome">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="/home/vips">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">会员管理</span>
                        </el-menu-item>
                        <el-menu-item index="/home/admingoods">
                            <i class="el-icon-s-cooperation
"></i>
                            <span slot="title">供应商管理</span>
                        </el-menu-item>
                        <el-menu-item index="/home/goods">
                            <i class="el-icon-s-goods"></i>
                            <span slot="title">商品管理</span>
                        </el-menu-item>
                        <el-menu-item index="/home/user">
                            <i class="el-icon-user"></i>
                            <span slot="title">员工管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from '../../utils/index';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            defaultActive: '/home/welcome'
        }
    },
    methods: {
        async clk() {
            console.log(await axios({
                url: 'https://www.fastmock.site/mock/3afdb56f58d82a19f39db313a0eae4f1/admin/user/info',
                method: 'get'
            }))
        },
        logout() {
            console.log(1);
            this.$store.dispatch('logout')
        },
        select(i) {
            this.$store.dispatch('selectMenu', i)
        }
    },
    computed: {
        ...mapState(['userInfo', 'home'])
    }
}
</script>
<style lang="scss" scoped>
.homeBox {
    height: 100%;
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
        line-height: 200px;
        background-color: "#545c64";
        .el-menu {
            height: 100%;
        }
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
}
</style>
