class QuickSort {
  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  private static _parition(arr: number[], lo: number, hi: number): number {
    let i = lo;
    let j = hi;

    const pivot = arr[lo];

    while (i < j) {
      do {
        i++;
      } while (arr[i] <= pivot);
      do {
        j--;
      } while (arr[j] > pivot);

      if (i < j) {
        this._swap(arr, i, j);
      }
    }
    this._swap(arr, lo, j);
    return j;
  }

  private static _quickSort(arr: number[], lo: number, hi: number): void {
    if (lo < hi) {
      const pivotIdx = this._parition(arr, lo, hi);
      this._quickSort(arr, lo, pivotIdx);
      this._quickSort(arr, pivotIdx + 1, hi);
    }
  }

  public static sort(arr: number[]): void {
    this._quickSort(arr, 0, arr.length);
  }
}

function quickSortMain() {
  const arr1 = [9, 8, 7, 6, 5, 4, 3];
  const arr = [1, 5, 12, 6, 14, 9, -1];
  console.log({ inp: arr });
  QuickSort.sort(arr);
  console.log({ res: arr });
}

quickSortMain();
