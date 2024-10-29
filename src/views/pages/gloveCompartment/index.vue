<template>
  <div>
    <SalaryCalcer></SalaryCalcer>
    <LoanCaler></LoanCaler>
    <MyWallet></MyWallet>
  </div>
</template>
<script>
export default {
  name: 'PivotIndex',
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
  components: {
    SalaryCalcer: () => import('./components/SalaryCalcer.vue'),
    LoanCaler: () => import('./components/LoanCaler.vue'),
    MyWallet: () => import('./components/MyWallet.vue'),
  }
};
</script>