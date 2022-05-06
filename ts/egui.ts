export default class EGUI {
    static render(node: Node) {
        console.log(node);
        let component = node.element(node.props)
        return formatNode(component);
    }
    // static createElement(element: string, props: { children })
    static createElement(element, props?, ...children) {
        return new Node(element, props, children);
    }
}

function formatNode(node) {
    if (node.element.is_element) {
        return node.element.create(node.props);
    } else {
        let component = node.element(node.props)
        return formatNode(component)
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