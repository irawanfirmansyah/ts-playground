import fs from "fs";
const obj: Record<number, number> = {};

// Best not use this with n > 15
function fibo(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 2) + fibo(n - 1);
}

let content = "";

function fibo_2(n: number): number {
  content += n + ", " + JSON.stringify(obj) + "\n";
  if (n <= 0) return 0;
  if (n === 1) return 1;

  if (obj[n] !== undefined) {
    return obj[n];
  }

  obj[n - 1] = fibo_2(n - 1);
  obj[n - 2] = fibo_2(n - 2);

  return fibo_2(n - 2) + fibo_2(n - 1);
}

function fibo_3(n: number): number {
  const tup = [0, 1];

  // [0, 1] -> [1, 1] -> [1, 2] -> [2, 3] -> [3, 5] -> [5, 8] ....

  if (n <= 0) return tup[0];

  if (n === 1) return tup[1];

  for (let i = 2; i < n; i++) {
    let nextValue = tup[0] + tup[1];

    tup[0] = tup[1];
    tup[1] = nextValue;
  }

  return tup[0] + tup[1];
}

function waitThisFunction<T extends (...args: any) => any>(fn: T) {
  return function (...args: Parameters<T>) {
    return new Promise((res, rej) => {
      try {
        res(fn(args));
      } catch (e) {
        rej(e);
      }
    });
  };
}

(async function () {
  const waitFiboFunc2 = waitThisFunction(fibo_2);
  const waitFiboFunc3 = waitThisFunction(fibo_3);

  console.time("fibo 2");
  const res2 = await waitFiboFunc2(100);
  content += res2 + "\n";
  console.timeEnd("fibo 2");
  console.log(res2);

  console.time("fibo 3");
  const res3 = await waitFiboFunc3(100);
  console.timeEnd("fibo 3");
  console.log(res3);
  fs.writeFileSync("./out.txt", content, { encoding: "utf-8", flag: "w" });
})();
