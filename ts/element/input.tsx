import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export interface InputProps {
    children: string
}
export class Input extends IElement<InputProps> {
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