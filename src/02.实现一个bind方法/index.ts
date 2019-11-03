import { Fn } from "src/shared";

export default {};

function myBind<F extends Fn, T extends any, A extends any[]>(
  fn: F,
  thisArg: T,
  ...args: A
) {
  return () => {
    return fn.apply(thisArg, args);
  };
}

const obj = {
  a: 1,
  say(message: string) {
    // @ts-ignore
    console.log(this.a);
    console.log(message);
  }
};

const obj2 = {
  a: "obj2"
};

myBind(obj.say, obj2, "this is message")();
