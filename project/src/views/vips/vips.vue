<template>
    <div class="">
        <el-card class="box-card">
            <cmp-line title="会员" />
        </el-card>
        <div
            class="viewData"
            style="margin-top: 15px;"
        >
            <div class="viewDataSearch">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-input
                                v-model="pages.cartId"
                                placeholder="会员卡号"
                            ></el-input>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-input
                                v-model="pages.name"
                                placeholder="会员名字"
                            ></el-input>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-select
                                v-model="pages.payType"
                                placeholder="支付类型"
                            >
                                <el-option
                                    :label="item.type"
                                    :value="item.id"
                                    v-for="item in payType"
                                    :key="item.id"
                                ></el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-button
                                size="mini"
                                type="primary"
                                @click="getUser"
                            >查询</el-button>
                            <el-button
                                size="mini"
                                type="primary"
                            >新增</el-button>
                            <el-button size="mini">重置</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="viewDataSection">
                <el-table :data="usersList">
                    <el-table-column
                        type="index"
                        label="序号"
                    />
                    <el-table-column
                        prop="cardNum"
                        label="会员卡号"
                    ></el-table-column>
                    <el-table-column
                        prop="name"
                        label="会员姓名"
                    ></el-table-column>
                    <el-table-column
                        prop="birthday"
                        label="会员生日"
                    ></el-table-column>
                    <el-table-column
                        prop="phone"
                        label="手机号码"
                    ></el-table-column>
                    <el-table-column
                        prop="integral"
                        label="可用积分"
                    ></el-table-column>
                    <el-table-column
                        prop="money"
                        label="开卡金额"
                    ></el-table-column>
                    <el-table-column
                        prop="payType"
                        label="支付类型"
                    >
                        <template slot-scope="scope">
                            <div>
                                {{ scope.row | typeToPay }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="会员地址"
                    ></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini">编辑</el-button>
                            <el-button
                                size="mini"
                                type="danger"
                                @click="delUser(scope.row)"
                            >删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            searchForm: {
                cartId: '',
                name: '',
                payType: '',
                date: ''
            },
            pages: {
                query: '',
                cartId: '',
                name: '',
                payType: '',
                pagenum: '1',
                pagesize: '10'
            },
            total: 0,
            usersList: [],
            payType: [
                {
                    id: 1,
                    type: '现金'
                },
                {
                    id: 2,
                    type: '微信'
                },
                {
                    id: 3,
                    type: '支付宝'
                },
                {
                    id: 4,
                    type: '银行卡'
                }
            ]
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        // doSearch() {
        //   this.getUser();
        // },
        async getUser() {
            let data = await this.$store.dispatch('getUserList', this.pages);
            if (data.flag) {
                this.usersList = data.data.rows;
                this.total = data.data.total;
            }
        },
        delUser(row) {
            console.log(row);
            this.$confirm('确认删除此条数据吗', '温馨提示', {
                cancelButtonText: '取消',
                confirmButtonText: '确认'
            }).then(async () => {
                let data = await this.$store.dispatch('deleteUser', row.id);
                if (data.flag) {
                    this.$message.success(data.message);
                    this.getUser();
                }
            }).catch(() => {
                this.$message('取消操作')
            })
        }
    },
    computed: {

    },
    filters: {
        typeToPay(row) {
            switch (row.payType) {
                case '1':
                    return '现金'
                    break;
                case '2':
                    return '微信'
                    break;
                case '3':
                    return '支付宝'
                    break;
                case '4':
                    return '银行卡'
                    break;
            }
        }
    }
}
</script>
