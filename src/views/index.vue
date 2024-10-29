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
        height: calc(100% - 60px);
        display: flex;

        >.content {
            flex-grow: 1;
            background-color: var(--color-bg);
            height: calc(100% - 20px);
            margin: 10px;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 3px;
            border: 1px solid var(--color-border);
            box-shadow: 0 0 2px var(--color-border);
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 6px;
                background-color: var(--color-scrollbar-bg);
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--color-scrollbar-thumb);
                cursor: pointer;
                border-radius: 3px;
            }
        }
    }
}
</style>