"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据提供的receiver来去除重复的，只留最后一个
 * @param arr
 * @param receiver
 */
function uniq(arr, receiver) {
    var hasMap = new Map();
    return arr.reduce(function (res, cur) {
        var i = hasMap.get(receiver(cur));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQWdCLEdBQVEsRUFBRSxRQUF5QjtJQUNyRSxJQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0lBQ3RDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBTSxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzlCLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNkO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQVhELG9CQVdDIn0=