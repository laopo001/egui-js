import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Label } from './label';

export class View extends IElement<{ dir?: string, children: Array<any> }> {
    static defaultProps = {
        dir: "vertical"
    }
    create() {
        let children_data = this.children;


        let viewP = egui.View.new(this.props.dir!);
        for (let i = 0; i < children_data.length; i++) {
            let child = children_data[i];
            if (child instanceof Label) {
                viewP.add_child_label(child.create());
            }
            if (child instanceof View) {
                viewP.add_child_view(child.create());
            }
        }

        return viewP;
    }
}