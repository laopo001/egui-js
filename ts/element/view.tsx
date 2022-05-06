import * as egui from '../../static/egui_js.js';
import { IElement } from './element';

export class View extends IElement<{ dir?: string, children: Array<any> }> {
    static defaultProps = {
        dir: "vertical"
    }
    static create(props) {
        Object.assign(props, View.defaultProps)

        let children_data = super.to_data(props.children);


        let viewP = egui.View.new(props.dir);
        for (let i = 0; i < children_data.length; i++) {
            if (children_data[i] instanceof egui.Label) {
                viewP.add_child_label(children_data[i]);
            }
            if (children_data[i] instanceof egui.View) {
                viewP.add_child_view(children_data[i]);
            }
        }

        return viewP;
    }
}