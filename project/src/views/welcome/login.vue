<template>
    <div class="loginBox">
        <div class="login">
            <el-form>
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
import { userLogin } from '../../api';
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
            console.log(this.form)
            let { data } = await userLogin(this.form);
            console.log(data.message);
            console.log(data.data.token)
            if (data.data.token) {
                sessionStorage.token = data.data.token;
                this.$message.success(data.message);
                this.$router.push('/home');
                return false
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
