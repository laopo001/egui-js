import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export class Label extends IElement<{ children: String }> {
    static create(props) {
        let str = props.children[0];
        if (typeof str === 'string') {
            let text = egui.Text.new(str, new Uint8Array([0, 0, 0, 1]));
            let label = egui.Label.new(text);
            return label;
        }

    }
}