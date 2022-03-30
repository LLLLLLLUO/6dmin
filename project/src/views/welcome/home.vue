<template>
    <div class="homeBox">
        <cmp-line />
        {{ userInfo }}
        <el-button @click="clk">00000</el-button>
    </div>
</template>

<script>
import axios from '../../utils/index';
import { mapState } from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods: {
        async clk() {
            console.log(await axios({
                url: 'https://www.fastmock.site/mock/3afdb56f58d82a19f39db313a0eae4f1/admin/user/info',
                method: 'get'
            }))
        }
    },
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>
<style lang="scss" scoped>
.homeBox {
}
</style>
