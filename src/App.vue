<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Header></Header> -->
    <div class="components">
      <Info></Info>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PivotApp',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  components: {
    Info: () => import('@/components/base/info.vue')
  }
};
</script>
<style src="@/styles/index.scss" lang="scss"></style>
<style src="@/styles/theme.scss" lang="scss"></style>