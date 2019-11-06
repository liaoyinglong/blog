"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function myBind(fn, thisArg, ...args) {
    return () => {
        return fn.apply(thisArg, args);
    };
}
const obj = {
    a: 1,
    say(message) {
        console.log(this.a);
        console.log(message);
    }
};
const obj2 = {
    a: "obj2"
};
myBind(obj.say, obj2, "this is message")();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlLEVBQUUsQ0FBQztBQUVsQixTQUFTLE1BQU0sQ0FDYixFQUFLLEVBQ0wsT0FBVSxFQUNWLEdBQUcsSUFBTztJQUVWLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxHQUFHLEdBQUc7SUFDVixDQUFDLEVBQUUsQ0FBQztJQUNKLEdBQUcsQ0FBQyxPQUFlO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLElBQUksR0FBRztJQUNYLENBQUMsRUFBRSxNQUFNO0NBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMifQ==