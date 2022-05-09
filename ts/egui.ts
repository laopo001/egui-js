import * as elements from "./element";
import { formatNode, useElement } from "./element/element";



for(let key in elements){
    useElement(elements[key])
}


let root: elements.View | null = null;

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