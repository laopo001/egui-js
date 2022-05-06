import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Text } from './text'
export class Button extends IElement<{ children: string | Text, onClick?: Function }> {

    create() {
        let str = this.children[0];
        if (typeof str === 'string') {
            let text = egui.Text.new(str, new Uint8Array([0, 0, 0, 1]));
            let res = egui.Button.new(text,);
            if (this.props.onClick) {
                res.on_click(this.props.onClick);
            }
            return res;
        } else if (str instanceof Text) {
            let res = egui.Button.new(str.create());
            if (this.props.onClick) {
                res.on_click(this.props.onClick);
            }
            return res;
        } else {
            throw new Error("Button children must be string or Text");
        }
    }
}