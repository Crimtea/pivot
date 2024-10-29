<template>
    <div class="my-wallet __card">
        <div class="__title">我的钱包</div>
        <div class="content">
            <div class="row">
                <div class="title">总计：</div>
                <div class="total">{{ total }}</div>
                <button @click="list.push({ name: '', balance: '' })">新增</button>
            </div>
            <div class="row" v-for="(item, index) in list" :key="index">
                <input class="title" type="text" v-model="item.name">
                <input class="balance" type="text" v-model="item.balance">
                <button style="margin-left: 10px;" @click="list.splice(index, 1)">删除</button>
            </div>
            <div class="row">
                <button @click="generate()">生成 ↓</button>
                <button @click="parse()">解析 ↑</button>
            </div>
            <div>
                <textarea v-model="data"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PivotMyWallet',

    data() {
        return {
            data: '',
            list: [{"name":"微信零钱","balance":"7.95"},{"name":"微信零钱通","balance":"0.17"},{"name":"农业银行","balance":"2518.80"},{"name":"建设银行","balance":"83.26"},{"name":"工商银行","balance":"10"},{"name":"股票","balance":"2630.50"},{"name":"黄金","balance":"419.14"},{"name":"待发工资","balance":"6600"},{"name":"QQ钱包","balance":"82.66"},{"name":"现金","balance":"160"}]
        };
    },
    computed: {
        total() {
            let temp = this.list.reduce((acc, cur) => acc + Number(cur.balance), 0);
            return temp.toFixed(2);
        }
    },
    mounted() {

    },

    methods: {
        generate() {
            this.data = JSON.stringify(this.list);
        },
        parse() {
            this.list = JSON.parse(this.data);
        },
    },
};
</script>
<style lang="scss" scoped>
.my-wallet {
    .content {
        display: flex;
        flex-direction: column;
        gap: 7px;

        .row {
            display: flex;
            gap: 5px;

            input {

                &.title {
                    width: 110px;
                    text-align: center;
                }

                &.balance {
                    width: 80px;
                    text-align: center;
                }
            }

            .total {
                width: 100px;
            }


        }

        textarea {
            box-sizing: border-box;
            width: 100%;
            height: 80px;
            resize: none;
            outline: none;
            padding: 7px 11px;
        }
    }
}
</style>