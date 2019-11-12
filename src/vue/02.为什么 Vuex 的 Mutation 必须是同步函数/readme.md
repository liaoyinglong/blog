## 为什么 Vuex 的 Mutation 必须是同步函数?

### 来自 Vuex 文档的解释

> 一条重要的原则就是要记住 mutation 必须是同步函数。为什么？请参考下面的例子：
>
> ```javascript
> export default {
>   mutations: {
>     someMutation(state) {
>       api.callAsyncMethod(() => {
>         state.count++;
>       });
>     }
>   }
> };
> ```
>
> 现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。

### mutation 变更状态的流程

```javascript
// store.js
export default new Vuex.Store({
  state: { count: 0 },
  actions: {
    incrementAction: ({ commit }) => commit("increment")
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
```

```javascript
// counter.vue
import { mapActions } from "vuex";

export default {
  methods: mapActions(["incrementAction"])
};
```

以这个`counter`的例子来解释触发`mutation`的流程。

1. 组件调用映射过来的`incrementAction`方法的时候，相当于`this.$store.dispatch('incrementAction')`,触发的就是`Store`实例上的`dispatch`方法。
2. `actions`的处理函数总是接受 `context` 作为第一个参数，`payload` 作为第二个参数（可选）。
   context 对象包含以下属性:

```javascript
const context = {
  state, // 等同于 `store.state`，若在模块中则为局部状态
  rootState, // 等同于 `store.state`，
  rootGetters, // 等同于 `store.getters`，
  commit, // 等同于 `store.commit`
  dispatch, // 等同于 `store.dispatch`
  getters // 等同于 `store.getters` 若在模块中则为局部状态
};
```

所以`({ commit }) => commit("increment")` 相当于`store.commit('increment')`

3. 进入`store.commit`方法，最终调用会调用 normalize 过的`mutations`处理函数直接更改状态。

```javascript
// handler 就是在 mutations 选项定义的方法
// handler 在registerMutation的时候已经被柯里化过的，第一个参数是 当前模块的state,所以这里只需要传第二个参数，也就是commit方法接收到的payload即可
// this = store
const entry = this._mutations[type];
this._withCommit(() => {
  entry.forEach(function commitIterator(handler) {
    handler(payload);
  });
});
this._subscribers.forEach(sub => sub(mutation, this.state));
```

从以上流程上来看，即使是异步的`mutations`理论上也是没有其他副作用的，都可以正确的更改状态。

那我们回过头来看文档上只是写的异步`mutation`对应用`debug`不友好，并没有说其他的情况。

### 进入`vue-devtool`记录`mutation`变更流程

`devtools`作为内置插件会在`new Store`的时候自动注册。

```javascript
// src/plugins/devtool.js
// 省略了其他无关的代码
// 订阅 store 的 mutation。
store.subscribe((mutation, state) => {
  devtoolHook.emit("vuex:mutation", mutation, state);
});
```

`handler` 会在每个 `mutation` 完成后调用，接收 `mutation` 和经过 `mutation` 后的状态作为参数。问题就在这里。

```javascript
// 对应执行`mutation` 和 `handler`的时候
const entry = this._mutations[type];
this._withCommit(() => {
  entry.forEach(function commitIterator(handler) {
    // 这里的handler 是  mutation
    // 假如这个 mutation 调用完成后，状态并没有更改
    // 那么紧接着下边通过订阅着的逻辑就同步触发，那么vuex接收到的状态就还是未更改前的
    // 那么去vue-devtools查看状态的时候就会发现mutation触发完成了但是状态并没有更改
    // 此时的 time-travel 也就相应的没有任何意义
    handler(payload);
  });
});
this._subscribers.forEach(sub => sub(mutation, this.state));
```

### 如果 Mutation 是异步函数会造成什么问题？

会使得 debug 麻烦，使得`vue-devtool`的时间旅行功能不能用。

### 如何避免这个问题的？

开启严格模式。在异步回调的函数里面修改`state`将会在开发环境报错。

### 附上尤雨溪的回答

[vuex 中为什么把把异步操作封装在 action，把同步操作放在 mutations？ - 尤雨溪的回答 - 知乎](https://www.zhihu.com/question/48759748/answer/112823337)
