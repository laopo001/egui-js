import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export class Text extends IElement<{ children: String, color?: [number, number, number, number] }> {
    static defaultProps = {
        color: [0, 0, 0, 1]
    }
    create() {
        let str = this.children[0];
        if (typeof str === 'string') {
            let test = egui.Text.new(str, new Uint8Array(this.props.color!));
            return test;
        } else {
            throw new Error("Text children must be string");
        }
    }
}