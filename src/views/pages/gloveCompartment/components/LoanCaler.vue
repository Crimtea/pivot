<template>
    <div class="loan-caler __card">
        <div class="__title">还款计算</div>
        <div class="content">
            <div class="row">
                <div class="title">总计金额：{{ total }}</div>
            </div>
            <div class="row">
                <div class="title">已还金额：{{ repaid }}</div>
            </div>
            <div class="row">
                <div class="title">剩余金额：{{ (total - repaid).toFixed(2) }}</div>
            </div>
            <div class="row">
                <div class="title">已还占比：{{ ((repaid / total) * 100).toFixed(2) }}%</div>
            </div>
            <div class="row">
                <div class="title">已还期数：</div>
                <button @click="changeRepaidTimes(-1)">➖</button>
                <div class="num">{{ repaidTimes }}</div>
                <button @click="changeRepaidTimes(1)">➕</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PivotLoanCaler',
    data() {
        return {
            repaidTimes: 9,
        };
    },
    computed: {
        total() {
            return 145.6 * 8 + 1514.24 * 16;
        },
        repaid() {
            let temp = 0;
            if (this.repaidTimes >= 8) {
                temp = (this.repaidTimes - 8) * 1514.24 + 145.6 * 8;
            } else {
                temp = this.repaidTimes * 145.6;
            }
            return temp.toFixed(2)
        }
    },
    methods: {
        changeRepaidTimes(num) {
            if (num == 1 && this.repaidTimes >= 24) {
                this.repaidTimes = 24;
            } else if (num == -1 && this.repaidTimes <= 0) {
                this.repaidTimes = 0;
            } else {
                this.repaidTimes += num;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.loan-caler {
    .content {
        display: flex;
        flex-direction: column;
        gap: 7px;

        .row {
            display: flex;

            .num {
                width: 30px;
                text-align: center;
                margin: 0 10px;
            }
        }
    }
}
</style>