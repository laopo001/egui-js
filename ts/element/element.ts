function formatNode(node) {
    if (node.element.is_element) {
        return node.element.create(node.props);
    } else {
        let component = node.element(node.props)
        return formatNode(component)
    }
}

export class IElement<T = {}> {
    constructor(public props: T & {
        id?: string,
    }) {

    }

    static is_element = true;
    static to_data(children) {
        let arr: Array<any> = [];
        for (let i = 0; i < children.length; i++) {
            arr.push(formatNode(children[i]))
        }
        return arr;
    }
}