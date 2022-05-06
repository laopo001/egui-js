import { View } from "./element/view";
import { formatNode } from "./element/element";

let root: View | null = null;

export default class EGUI {
    static render(node: Node) {
        let component = node.element(node.props)
        root = formatNode(component);
        return root!.create();
    }
    // static createElement(element: string, props: { children })
    static createElement(element, props?, ...children) {
        return new Node(element, props, children);
    }
}



export class Node {
    element: Function;
    props: any;

    constructor(element, props, children) {
        this.element = element;
        this.props = props || {};
        this.props.children = children;
    }
}