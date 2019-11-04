### 在 constructor 中 bind this 的优点

```javascript
class A {
  foo = () => {
    console.log(this.foo);
  };
}

class B {
  constructor() {
    this.foo = this.foo.bind(this);
  }
  foo() {
    console.log(this.foo);
  }
}
```

#### 题目：为什么在`react`项目中，`class B`绑定事件的方式会比第一种好？

##### 分析编译完成的代码

看一下`typescript`编译完的代码：

```javascript
"use strict";
var A = /** @class */ (function() {
  function A() {
    var _this = this;
    this.foo = function() {
      console.log(_this.foo);
    };
  }
  return A;
})();
var B = /** @class */ (function() {
  function B() {
    this.foo = this.foo.bind(this);
  }
  B.prototype.foo = function() {
    console.log(this.foo);
  };
  return B;
})();
```

- `class A` 编译完了是在每个实例上都挂载`foo`的方法。
- `class B` 的声明方式是在原型上挂载`foo`这个方法。

假设组件`A`被复用多份，那么每个实例对象都会重新定义开辟`foo`方法需要的内存。

##### 打开 chrome 调试测试

- `class A` ![class-a对应内存快照](./class-a对应内存快照.png)

- `class B` ![class-b对应内存快照](./class-b对应内存快照.png)

#### 得出结论

`class B` 这种声明方式每个对象所占的内存小了。在组件多次复用之后会节省内存。

#### TODO

**但是**我们也看到整个页面所占的内存并没有很大变化？稳定之后都是 10.3M。需要进一步探索
