class QuickSort1 {
  private static _partition(arr: number[], lo: number, hi: number): number {
    let i = lo,
      j = hi;

    const pivot = arr[(lo + hi) / 2];

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      }
    }

    return i;
  }

  private static _sort(arr: number[], lo: number, hi: number) {
    if (lo < hi) {
      const index = this._partition(arr, lo, hi);
      this._sort(arr, lo, index - 1);
      this._sort(arr, index, hi);
    }
  }

  public static sort(arr: number[]): void {
    this._sort(arr, 0, arr.length - 1);
  }
}

function quickSort1Main() {
  const arr1 = [9, 8, 7, 6, 5, 4, 3];
  const arr = [1, 5, 12, 6, 14, 9, -1];
  console.log({ inp: arr });
  QuickSort1.sort(arr);
  console.log({ res: arr });
}

quickSort1Main();
