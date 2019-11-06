"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(fn, ms = 0) {
    let timer;
    function wrapper(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args);
        }, ms);
    }
    return wrapper;
}
exports.debounce = debounce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLFFBQVEsQ0FBZSxFQUFLLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDbEQsSUFBSSxLQUFxQixDQUFDO0lBRTFCLFNBQVMsT0FBTyxDQUFDLEdBQUcsSUFBVztRQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFaRCw0QkFZQyJ9