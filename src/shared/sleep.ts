export function sleep<T extends number | string>(ms: number, arg?: T) {
  return new Promise<T>(resolve => {
    setTimeout(() => {
      resolve(arg);
    }, ms);
  });
}
