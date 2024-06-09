var app = new Vue({
    el: "#app",
    data: {
        // 可选区域
        canArea: -1,
        // 下一个可选区域
        nextCanArea: null,
        // 存储原数据
        data: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 初始玩家
        turn: -1,
    },
    methods: {
        // 标记
        sign(tissueIndex, cellIndex) {
            if (tissueIndex != this.canArea && this.canArea != -1) {
                return 0
            }
            if (this.data[tissueIndex][cellIndex] != 0) {
                return 0
            }
            this.data[tissueIndex].splice(cellIndex, 1, this.turn)
            if (this.check(tissueIndex, cellIndex)) {
                this.occupy(tissueIndex);
            }
            this.turn *= -1;
            this.canArea = this.nextCanArea;
            this.clearNext();
        },
        // 检查
        check(tissueIndex, cellIndex, test) {
            let data = [...this.data[tissueIndex]];
            if (test) {
                data.splice(cellIndex, 1, this.turn)
            }
            let i = cellIndex;
            let u = i - ((i / 3 < 1) ? -6 : 3);
            let b = i + ((i / 3 >= 2) ? -6 : 3);
            let l = i - ((i % 3 == 0) ? -2 : 1);
            let r = i + ((i % 3 == 2) ? -2 : 1);;
            let checkList = [
                [u, i, b],
                [l, i, r],
                [0, 4, 8],
                [2, 4, 6]
            ]
            for (let i of checkList) {
                if (
                    data[i[0]] == this.turn
                    && data[i[0]] == data[i[1]]
                    && data[i[0]] == data[i[2]]
                    && data[i[1]] == data[i[2]]
                ) {
                    return true
                }
            }
            return false
        },
        // 替换
        occupy(tissueIndex) {
            let sign = [];
            for (let i = 0; i < 9; i++) {
                sign.push(this.turn);
            }
            this.data.splice(tissueIndex, 1, sign)
        },
        // 待选下一个
        next(tissueIndex, cellIndex) {
            if (this.data[tissueIndex][cellIndex] != 0) {
                return 0
            }
            if (this.canArea != -1 && this.canArea != tissueIndex) {
                return 0
            }
            if (this.data[cellIndex].filter(item => item == 0).length == 0) {
                this.nextCanArea = -1;
                return 0
            }
            if (this.data[tissueIndex].filter(item => item == 0).length == 1) {
                this.nextCanArea = -1;
                return 0
            }
            if (this.check(tissueIndex, cellIndex, true) && tissueIndex == cellIndex) {
                this.nextCanArea = -1;
                return 0
            }
            this.nextCanArea = cellIndex;
        },
        // 取消待选下一个
        clearNext() {
            this.nextCanArea = null;
        },
    }
})