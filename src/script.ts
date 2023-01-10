function qs(arr: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  let idx = lo - 1;
  const pivot = arr[hi];

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quick_sort(arr: number[]) {
  qs(arr, 0, arr.length - 1);
}

function main() {
  const arr1 = [9, 8, 7, 6, 5, 4, 3];
  const arr = [1, 5, 12, 6, 14, 9, -1];
  console.log({ arr });
  quick_sort(arr);
  console.log({ arr });
}

main();

qs(0, 6, [1, 5, 12, 6, 14, 9, -1])
  part -> finArr = [-1, 5, 12, 6, 14, 9, 1]
          pivotIdx = 0

qs(1, 6, [-1, 5, 12, 6, 14, 9, 1])
  part -> finArr = [-1, 1, 12, 6, 14, 9, 5]
          pivotIdx = 1

qs(2, 6, [-1, 1, 12, 6, 14, 9, 5])
  part -> finArr = [-1, 1, 5, 6, 14, 9, 12]
          pivotIdx = 2

qs(3, 6, [-1, 1, 5, 6, 14, 9, 12])
  part -> finArr = [-1, 1, 5, 6, 14, 9, 12]