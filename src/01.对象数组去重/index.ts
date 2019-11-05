/**
 * 根据提供的receiver来去除重复的，只留最后一个
 * @param arr
 * @param receiver
 */
export function uniq<T extends any>(arr: T[], receiver: (cur: T) => any) {
  const hasMap = new Map<any, number>();
  return arr.reduce<T[]>((res, cur) => {
    const i = hasMap.get(receiver(cur));
    if (i !== void 0) {
      res[i] = cur;
    } else {
      hasMap.set(cur.id, res.push(cur) - 1);
    }
    return res;
  }, []);
}
