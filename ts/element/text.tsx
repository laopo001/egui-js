import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export interface TextProps {
    children: String, color?: [number, number, number, number]
}


export class Text extends IElement<TextProps> {
    static defaultProps = {
        color: [255, 0, 0, 255]
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