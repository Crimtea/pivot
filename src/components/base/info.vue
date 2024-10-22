<template>
    <div :class="`message ${show ? `${type} show` : type}`">
        {{ info }}
    </div>
</template>

<script>
export default {
    name: 'PivotInfo',

    data() {
        return {
            timer: null,
            show: false,
            info: '',
            type: 'info',
        };
    },

    created() {
        this.$bus.$on('sendInfo', (data) => {
            this.type = data.type || 'info';
            this.info = data.info;
            clearTimeout(this.timer);
            this.active();
        })
    },

    mounted() {

    },

    methods: {
        active() {
            this.show = true;
            this.timer = setTimeout(() => {
                this.show = false;
                this.timer = setTimeout(() => {
                    this.info = '';
                }, 500)
            }, 1500)
        }
    },

};
</script>
<style lang="scss" scoped>
.message {
    user-select: none;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding: 3px 7px;
    border-radius: 7px;
    position: absolute;
    left: 50%;
    transition: all .3s;
    top: 5px;
    opacity: 0;

   

    &.show {
        top: 35px;
        opacity: 1;
    }
}
</style>