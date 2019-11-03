"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function myBind(fn, thisArg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return function () {
        return fn.apply(thisArg, args);
    };
}
var obj = {
    a: 1,
    say: function (message) {
        // @ts-ignore
        console.log(this.a);
        console.log(message);
    }
};
var obj2 = {
    a: "obj2"
};
myBind(obj.say, obj2, "this is message")();
