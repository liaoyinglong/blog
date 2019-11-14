## 在 `Vue` 中，子组件可不可以修改父组件传递的 `Prop`

### 父组件传递过来的是基本类型的值，如:`string`,`number`,`boolean`,`undefined`,`null`

- **不可以修改**。
- 修改之后会报错。
- 修改之后会导致父组件跟子组件的值不一致。

### 父组件传递过来的值是引用类型，如:`array`,`object`

- 修改属性

  - **不推荐修改**。
  - 修改之后不会报错。
  - 修改之后父组件和子组件的值还会一致，这是利用`js`引用类型数据的特性。

- 改变引用

  - **不可以修改**。
  - 修改之后会报错。
  - 修改之后会导致父组件跟子组件的值不一致。

## 为什么不推荐子组件直接修改父组件的值？

违反了**单向数据流**原则。
所有的 `prop` 都使得其父子 `prop` 之间形成了一个单向下行绑定：父级 `prop` 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

另外，每次父级组件发生更新时，子组件中所有的 `prop` 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 `prop`。

## 如果修改了，`Vue` 是如何监控到属性的修改并给出警告的。

**注：在`production`环境是不会给警告的**

在`src/core/instance/state.js`的`initProps`方法里面。

`defineReactive`方法给`props`添加了`setter`回调（即第四个参数`customSetter`），在`process.env.NODE_ENV !== 'production'`的情况下修改`props`的值得时候会执行。

```javascript
defineReactive(props, key, value, () => {
  if (!isRoot && !isUpdatingChildComponent) {
    warn(
      `Avoid mutating a prop directly since the value will be ` +
        `overwritten whenever the parent component re-renders. ` +
        `Instead, use a data or computed property based on the prop's ` +
        `value. Prop being mutated: "${key}"`,
      vm
    );
  }
});
```

#### 那么怎么判断是在子组件修改的？

以下面的例子来说

```vue
<script>
export default {
  props: ["parentData"],
  methods: {
    changeParentData(newVal) {
      this.parentData = newVal;
      // 上一行代码相当于 this._props.parentData = newVal
      // 随后触发 _props 的 setter 回调
      // 满足了 !isRoot && !isUpdatingChildComponent 这两个条件之后打印警告
      // isRoot 为 false，因为不是 根 组件
      // isUpdatingChildComponent 的值默认为false，并且只在 src/core/instance/lifecycle.js 里面的 updateChildComponent 方法修改为true
      // 刚刚的逻辑是没有这一步的，所以必然为 false
    }
  }
};
</script>
```
