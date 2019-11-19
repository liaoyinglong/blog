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
      unshift() {
        this.list.unshift("e");
      }
    }
  });
</script>
```

1. ![](vue-vdom-diff-unshift_01.png)
