<template>
  <div class="component">
    <div>
      消息通知
      <button :class="item.type" v-for="(item, index) in list" :key="index" @click="sendInfo(item.info, item.type)">
        触发{{ item.info }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PivotIndex',

  data() {
    return {
      list: [
        {
          info: '普通信息',
          type: 'info'
        },
        {
          info: '成功信息',
          type: 'success'
        },
        {
          info: '失败信息',
          type: 'danger'
        },
        {
          info: '警告信息',
          type: 'warning'
        }
      ]
    };
  },

  mounted() {

  },

  methods: {
    sendInfo(info, type) {
      this.$message(info, type);
    }
  },
};
</script>