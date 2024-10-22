<template>
    <div class="sign-in-record">

    </div>
</template>

<script>
export default {
    name: 'PivotSignInRecord',

    data() {
        return {
        };
    },

    mounted() {
        // 创建一个新的 Date 对象，表示当前日期和时间  
        const currentDate = new Date();
        // 获取当前月份（注意：月份是从0开始的，即0表示1月，11表示12月）  
        const currentMonth = currentDate.getMonth();
        // 如果你想要得到人类可读的月份（1-12），你需要将结果加1  
        const humanReadableMonth = currentMonth + 1;
        console.log("当前月份（0-11）: ", currentMonth);
        console.log("当前月份（1-12）: ", humanReadableMonth);

        // 创建一个新的 Date 对象，并设置为本月的第一天  
        const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

        // 获取本月第一天是星期几（0表示星期日，1表示星期一，依此类推，6表示星期六）  
        const dayOfWeek = firstDayOfMonth.getDay();

        // 创建一个数组，用于将数字转换为星期的名称  
        const daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        // 输出本月第一天是星期几  
        console.log("本月一日是：" + daysOfWeek[dayOfWeek]);
    },

    methods: {

    },
};
</script>