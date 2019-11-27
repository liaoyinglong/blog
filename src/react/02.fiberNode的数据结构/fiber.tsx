/** @jsx h */
type Props = {
  [key: string]: any;
};

class FiberNode {
  return: FiberNode | null = null;
  child: FiberNode | null = null;
  sibling: FiberNode | null = null;

  constructor(public tag: string, public props: Props = {}) {}
}

function createFiberNode(type: string, props: Props) {
  return new FiberNode(type, props);
}

function createTextFiberNode(value: string) {
  return new FiberNode("text", { children: value });
}

function h(type: string, props: Props | null, ...children: any[]): FiberNode {
  let fiberNode = createFiberNode(type, props || {});

  children.forEach((child: string | FiberNode, i: number) => {
    if (typeof child === "string") {
      child = createTextFiberNode(child);
      children[i] = child;
    }

    if (!fiberNode.child) {
      fiberNode.child = child;
    }
    let sibling = children[i + 1];
    if (sibling) {
      if (typeof sibling === "string") {
        sibling = createTextFiberNode(sibling);
        children[i + 1] = sibling;
      }
      child.sibling = sibling as FiberNode;
    }

    child.return = fiberNode;
  });

  return fiberNode;
}

const res = (
  <div id="container">
    文字1
    <h1>title</h1>
    <ul>
      <li>li-1</li>
      <li>li-2</li>
    </ul>
    文字1
  </div>
);

console.log(res);
