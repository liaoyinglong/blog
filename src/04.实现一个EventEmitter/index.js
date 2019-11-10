"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyEventEmitter {
    constructor() {
        this.eventMap = new Map();
    }
    on(eventName, fn) {
        const eventArr = this.eventMap.get(eventName);
        if (eventArr === void 0) {
            this.eventMap.set(eventName, [fn]);
        }
        else {
            eventArr.push(fn);
        }
    }
    once(eventName, fn) {
        const wrapperFn = () => {
            fn();
            this.off(eventName, wrapperFn);
        };
        this.on(eventName, wrapperFn);
    }
    emit(eventName, ...args) {
        var _a;
        (_a = this.eventMap.get(eventName)) === null || _a === void 0 ? void 0 : _a.forEach(fn => {
            fn.apply(void 0, args);
        });
    }
    off(eventName, fn) {
        if (fn === void 0) {
            this.eventMap.delete(eventName);
            return;
        }
        const eventArr = this.eventMap.get(eventName);
        if (eventArr !== void 0) {
            this.eventMap.set(eventName, eventArr.filter(item => item !== fn));
        }
    }
}
exports.MyEventEmitter = MyEventEmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsY0FBYztJQUEzQjtRQUNVLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQXNDckQsQ0FBQztJQXBDQyxFQUFFLENBQWUsU0FBeUIsRUFBRSxFQUFLO1FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFlLFNBQXlCLEVBQUUsRUFBSztRQUNqRCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLFNBQXlCLEVBQUUsR0FBRyxJQUFTOztRQUMxQyxNQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQywwQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFlLFNBQXlCLEVBQUUsRUFBTTtRQUNqRCxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDZixTQUFTLEVBQ1QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FDckMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGO0FBdkNELHdDQXVDQyJ9