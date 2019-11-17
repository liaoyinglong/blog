## 前端性能优化

分为以下类别

### 页面资源加载

1. 源代码压缩，图片视频等等资源压缩，减小传输体积
2. 小图片用`base64`，虽然会增加体积，但是易于维护。`CSS Sprites`不利于维护。
3. 构建的时候同时生成一份`gzip`过的文件。
4. 减少`cookie`的大小。
5. 开启`dns`预解析 `<link rel='dns-prefetch href='//your.cdn.com'>`
6. 除`html`外的静态资源可以上传到`cdn`，`html`不放到`cdn`的原因是便于发版后快速看到效果。
7. 浏览器一般会限制每个域的并行线程（一般为 6 个，甚至更少），使用不同的域名可以最大化下载线程。
8. 利用浏览器缓存。

   8.1 强缓存，在 `web` 服务器返回的响应中添加 `Expires` 和 `Cache-Control` `Header`。

   8.2 协商缓存，通过`Last-Modified`，`If-Modified-Since`和`ETag`、`If-None-Match`这两对 `Header` 分别管理。

### 资源预加载

1. **Preload** `<link rel="preload">`，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早加载这些资源，**针对当前界面**。

   > [`MDN:<link rel="preload">`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)

   ```html
   <!-- css 预加载-->
   <link href="xxx.css" rel="preload" as="style" />
   <!-- js 预加载-->
   <link href="xxx.js" rel="preload" as="script" />
   ```

2. **Prefetch** `<link rel="prefetch">`，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容，**针对后一个界面**。

   > [`MDN:<link rel="prefetch">`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Link_prefetching_FAQ)

   ```html
   <!-- css 预加载-->
   <link href="xxx.css" rel="prefetch" as="style" />
   <!-- js 预加载-->
   <link href="xxx.js" rel="prefetch" as="script" />
   ```

### 首屏渲染

1. `css`放头部，`js`放`body`最后面。
2. 只加载首屏渲染所用到静态资源，使用`webpack`的情况下就是`code-splitting`。
3. 图片懒加载，监听滚动事件或者`Intersection Observer`
4. 通过`webpack`构建生成两个版本：
   - 一个现代版的包（更小更快），面向支持 `ES modules` 的现代浏览器。
   - 另一个旧版的包，面向不支持的旧浏览器。
5. 使用`prerender-spa-plugin`来预渲染生成部分静态资源。
6. 如有必要，采用服务器端渲染。

### 运行时优化

1. 尽量不使用`table`布局。
2. 减少 `DOM` 操作次数。
3. 避免空的`src`和`href`。
4. 对高频触发的事件进行节流或防抖。
5. 使用 `transform` 和 `opacity` 来完成动画。

### 针对 vue 项目

1. 尽量使用`vue`单文件组件开发。
2. 不使用全局`mixin`。
3. 引入的第三方插件，在组件`destroy`的时候记得插件也要相应`destroy`。
4. 手动添加的事件等等同上。
5. `v-if` 和 `v-show` 区分使用场景。
6. `v-for` 遍历避免同时使用 `v-if`。
7. 数据不会发现变化，但是在模板又需要用到的时候，使用`Object.freeze`冻结，跳过`vue`响应式系统代理。
8. 路由多的时候使用路由懒加载。
9. 第三方插件的按需引入。

### 针对 React 项目

1. 合理使用`shouldComponentUpdate`。
2. 优化`props`传递

   ```jsx harmony
   // bad
   function App() {
     return <Child data={{ xxx: [] }} />;
   }
   // good
   function App() {
     const data = useState({ xxx: [] });
     return <Child data={data} />;
   }
   ```

3. 优化`bind`，或者使用箭头函数声明方法

```jsx harmony
// bad
class App extends React.Component {
  handClick() {}
  render() {
    return (
      <>
        <div onClick={this.handClick.bind(this)}></div>
        <div onClick={() => this.handClick()}></div>
      </>
    );
  }
}
// good
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handClick = this.handClick.bind(this);
  }
  handClick() {}
  render() {
    return (
      <>
        <div onClick={this.handClick.bind(this)}></div>
        <div onClick={() => this.handClick()}></div>
      </>
    );
  }
}
```
