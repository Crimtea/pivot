<template>
    <div class="sidebar">
        <div class="list">
            <div class="show" v-for="(item, index) in pages" :key="index">
                <div @click="beActive(item)">
                    <div class="icon"></div>
                    {{ item.group || item.title }}
                </div>
                <div v-for="(subItem, subIndex) in item.list" :key="subIndex">
                    <div class="icon"></div>
                    {{ subItem.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pages from '@/router/pages.js';
export default {
    name: 'PivotSidebar',

    data() {
        return {
            pages: pages,
            activeGroup: null,
        };
    },

    mounted() {
        let temp = [];
        let counter = 0;
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i].meta.for) {
                counter = this.pages[i].meta.subnum || 1;
                temp.push({
                    group: this.pages[i].meta.for,
                    list: [],
                })
            }
            if (counter) {
                temp[temp.length - 1].list.push({
                    path: this.pages[i].path,
                    title: this.pages[i].meta.title,
                });
                counter--;
            } else {
                temp.push({
                    path: this.pages[i].path,
                    title: this.pages[i].meta.title,
                });
            }
        }
        this.pages = temp;
    },

    methods: {
        beActive(item) {
            console.log(item);
            if (item.group) {
                this.activeGroup = item.group;
                console.log(this.activeGroup);
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.sidebar {
    width: 200px;

    >.list {
        width: 100%;
        height: 100%;
        background-color: var(--color-gray-300);

        >div {
            display: flex;
            flex-direction: column;
            height: 50px;
            overflow: hidden;
            transition: all .3s ease;
            cursor: pointer;

            &.show {
                height: auto;
                interpolate-size: allow-keywords;
            }

            >div {
                background-color: var(--color-gray-500);
                color: var(--color-black);
                flex-shrink: 0;
                height: 50px;
                display: flex;
                align-items: center;
                overflow: hidden;

                &:hover {
                    background-color: var(--color-gray-600);
                }

                >.icon {
                    width: 22px;
                    height: 22px;
                    margin: 0 7px;
                    background-color: red;
                }
            }
        }
    }
}
</style>