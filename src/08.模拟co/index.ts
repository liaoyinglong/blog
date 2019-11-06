import { StringOrNumber } from "../shared";

type R = StringOrNumber | Promise<StringOrNumber>;

export function co<F extends () => Generator<R, any, any>>(gen: F) {
  const fn = gen();

  function next(res: IteratorResult<R>): IteratorResult<R>["value"] {
    if (res.done) {
      return res.value;
    }

    if (typeof res.value === "string" || typeof res.value === "number") {
      return next(fn.next(res.value));
    }

    return res.value.then((val: any) => {
      return next(fn.next(val));
    });
  }

  return next(fn.next());
}
