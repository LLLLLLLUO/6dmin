<template>
    <div class="loginBox">
        <div class="login">
            <h2>
                骆骆傻逼管理系统
            </h2>
            <el-form
                ref="loginForm"
                :model="form"
            >
                <el-form-item>
                    <el-input
                        v-model="form.username"
                        type="text"
                        placeholder="请输入内容"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        v-model="form.password"
                        type="password"
                        placeholder="请输入内容"
                    ></el-input>
                </el-form-item>
                <el-form-item style="text-align: right;">
                    <el-button
                        type="primary"
                        @click="toLogin"
                    >登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: '123456'
            }
        }
    },
    methods: {
        async toLogin() {
            let { data } = await this.$store.dispatch('userLogin', this.form);
            console.log(data.flag);
            if (data.flag) {
                console.log(1)
                let temp = await this.$store.dispatch('userInfo');
                let { data } = temp
                if (data.flag) {
                    this.$store.dispatch('setUserInfo', data.data);
                    this.$router.push('/home')
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.loginBox {
    background-color: skyblue;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .login {
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        transform: translate(-50%, -50%);
        border-radius: 4px;
        box-shadow: 0 0 #fff 5px;
        h2 {
            text-align: center;
            margin-top: 20px;
        }
        .el-form {
            width: 80%;
            margin: 30px auto 0;
            .el-form-item {
                .el-input {
                }
            }
        }
    }
}
</style>
