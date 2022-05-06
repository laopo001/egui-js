import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Label } from './label';
import { Link } from './link';
import { Input } from './input'
import { Button } from './button';
import { Image } from './image';
export class View extends IElement<{
    dir?: 'vertical' | 'horizontal', width?: number, height?: number, children: Array<any>
}> {
    static defaultProps = {
        dir: "vertical"
    }
    create() {
        let children_data = this.children;
        let viewP = egui.View.new(this.props.dir!);
        if (this.props.width) {
            viewP.width = this.props.width;
        }
        if (this.props.height) {
            viewP.height = this.props.height;
        }
        for (let i = 0; i < children_data.length; i++) {
            let child = children_data[i];
            if (child instanceof Label) {
                viewP.add_child_label(child.create());
            }
            if (child instanceof View) {
                viewP.add_child_view(child.create());
            }
            if (child instanceof Link) {
                viewP.add_child_link(child.create());
            }
            if (child instanceof Input) {
                viewP.add_child_input(child.create());
            }
            if (child instanceof Button) {
                viewP.add_child_button(child.create());
            }
            if (child instanceof Image) {
                viewP.add_child_image(child.create());
            }
        }

        return viewP;
    }
}