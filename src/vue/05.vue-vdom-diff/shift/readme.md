## vnode children diff shift 流程

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
      shift() {
        this.list.shift();
      }
    }
  });
</script>
```

1. ![](vue-vdom-diff-shift_01.png)
1. ![](vue-vdom-diff-shift_02.png)
1. ![](vue-vdom-diff-shift_03.png)
1. ![](vue-vdom-diff-shift_04.png)
1. ![](vue-vdom-diff-shift_05.png)
