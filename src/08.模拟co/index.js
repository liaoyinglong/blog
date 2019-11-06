"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function co(gen) {
    const fn = gen();
    function next(res) {
        if (res.done) {
            return res.value;
        }
        if (typeof res.value === "string" || typeof res.value === "number") {
            return next(fn.next(res.value));
        }
        return res.value.then((val) => {
            return next(fn.next(val));
        });
    }
    return next(fn.next());
}
exports.co = co;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLFNBQWdCLEVBQUUsQ0FBeUMsR0FBTTtJQUMvRCxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUVqQixTQUFTLElBQUksQ0FBQyxHQUFzQjtRQUNsQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDbEI7UUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBbEJELGdCQWtCQyJ9