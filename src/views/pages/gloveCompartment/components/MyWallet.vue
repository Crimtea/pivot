<template>
    <div class="my-wallet __card">
        <!-- <div class="__title">我的钱包</div> -->
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
            data: '微信零钱:0.95,微信零钱通:0.17,农业银行:10801.69,建设银行:83.26,工商银行:10,黄金:409.29,QQ钱包:82.66,现金:160',
            list: [],
        };
    },
    computed: {
        total() {
            let temp = this.list.reduce((acc, cur) => acc + Number(cur.balance), 0);
            return temp.toFixed(2);
        }
    },
    methods: {
        generate() {
            let temp = [];
            this.list.forEach(item => {
                temp.push(`${item.name}:${item.balance}`)
            })
            this.data = temp.join();
        },
        parse() {
            this.list = this.data.split(',').map(item => {
                let [name, balance] = item.split(':');
                return { name, balance }
            })
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