const { useMemo, useEffect, useRef, useState } = React;

const maxCount = 0;
const arr = Array.from({ length: maxCount }, (v, i) => i + 1);

interface VirtualListProps<T = any> {
  list: T[];
  itemHeight: number;
}

function VirtualList<T extends any>(props: VirtualListProps<T>) {
  const { list, itemHeight } = props;

  const [containerHeight, setContainerHeight] = useState(0);
  const [index, setIndex] = useState({ start: 0, end: 0 });
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 列表总高度
  const listHeight = useMemo(() => {
    return list.length * itemHeight;
  }, [list.length, itemHeight]);

  // 可以看见的条数
  const visibleCount = useMemo(() => {
    // 增大可视区高度
    return ~~((containerHeight + 200) / itemHeight);
  }, [containerHeight, itemHeight]);

  // 可以看见的数据
  const visibleData = useMemo(() => {
    return list.slice(index.start, Math.min(index.end, list.length));
  }, [list, index.start, index.end]);

  // effects
  useEffect(() => {
    containerRef.current &&
      setContainerHeight(containerRef.current.clientHeight);
  }, []);

  useEffect(() => {
    setIndex(prev => ({ ...prev, end: visibleCount }));
  }, [visibleCount]);

  // events

  const onContainerScroll: React.UIEventHandler = e => {
    const { scrollTop } = e.target as HTMLDivElement;
    const start = ~~(scrollTop / itemHeight);
    setIndex({
      start,
      end: start + visibleCount
    });
    setOffset(scrollTop);
  };

  // Components

  const listComponents = useMemo(() => {
    return visibleData.map((item, i) => {
      return (
        <div
          className="list-item"
          key={i}
          style={{ height: `${itemHeight}px` }}
        >
          {item}
        </div>
      );
    });
  }, [visibleData, itemHeight]);

  return (
    <div
      className={"list-container"}
      ref={containerRef}
      onScroll={onContainerScroll}
    >
      <div className="list-phantom" style={{ height: `${listHeight}px` }}></div>
      <div
        className="list"
        style={{ transform: `translate3d(0,${offset}px,0)` }}
      >
        {listComponents}
      </div>
    </div>
  );
}

function App() {
  const [list, setList] = useState(arr);

  const add = (max: number) => {
    const newList: number[] = [];
    for (let i = list.length - 1; i < max; i++) {
      newList.push(i++);
    }
    setList(list.concat(newList));
  };

  return (
    <div className={"content-area"}>
      <VirtualList<number> list={list} itemHeight={100}></VirtualList>
      <br />
      <button onClick={() => add(100)}>追加100条数据</button>
      <button onClick={() => add(10000)}>追加10000条数据</button>
      <button onClick={() => add(40000)}>追加40000条数据</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
