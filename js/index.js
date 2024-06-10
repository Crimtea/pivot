let author = '6721143105810921163101897';
let list = author.split('2')
let temp = []
for (let i in list) {
    temp.push(...list[i].split('3'))
}
list = [];
for (let i in temp) {
    list.push(...temp[i].split('8'))
}
console.log(list);
author = ''
for (let i in list) {
    author += String.fromCharCode(Number(list[i]))
}
var app = new Vue({
    el: `#${author}`,
    data: {
        author: author,
        canArea: -1,
        nextCanArea: null,
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
        dataWatcher: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        turn: -1,
        end: false,
    },
    methods: {
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
        check(tissueIndex, cellIndex, test) {
            let data = [];
            if (typeof tissueIndex === 'number') {
                data = [...this.data[tissueIndex]];
                if (test) {
                    data.splice(cellIndex, 1, this.turn)
                }
            } else {
                data = [...this.dataWatcher];
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
        occupy(tissueIndex) {
            let sign = [, , , , this.turn, , , , ,];
            this.data.splice(tissueIndex, 1, sign);
            this.dataWatcher.splice(tissueIndex, 1, this.turn);
            if (this.check(true, tissueIndex)) {
                this.data[4].splice(4, 1, this.turn)
                this.end = true;
            }
        },
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
        clearNext() {
            this.nextCanArea = null;
        },
    }
})