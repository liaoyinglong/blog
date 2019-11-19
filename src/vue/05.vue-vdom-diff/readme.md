## vue-vdom-diff

分为以下几个流程：

1. `newVNode === undefined && oldVNode !== undefined` 直接做移除操作。
2. `oldVNode === undefined` 做新增操作。
3. `isSomeVNode(oldVNode,newVNode) === true` 进入`children`的`patch`流程。
4. 进入更新当前`VNode`流程。

### vnode updateChildren 流程

`vnode children`的更新流程跟数组操作类似。

1. [类似`shift` 移除前面的 `vnode`](shift)

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [c, d];
   ```

2. [类似`unshift` 在最前面插入`vnode`](unshift)

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [e, f, a, b, c, d];
   ```

3. [类似`pop` 移除后面的`vnode`](pop)

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [a, b];
   ```

4. [类似`push` 在最后面插入`vnode`](push)

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [a, b, c, d, e, f];
   ```

5. 类似`insert` 对中间部分新增

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [a, b, e, f, c, d];
   ```

6. 类似`del` 对中间部分删除

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [a, d];
   ```

以上是分成的原子操作，但是实际生产中可能发生的情况更加复杂，是上面的任意组合。

#### patchChildren 比较流程

循环判断条件：`oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx`，即还没有遍历完`oldCh` 或者 `newCh`，只要有一个遍历完了，就会跳出循环。

1. 首先判断旧的开始节点`oldStartVnode`是否为空

   1.1 为空的话，将`oldStartIdx`向后偏移一位，并重新对`oldStartVnode = oldCh[++oldStartIdx]`进行赋值，满足循环的情况下重新进入步骤`1`。

2. 判断旧的结束节点`oldEndVnode`是否为空

   2.1 为空的话，将`oldEndIdx`向前偏移一位，并重新对`oldEndVnode = oldCh[--oldEndIdx]`进行赋值，满足循环的情况下重新进入步骤`1`。

3. 对比新旧的开始节点`sameVnode(oldStartVnode, newStartVnode)`是否是同一个`VNode`

   3.1 是同一个`VNode`，进入他们的`children patch`流程。

   3.2 将`oldStartIdx`、`newStartIdx`继续向后偏移一位，并对`oldStartVnode`、`newStartVnode`进行重新赋值，满足循环的情况下重新进入步骤`1`。

4. 对比新旧的结束节点`sameVnode(oldEndVnode, newEndVnode)`是否是同一个`VNode`

   4.1 是同一个`VNode`，进入他们的`children patch`流程。

   4.2 将`oldEndIdx`、`newEndIdx`继续向后偏移一位，并对`oldEndVnode`、`newEndVnode`进行重新赋值，满足循环的情况下重新进入步骤`1`。

5. 对比旧的开始节点、新的结束节点`sameVnode(oldStartVnode, newEndVnode)`是否是同一个`VNode`

   5.1 是同一个`VNode`，进入他们的`children patch`流程。

   5.2 如果不是在`<transition-group>`组件内用的话，将`oldStartVnode.elm`移动`oldEndVnode.elm.nextSibling`的位置。

   5.3 `oldStartIdx`向后偏移一位，`newEndIdx`向前偏移一位。

   5.4 并对`oldStartVnode`、`newEndVnode`进行重新赋值，满足循环的情况下重新进入步骤`1`。

6. 对比旧的结束节点、新的开始节点`sameVnode(oldEndVnode, newStartVnode)`是否是同一个`VNode`

   6.1 是同一个`VNode`，进入他们的`children patch`流程。

   6.2 如果不是在`<transition-group>`组件内用的话，将`oldEndVnode.elm`移动`oldStartVnode.elm.nextSibling`的位置。

   6.3 `oldEndIdx`向前偏移一位，`newStartIdx`向后偏移一位。

   6.4 并对`oldEndVnode`、`newStartVnode`进行重新赋值，满足循环的情况下重新进入步骤`1`。

7. 建立`oldKeyToIdx`这个`map`，数据结构如下：

   ```typescript
   interface OldKeyToIdxMap {
     [key: string]: number;
   }
   ```

   7.1 根据`newStartVnode.key`去`oldKeyToIdx`找对于旧的`VNode`的`idxInOld`。

   7.1.1 未找到，根据`newStartVnode`重新创建元素。

   7.1.2 取出并赋值`vnodeToMove = oldCh[idxInOld]`。

   7.1.2.1 判断`sameVnode(vnodeToMove, newStartVnode)`。

   7.1.2.1.1 为`true`，进入他们的`children patch`流程。

   7.1.2.1.2 将旧的赋值成`oldCh[idxInOld] = undefined`

   7.1.2.1.2 并移动`nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)`

   7.1.3 `newStartIdx`向后偏移一位，满足循环的情况下重新进入步骤`1`。

不满足循环条件。

1. `oldStartIdx > oldEndIdx`，进入创建新增的`VNode`流程。
2. `newStartIdx > newEndIdx`，进入移除`oldCh`里面的`VNode`流程。
