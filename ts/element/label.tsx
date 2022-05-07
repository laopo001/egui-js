import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Text } from './text';

export interface LabelProps {
    children: String | Text
}
export class Label extends IElement<LabelProps> {

    create() {
        let str = this.children[0];
        if (typeof str === 'string') {
            let text = egui.Text.new(str, new Uint8Array([0, 0, 0, 255]));
            let label = egui.Label.new(text);
            return label;
        } else if (str instanceof Text) {
            let label = egui.Label.new(str.create());
            return label;
        } else {
            throw new Error("Label children must be string or Text");
        }
    }
}