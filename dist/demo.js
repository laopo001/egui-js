"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
const element_1 = require("./element");
const egui_1 = require("./egui");
function Demo(props) {
    let res = egui_1.default.createElement(element_1.View, null,
        egui_1.default.createElement(element_1.Label, null, "123"),
        egui_1.default.createElement(element_1.Label, null, "456"));
    return res;
}
exports.Demo = Demo;
//# sourceMappingURL=demo.js.map