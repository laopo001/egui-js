"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class EGUI {
    static render(node) {
        console.log(node);
        let component = node.element(node.props);
        return formatNode(component);
    }
    static createElement(element, props, children) {
        return new Node(element, props, children);
    }
}
exports.default = EGUI;
function formatNode(node) {
    if (node.element.is_element) {
        return node.element.create(node.props);
    }
    else {
        let component = node.element(node.props);
        return formatNode(component);
    }
}
class Node {
    constructor(element, props, children = []) {
        this.element = element;
        this.props = props || {};
        this.props.children = children;
    }
}
exports.Node = Node;
//# sourceMappingURL=egui.js.map