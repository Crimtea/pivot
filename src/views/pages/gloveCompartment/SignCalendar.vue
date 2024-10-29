<template>
    <div>
        {{ data }}
    </div>
</template>

<script>
export default {
    name: 'PivotSignCalendar',

    data() {
        return {
            month: null,
        };
    },

    mounted() {
        this.month = this.getCurrentMonth();
    },

    methods: {
        // 获取当前月份
        getCurrentMonth() {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            return currentMonth;
        }
    },
};
</script>