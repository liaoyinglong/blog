"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEventEmitter = /** @class */ (function () {
    function MyEventEmitter() {
        this.eventMap = new Map();
    }
    MyEventEmitter.prototype.on = function (eventName, fn) {
        var eventArr = this.eventMap.get(eventName);
        if (eventArr === void 0) {
            this.eventMap.set(eventName, [fn]);
        }
        else {
            eventArr.push(fn);
        }
    };
    MyEventEmitter.prototype.once = function (eventName, fn) {
        var _this = this;
        var wrapperFn = function () {
            fn();
            _this.off(eventName, wrapperFn);
        };
        this.on(eventName, wrapperFn);
    };
    MyEventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var eventArr = this.eventMap.get(eventName);
        if (eventArr !== void 0) {
            eventArr.forEach(function (fn) {
                fn.apply(void 0, args);
            });
        }
    };
    MyEventEmitter.prototype.off = function (eventName, fn) {
        if (fn === void 0) {
            this.eventMap.delete(eventName);
            return;
        }
        var eventArr = this.eventMap.get(eventName);
        if (eventArr !== void 0) {
            this.eventMap.set(eventName, eventArr.filter(function (item) { return item !== fn; }));
        }
    };
    return MyEventEmitter;
}());
exports.MyEventEmitter = MyEventEmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7UUFDVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFzQ3JELENBQUM7SUFwQ0MsMkJBQUUsR0FBRixVQUFpQixTQUF5QixFQUFFLEVBQUs7UUFDL0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQW1CLFNBQXlCLEVBQUUsRUFBSztRQUFuRCxpQkFNQztRQUxDLElBQU0sU0FBUyxHQUFHO1lBQ2hCLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxTQUF5QjtRQUFFLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVosNkJBQVk7O1FBQzFDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO2dCQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFrQixTQUF5QixFQUFFLEVBQU07UUFDakQsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHdDQUFjIn0=