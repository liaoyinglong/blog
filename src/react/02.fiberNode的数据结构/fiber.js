"use strict";
class FiberNode {
    constructor(tag, props = {}) {
        this.tag = tag;
        this.props = props;
        this.return = null;
        this.child = null;
        this.sibling = null;
    }
}
function createFiberNode(type, props) {
    return new FiberNode(type, props);
}
function createTextFiberNode(value) {
    return new FiberNode("text", { children: value });
}
function h(type, props, ...children) {
    let fiberNode = createFiberNode(type, props || {});
    children.forEach((child, i) => {
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
            child.sibling = sibling;
        }
        child.return = fiberNode;
    });
    return fiberNode;
}
const res = (h("div", { id: "container" },
    "\u6587\u5B571",
    h("h1", null, "title"),
    h("ul", null,
        h("li", null, "li-1"),
        h("li", null, "li-2")),
    "\u6587\u5B571"));
console.log(res);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmliZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWJlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLE1BQU0sU0FBUztJQUtiLFlBQW1CLEdBQVcsRUFBUyxRQUFlLEVBQUU7UUFBckMsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVk7UUFKeEQsV0FBTSxHQUFxQixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFDL0IsWUFBTyxHQUFxQixJQUFJLENBQUM7SUFFMEIsQ0FBQztDQUM3RDtBQUVELFNBQVMsZUFBZSxDQUFDLElBQVksRUFBRSxLQUFZO0lBQ2pELE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEtBQWE7SUFDeEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFFLEtBQW1CLEVBQUUsR0FBRyxRQUFlO0lBQzlELElBQUksU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRW5ELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLENBQVMsRUFBRSxFQUFFO1FBQ3hELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDcEIsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDekI7UUFDRCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDM0I7WUFDRCxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQW9CLENBQUM7U0FDdEM7UUFFRCxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxNQUFNLEdBQUcsR0FBRyxDQUNWLFdBQUssRUFBRSxFQUFDLFdBQVc7O0lBRWpCLHNCQUFjO0lBQ2Q7UUFDRSxxQkFBYTtRQUNiLHFCQUFhLENBQ1Y7b0JBRUQsQ0FDUCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9