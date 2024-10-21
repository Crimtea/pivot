<template>
    <div class="index">
        <Header></Header>
        <div class="main">
            <Sidebar></Sidebar>
            <router-view class="content"></router-view>
        </div>
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
        Header: () => import('@/components/Header.vue'),
        Sidebar: () => import('@/components/Sidebar.vue'),
    }
};
</script>
<style lang="scss" scoped>
.index {
    display: flex;
    flex-direction: column;

    >.main {
        flex-grow: 1;
        display: flex;

        >.content {
            flex-grow: 1;
        }
    }
}
</style>