<template>
    <div class="homeBox">
        <el-container>
            <el-header>
                <h2>梦学谷管理傻逼系统</h2>
                <el-dropdown
                    trigger="click"
                    @command="selectDown"
                >
                    <span class="el-dropdown-link">
                        {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="editPass">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">
                            <template>
                                <span>退出登录</span>
                            </template>

                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        :default-active="$route.path"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                        unique-opened
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
                            <i class="el-icon-s-cooperation"></i>
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
                    <el-dialog
                        title="修改密码"
                        :visible.sync="dialogFormVisible"
                    >
                        <el-form
                            :model="form"
                            ref="form"
                            :rules="formRules"
                        >
                            <el-form-item
                                label="原密码"
                                :label-width="formLabelWidth"
                                prop="password"
                            >
                                <el-input
                                    v-model="form.password"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="新密码"
                                :label-width="formLabelWidth"
                                prop="newPass"
                            >
                                <el-input
                                    v-model="form.newPass"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="确认密码"
                                :label-width="formLabelWidth"
                                prop="resPass"
                            >
                                <el-input
                                    v-model="form.resPass"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                        <div
                            slot="footer"
                            class="dialog-footer"
                        >
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button
                                type="primary"
                                @click="upPass"
                            >确 定</el-button>
                        </div>
                    </el-dialog>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { userInfo } from '../../api/index';
import { getUserInfo } from '../../utils/auth';
export default {
    data() {
        let pass = (rules, value, callback) => {
            if (!value) {
                return callback(new Error('确认密码不能为空'))
            };
            let old = this.form.newPass;
            if (value === old) {
                callback();
            } else {
                return callback('与原密码不一致');
            }
        }
        return {
            defaultActive: '/home/welcome',
            dialogFormVisible: false,
            formLabelWidth: '80px',
            form: {
                userId: '',
                password: '',
                newPass: '',
                resPass: ''
            },
            formRules: {
                password: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
                newPass: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
                resPass: [{ required: true, message: '与原密码不一致', trigger: 'blur' },
                { validator: pass, trigger: 'blur' }]
            }
        }
    },
    methods: {
        async selectDown(select) {
            console.log(select)
            switch (select) {
                case 'editPass':
                    let { data } = await userInfo();
                    console.log(data);
                    if (data.flag) {
                        this.dialogFormVisible = true;
                        this.form.userId = this.userInfo.id;
                        console.log(this.form)
                    }
                    break;
                case 'logout':
                    console.log('登录');
                    let user = await this.$store.dispatch('logout');
                    console.log(user);
                    if (user.flag) {
                        this.$message.success(user.message);
                        this.$router.push('/login');
                        return false;
                    }
                    break;
            }
        },
        upPass() {
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    let form = this.form;
                    if (form.oldPass == form.password) {
                        this.$message.warning('新密码不能和原密码一致')
                        return false;
                    } else {
                        let data = await this.$store.dispatch('resPass', { ...form });
                        console.log(data);
                        if (data.flag) {
                            let data = await this.$store.dispatch('upPass', { ...form });
                            console.log(data);
                            if (data.flag) {
                                this.$message.success(data.message);
                                this.dialogFormVisible = false;
                                this.$refs.form.resetFields();
                                this.$store.dispatch('logout');
                                this.$router.push('/login')
                                return false;
                            } else {
                                this.$message(data.message);
                                return false
                            };
                        };
                    }
                } else {
                    this.$message.warning('请输入密码')
                }
            })
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
        background-color: #fff;
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
