function isPrimitiveNonNullishValues(val: any): boolean {
  return typeof val !== "object" && val !== undefined && val !== null;
}

type MergeClassArgs = any | any[] | Record<PropertyKey, unknown>;

function mergeClass(...args: any[]): string;
function mergeClass(args: any[]): string;
function mergeClass(obj: Record<PropertyKey, unknown>): string;

function mergeClass(firstArg: MergeClassArgs, ...restArg: any[]) {
  if (typeof firstArg === "object") {
    if (firstArg instanceof Array) {
      return firstArg.filter(isPrimitiveNonNullishValues).join(" ");
    }
    return mergeClass(
      Object.keys(firstArg).filter((key) =>
        isPrimitiveNonNullishValues(firstArg[key])
      )
    );
  }
  if (typeof firstArg === "string" && restArg.length > 0) {
    return mergeClass([firstArg, ...restArg]);
  }

  return "";
}

console.log(
  mergeClass({
    hello: true,
    what: true,
    "no way": true,
    test: null,
    0: undefined,
  })
);
console.log(
  mergeClass("hello", "what", "no way", 1, null, 0, undefined, "undefined")
);
console.log(mergeClass(["hello", "what", "no way"]));
