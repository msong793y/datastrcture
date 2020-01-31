class MaxHeap {

    constructor() {
        this.array = [null];
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;

        let arr = this.array;
        let parentIdx = Math.floor(idx / 2);
        if (arr[parentIdx] > arr[idx]) return;

        [arr[parentIdx], arr[idx]] = [arr[idx], arr[parentIdx]]

        this.siftUp(parentIdx)

    }

    deleteMax() {
        let maxRoot = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1)
    }

    siftDown(idx) {
        let leftChildIdx = idx * 2;

        let rightChildIdx = idx * 2 + 1;


        let arr = this.array;
        let leftChildVal = arr[leftChildIdx];
        let rightChildVal = arr[rightChildIdx];

        if (leftChildVal === undefined) {
            leftChildVal = -Infinity;
        }
        if (rightChildVal === undefined) {
            rightChildVal = -Infinity;
        }


        if (arr[idx] > leftChildVal && arr[idx] > rightChildVal) return;

        let swapIdx
        if (arr[leftChildIdx] > arr[rightChildIdx]) {
            swapIdx = leftChildIdx;
        } else {
            swapIdx = rightChildIdx;
        }

        [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]]

        this.siftDown(swapIdx)

    }
}


let heap = new MaxHeap
heap.insert(1)
heap.insert(5)
heap.insert(14)
heap.insert(4324)
console.log(heap.array)
heap.deleteMax()
console.log(heap.array)