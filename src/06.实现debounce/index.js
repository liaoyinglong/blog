"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var timer;
    function wrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(null, args);
        }, ms);
    }
    return wrapper;
}
exports.debounce = debounce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLFFBQVEsQ0FBZSxFQUFLLEVBQUUsRUFBTTtJQUFOLG1CQUFBLEVBQUEsTUFBTTtJQUNsRCxJQUFJLEtBQXFCLENBQUM7SUFFMUIsU0FBUyxPQUFPO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDakIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFaRCw0QkFZQyJ9