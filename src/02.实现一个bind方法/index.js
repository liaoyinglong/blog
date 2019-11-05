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
        console.log(this.a);
        console.log(message);
    }
};
var obj2 = {
    a: "obj2"
};
myBind(obj.say, obj2, "this is message")();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlLEVBQUUsQ0FBQztBQUVsQixTQUFTLE1BQU0sQ0FDYixFQUFLLEVBQ0wsT0FBVTtJQUNWLGNBQVU7U0FBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1FBQVYsNkJBQVU7O0lBRVYsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU0sR0FBRyxHQUFHO0lBQ1YsQ0FBQyxFQUFFLENBQUM7SUFDSixHQUFHLEVBQUgsVUFBSSxPQUFlO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUM7QUFFRixJQUFNLElBQUksR0FBRztJQUNYLENBQUMsRUFBRSxNQUFNO0NBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMifQ==