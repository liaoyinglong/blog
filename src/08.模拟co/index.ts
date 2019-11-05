import { sleep } from "../shared/sleep";

type R = string | Promise<string>;

export function co<F extends () => Generator<R, any, any>>(gen: F) {
  const fn = gen();

  function next(res: IteratorResult<R, any>): any {
    if (!res.done) {
      if (typeof res.value === "string") {
        return next(fn.next(res.value));
      }
      return res.value.then(val => {
        next(fn.next(val));
      });
    }
  }

  return next(fn.next());
}

function* test() {
  let r: string;
  r = yield "a";
  console.log("r", r);
  r = yield "b";
  console.log("r", r);
  r = yield "c";
  console.log("r", r);
}

co(test);
co(test2);

function* test2() {
  let r: string;
  r = yield sleep(1000, "aa");
  console.log("r", r);
  r = yield sleep(2000, "bb");
  console.log("r", r);
  r = yield sleep(3000, "cc");
  console.log("r", r);
}
