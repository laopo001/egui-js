import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Text } from './text'
export class Link extends IElement<{ children: string | Text , url: string}> {

    create() {
        let str = this.children[0];
        if (typeof str === 'string') {
            let text = egui.Text.new(str, new Uint8Array([0, 0, 0, 1]));
            let res = egui.Link.new(text, this.props.url);
            return res;
        } else if (str instanceof Text) {
            let res = egui.Link.new(str.create(), this.props.url);
            return res;
        } else {
            throw new Error("Link children must be string or Text");
        }
    }
}