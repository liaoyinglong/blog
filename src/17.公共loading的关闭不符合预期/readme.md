## 问题

项目`loading`是统一封装的，发请求前会`showLoading`，请求完了会`hideLoading`。
但是，并发两个或者更多请求的时候，最短耗时的请求回来了，就会关闭`loading`， 预期是最后一个请求回来才能`hideLoading`，要怎么办？

## 复现场景

[点我在线预览](未优化.html)

```html
<body>
  <div id="app">
    <h3>请求成功列表</h3>
    <ul>
      <li v-for="item in list ">
        第【{{item.count}}】个请求回来了，耗时【{{item.time}}】
      </li>
    </ul>
  </div>
</body>

<script>
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const randomMs = () => Math.random() * 5000;

  const LoadingService = {
    _loadingInstance: null,
    show() {
      this._loadingInstance = ELEMENT.Loading.service({
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.7)",
        text: "Loading"
      });
    },
    hide() {
      this._loadingInstance && this._loadingInstance.close();
    }
  };

  const api = {
    async getData(i, time) {
      LoadingService.show();
      await sleep(time);
      LoadingService.hide();
    }
  };

  const vm = new Vue({
    el: "#app",
    data() {
      return {
        list: []
      };
    },
    created() {
      for (let i = 0; i < 10; i++) {
        const time = randomMs();
        api.getData(i + 1, time).then(() => {
          this.list.push({ count: i + 1, time });
        });
      }
    }
  });
</script>
```

## 优化思路一： 防抖

对`LoadingService`的`hide`方法做防抖处理，间隔给`1000`

```javascript
LoadingService.hide = _.debounce(function() {
  this._loadingInstance && this._loadingInstance.close();
}, 1000);
```

但是，结果并没有达到预期，如果上一个请求话费跟下一个请求的回来的间隔大于`1000`还是不能符合预期

点进去多刷新几次试试。
[点我在线预览](用debounce优化.html)

**结论：**用防抖来优化，不能很好的达到效果，防抖的间隔不好确定。

## 优化思路二：栈

每次`LoadingService.show`方法调用的时候，往栈里面`push`一个实例。
同样的每次在`LoadingService.hide`方法调用的时候，从栈里取出最前面的一个实例，当栈的长度是`0`的时候，说明没有正在进行中的请求了，这时候才可以去关闭`loading`。

```javascript
const LoadingService = {
  _loadingStack: [],
  show() {
    const loadingInstance = ELEMENT.Loading.service({
      fullscreen: true,
      background: "rgba(0, 0, 0, 0.7)",
      text: "Loading"
    });
    this._loadingStack.push(loadingInstance);
  },
  hide() {
    const loadingInstance = this._loadingStack.shift();
    if (this._loadingStack.length) return;
    loadingInstance && loadingInstance.close();
  }
};
```

[点我在线预览](用栈优化.html)

试验结果符合预期。
