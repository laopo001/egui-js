import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export class Input extends IElement<{ children: string }> {
    create() {
        let str = this.children[0];
        if (typeof str === 'string') {
            let res = egui.Input.new(str);
            return res;
        } else {
            throw new Error("Input children must be string ");
        }
    }
}