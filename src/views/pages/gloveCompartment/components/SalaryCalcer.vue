<template>
  <div class="salary-calcer __card">
    <div class="__title">薪水计算</div>
    <div class="content">
      <div class="row">
        <div class="title">每日工作时长：</div>
        <input type="text" v-model="dailyWorkTime">
        <div>小时/天</div>
        <button @click="reset()">重置</button>
      </div>
      <div class="row">
        <div class="title">每周工作天数：</div>
        <input type="text" v-model="weeklyWorkDays">
        <div>天/周</div>
      </div>
      <div class="row">
        <div class="title">薪资：</div>
        <input type="text" v-model="salary">
        <div>元/月</div>
      </div>
      <div class="row">
        <div class="title">时薪：</div>
        <input type="text" v-model="hourlyWage">
        <div>元/时</div>
        <button @click="reCalc()">转换月薪</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PivotSalaryCalcer',

  data() {
    return {
      dailyWorkTime: 7.5,
      weeklyWorkDays: 5,
      salary: 6000,
      hourlyWage: 37.33,
    };
  },
  methods: {
    calc() {
      let temp = this.salary / (this.dailyWorkTime * 30 * (this.weeklyWorkDays / 7));
      this.hourlyWage = temp.toFixed(2);
    },
    reCalc() {
      let temp = this.hourlyWage * (this.dailyWorkTime * 30 * (this.weeklyWorkDays / 7));
      this.salary = temp.toFixed(2);
    },
    reset() {
      this.dailyWorkTime = 7.5;
      this.weeklyWorkDays = 5;
      this.salary = 6000;
      this.hourlyWage = 37.33;
    }
  },
  watch: {
    dailyWorkTime() {
      this.calc();
    },
    weeklyWorkDays() {
      this.calc();
    },
    salary() {
      this.calc();
    },
  }
};
</script>
<style lang="scss" scoped>
.salary-calcer {
  .content {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .row {
      display: flex;
      gap: 5px;

      >.title {
        width: 120px;
        text-align: right;
      }
    }
  }
}
</style>