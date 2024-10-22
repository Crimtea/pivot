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
  flex-shrink: 0;
  height: 60px;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(183deg, var(--color-header-bg-0), var(--color-header-bg-1));

  

  >div {
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  >.left {
    width: 180px;
    padding-left: 20px;
    gap: 7px;
    user-select: none;

    >img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    >span {
      font-size: 20px;
      line-height: 20px;
      color: var(--color-white);
    }
  }
}
</style>