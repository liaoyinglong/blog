## vue-vdom-diff

分为以下几个流程：

1. `newVNode === undefined && oldVNode !== undefined` 直接做移除操作。
2. `oldVNode === undefined` 做新增操作。
3. `isSomeVNode(oldVNode,newVNode) === true` 进入`children`的`patch`流程。
4. 进入更新当前`VNode`流程。

### vnode updateChildren 流程

`vnode children`的更新流程跟数组操作类似。

1. 类似`shift` 移除前面的 `vnode`

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [c, d];
   ```

2. 类似`unshift` 在最前面插入`vnode`

   ```js
   oldVnode = [a, b, c, d];
   newVnode = [e, f, a, b, c, d];
   ```

3. 类似`pop` 移除后面的`vnode`

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
