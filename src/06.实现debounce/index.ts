import { Fn } from "../shared";

export function debounce<F extends Fn>(fn: F, ms = 0) {
  let timer: NodeJS.Timeout;

  function wrapper(...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(null, args);
    }, ms);
  }

  return wrapper;
}
