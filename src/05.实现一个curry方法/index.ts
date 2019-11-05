import { Fn } from "../shared";

export function curry<F extends Fn>(fn: F) {
  return function curryWrapper(...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }

    return function(...restArgs: any[]) {
      return curryWrapper(...args, ...restArgs);
    };
  };
}
