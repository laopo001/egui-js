export function formatNode(node) {
    if (typeof node == 'string' || typeof node == 'number') {
        return node
    }
    if (node.element.is_element) {
        return new node.element(node.props);
    } else {
        let component = node.element(node.props)
        return formatNode(component)
    }
}

export abstract class IElement<T = {}> {
    constructor(public props: T & {
        id?: string,
    }) {
        let children = (props as any).children || [];
        for (let i = 0; i < children.length; i++) {
            this.children.push(formatNode(children[i]))
        }
        this.props = Object.assign({}, Object.getPrototypeOf(this).constructor.defaultProps, this.props)

    }

    static is_element = true;
    static defaultProps = {}
    abstract create(): any;
    children: Array<any> = [];
}