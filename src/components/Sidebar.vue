<template>
    <div class="sidebar">
        <div class="list">
            <div :class="{ show: item.show }" v-for="(item, index) in pages" :key="index">
                <div @click="changeActive(item)" :class="{ group: item.group, active: $route.path == item.path }">
                    <div class="icon"></div>
                    {{ item.group || item.title }}
                </div>
                <div :class="{ active: $route.path == subItem.path }" v-for="(subItem, subIndex) in item.list"
                    :key="subIndex" @click="changeActive(subItem)">
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
        };
    },

    mounted() {
        let temp = [];
        let counter = 0;
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i].meta.for) {
                counter = this.pages[i].meta.subnum || 1;
                temp.push({
                    show: false,
                    group: this.pages[i].meta.for,
                    list: [],
                })
            }
            if (counter) {
                if (this.$route.path == this.pages[i].path) {
                    console.log(temp[temp.length - 1].show = true);
                }
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
        changeActive(item) {
            if (item.group) {
                item.show = !item.show;
            } else {
                this.$router.push(item.path);
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.sidebar {
    width: 180px;
    height: 100%;

    >.list {
        width: 100%;
        height: 100%;
        background-color: var(--color-sidebar-bg);
        overflow-x: hidden;
        padding: 0 !important;

        &::-webkit-scrollbar {
            display: none;
        }

        >div {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 40px;
            transition: all .3s ease;
            cursor: pointer;
            interpolate-size: allow-keywords;

            &.show {
                height: auto;

                >.group {
                    >.icon {
                        height: 11px;
                    }
                }
            }

            >div {
                user-select: none;
                flex-shrink: 0;
                display: flex;
                height: 40px;
                align-items: center;
                overflow: hidden;
                color: var(--color-sidebar-item-font);

                &.active {
                    background-color: var(--color-primary);
                }

                &.group {
                    background-color: var(--color-sidebar-group-bg);

                    >.icon {
                        width: 11px;
                        height: 2px;
                        margin: 0 7px;
                        transition: height .2s;
                    }
                }

                &.group~div {
                    >.icon {
                        margin: 0 7px 0 24px;
                    }
                }

                &:not(.group) {
                    >.icon {
                        width: 7px;
                        height: 7px;
                        margin: 0 9px;
                        border-radius: 50%;
                    }
                }

                >.icon {
                    transition: height .2s;
                    background-color: var(--color-sidebar-item-font);
                }
            }
        }
    }
}
</style>