type MergeLeft<L, R> = {
  [Key in keyof L | keyof R]: Key extends keyof L
    ? L[Key]
    : Key extends keyof R
    ? R[Key]
    : never;
};

type MergeRight<L, R> = {
  [Key in keyof L | keyof R]: Key extends keyof R
    ? R[Key]
    : Key extends keyof L
    ? L[Key]
    : never;
};

type A = {
  x: number;
  y: number;
  u: number;
  boo: null;
};

type B = {
  u: string;
  v: string;
  boo: boolean;
};

type MergeLeftAB = MergeLeft<A, B>;
type MergeRightAB = MergeRight<A, B>;
