"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据提供的receiver来去除重复的，只留最后一个
 * @param arr
 * @param receiver
 */
function uniq(arr, receiver) {
    const hasMap = new Map();
    return arr.reduce((res, cur) => {
        const i = hasMap.get(receiver(cur));
        if (i !== void 0) {
            res[i] = cur;
        }
        else {
            hasMap.set(cur.id, res.push(cur) - 1);
        }
        return res;
    }, []);
}
exports.uniq = uniq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQWdCLEdBQVEsRUFBRSxRQUF5QjtJQUNyRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0lBQ3RDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDZDthQUFNO1lBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFYRCxvQkFXQyJ9