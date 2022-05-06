"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const egui = require("../../static/egui_js.js");
class Label {
    static create(props) {
        let text = egui.Text.new(props.children, new Uint8Array([0, 0, 0, 1]));
        let label = egui.Label.new(text);
        return label;
    }
}
exports.Label = Label;
Label.is_element = true;
//# sourceMappingURL=label.js.map