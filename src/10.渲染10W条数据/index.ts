const list = document.querySelector<HTMLDivElement>(".list")!;

let shouldOptimization = false;
let isLocked = false;
let itemCount = list.children.length;
let jsMark: string = "js执行耗时";
let renderMark: string = "渲染耗时";

function toggle() {
  if (isLocked) {
    return;
  }
  shouldOptimization = !shouldOptimization;
  document.querySelector("#toggleBtn")!.textContent = shouldOptimization
    ? "使用优化的方法"
    : "未优化";
}

function lock() {
  isLocked = true;
}

function unlock() {
  isLocked = false;
}

function optimizationAdd(count: number) {
  if (itemCount < count) {
    requestAnimationFrame(() => {
      console.log("优化");
      lock();
      const target = Math.min(itemCount + 100, count);
      appendDiv(target);
      unlock();
      optimizationAdd(count);
    });
  } else {
    performance.mark(jsMark);
    performance.mark(renderMark);
    log();
  }
}

function add(count: number) {
  if (shouldOptimization) {
    performance.mark(jsMark);
    performance.mark(renderMark);
    optimizationAdd(count);
    return;
  }
  lock();

  performance.mark(jsMark);
  performance.mark(renderMark);
  appendDiv(count);
  performance.mark(jsMark);
  setTimeout(() => {
    performance.mark(renderMark);
    log();
  }, 0);
  unlock();
}

function appendDiv(count: number) {
  const fragment = document.createDocumentFragment();

  while (itemCount < count) {
    const div = document.createElement("div");
    div.innerText = itemCount + "";
    div.className = "list-item";
    fragment.appendChild(div);
    itemCount++;
  }

  list.appendChild(fragment);
}

function log() {
  const [jsStart, jsEnd] = performance.getEntriesByName(jsMark);
  const [renderStart, renderEnd] = performance.getEntriesByName(renderMark);
  document.querySelector("#log")!.innerHTML = `
    ${jsMark}: ${jsEnd.startTime - jsStart.startTime}
    <br/>
     ${renderMark}: ${renderEnd.startTime - renderStart.startTime}
    `;

  performance.clearMarks();
}
