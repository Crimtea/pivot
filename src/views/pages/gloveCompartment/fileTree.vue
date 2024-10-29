<template>
    <div class="file-tree">
        <div class="list">
            <div class="item">A</div>
            <div class="item">B</div>
            <div class="item">C</div>
            <div class="item">D</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PivotFileTree',

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
.file-tree {
    >.list {
        display: flex;
        flex-direction: column;
    }
}
</style>