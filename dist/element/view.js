"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const egui = require("../../static/egui_js.js");
class View {
    static create(props) {
        let viewP = egui.View.new("vertical");
        console.log('View', props);
        return viewP;
    }
}
exports.View = View;
View.is_element = true;
//# sourceMappingURL=view.js.map