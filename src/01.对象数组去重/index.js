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
