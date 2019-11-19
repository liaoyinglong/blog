## vnode children diff insert 流程

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
      insert(str) {
        this.list.splice(2, 0, "e", "f");
      }
    }
  });
</script>
```

1. ![](vue-vdom-diff-insert_01.png)
1. ![](vue-vdom-diff-insert_02.png)
1. ![](vue-vdom-diff-insert_03.png)
1. ![](vue-vdom-diff-insert_04.png)
1. ![](vue-vdom-diff-insert_05.png)
