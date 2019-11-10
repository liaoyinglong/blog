import { Fn, StringOrNumber } from "../shared";

export class MyEventEmitter {
  private eventMap = new Map<StringOrNumber, Fn[]>();

  on<F extends Fn>(eventName: StringOrNumber, fn: F) {
    const eventArr = this.eventMap.get(eventName);
    if (eventArr === void 0) {
      this.eventMap.set(eventName, [fn]);
    } else {
      eventArr.push(fn);
    }
  }

  once<F extends Fn>(eventName: StringOrNumber, fn: F) {
    const wrapperFn = () => {
      fn();
      this.off(eventName, wrapperFn);
    };
    this.on(eventName, wrapperFn);
  }

  emit(eventName: StringOrNumber, ...args: any) {
    this.eventMap.get(eventName)?.forEach(fn => {
      fn.apply(void 0, args);
    });
  }

  off<F extends Fn>(eventName: StringOrNumber, fn?: F) {
    if (fn === void 0) {
      this.eventMap.delete(eventName);
      return;
    }
    const eventArr = this.eventMap.get(eventName);
    if (eventArr !== void 0) {
      this.eventMap.set(
        eventName,
        eventArr.filter(item => item !== fn)
      );
    }
  }
}
