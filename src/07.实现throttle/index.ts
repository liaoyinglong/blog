import { Fn } from "../shared";

export function throttle<F extends Fn>(fn: F, ms = 0) {
  let timer: NodeJS.Timeout | null;
  function wrapper(...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(null, args);
      }, ms);
    }
  }

  return wrapper;
}

var throttleFn = throttle(() => {
  console.log(1);
}, 1000);

for (let i = 0; i < 3000; i++) {
  setTimeout(() => {
    throttleFn();
  }, i);
}
