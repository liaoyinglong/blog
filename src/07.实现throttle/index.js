"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throttle(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var timer;
    function wrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                fn.apply(null, args);
            }, ms);
        }
    }
    return wrapper;
}
exports.throttle = throttle;
var throttleFn = throttle(function () {
    console.log(1);
}, 1000);
for (var i = 0; i < 3000; i++) {
    setTimeout(function () {
        throttleFn();
    }, i);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLFFBQVEsQ0FBZSxFQUFLLEVBQUUsRUFBTTtJQUFOLG1CQUFBLEVBQUEsTUFBTTtJQUNsRCxJQUFJLEtBQTRCLENBQUM7SUFDakMsU0FBUyxPQUFPO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQVpELDRCQVlDO0FBRUQsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3QixVQUFVLENBQUM7UUFDVCxVQUFVLEVBQUUsQ0FBQztJQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNQIn0=