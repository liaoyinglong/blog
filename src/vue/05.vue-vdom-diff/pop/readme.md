## vnode children diff push 流程

示例代码：

```html
<div id="app">
  <div v-for="item in list" :key="item">{{item}}</div>
</div>
<script type="module">
  import Vue from "../../dist/vue.esm.browser.js";

  window.vm = new Vue({
    el: "#app",
    data() {
      return {
        list: ["a", "b", "c", "d"]
      };
    },
    methods: {
      pop() {
        this.list.pop();
      }
    }
  });
</script>
```

1. ![](vue-vdom-diff-pop_01.png)
1. ![](vue-vdom-diff-pop_02.png)
1. ![](vue-vdom-diff-pop_03.png)
1. ![](vue-vdom-diff-pop_04.png)
