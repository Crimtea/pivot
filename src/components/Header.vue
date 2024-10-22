<template>
  <div class="header">
    <div class="left">
      <img class="logo" src="@/assets/logo.svg" alt="logo">
      <span>pivot</span>
    </div>
    <div class="middle"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'PivotHeader',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  box-sizing: border-box;
  padding: 0 24px;
  background: linear-gradient(164deg, var(--color-black), var(--color-primary-5));

  >div {
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    align-items: center;
  }

  >.left {
    gap: 7px;

    >img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    >span {
      font-size: 22px;
      line-height: 32px;
      color: var(--color-white);
    }
  }
}
</style>