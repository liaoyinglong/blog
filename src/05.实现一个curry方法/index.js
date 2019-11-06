"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry(fn) {
    return function curryWrapper(...args) {
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        }
        return function (...restArgs) {
            return curryWrapper(...args, ...restArgs);
        };
    };
}
exports.curry = curry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLEtBQUssQ0FBZSxFQUFLO0lBQ3ZDLE9BQU8sU0FBUyxZQUFZLENBQUMsR0FBRyxJQUFXO1FBQ3pDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLFVBQVMsR0FBRyxRQUFlO1lBQ2hDLE9BQU8sWUFBWSxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVZELHNCQVVDIn0=