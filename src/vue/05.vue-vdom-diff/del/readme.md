## vnode children diff del 流程

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
      del(str) {
        this.list.splice(1, 2);
      }
    }
  });
</script>
```

1. ![](vue-vdom-diff-del_01.png)
1. ![](vue-vdom-diff-del_02.png)
1. ![](vue-vdom-diff-del_03.png)
