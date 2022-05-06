"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egui_js_js_1 = require("../static/egui_js.js");
const demo_1 = require("./demo");
const egui_1 = require("./egui");
async function run() {
    await (0, egui_js_js_1.default)();
    let viewP = egui_js_js_1.View.new("vertical");
    let view = egui_js_js_1.View.new("horizontal");
    view.id = "123";
    let text = egui_js_js_1.Text.new("123", new Uint8Array([0, 0, 0, 1]));
    let label = egui_js_js_1.Label.new(text);
    label.id = "label";
    view.add_child_label(label);
    let input = egui_js_js_1.Input.new("name");
    view.add_child_input(input);
    text = egui_js_js_1.Text.new("egui on GitHub test", new Uint8Array([255, 0, 0, 1]));
    let link = egui_js_js_1.Link.new(text, "https://www.github.com/emilk/egui/");
    view.add_child_link(link);
    text = egui_js_js_1.Text.new("button", new Uint8Array([0, 255, 0, 1]));
    let button = egui_js_js_1.Button.new(text);
    button.on_click(function () {
        input.text = input.text + "1";
    });
    view.add_child_button(button);
    viewP.add_child_view(view);
    // setInterval(() => {
    //   label.text = (parseInt(label.text) + 1).toString();
    // }, 1000)
    let canvas = document.createElement('canvas');
    canvas.id = "canvas";
    document.body.style.margin = "0px";
    document.body.appendChild(canvas);
    // let app = App.create_app("canvas", viewP);
    // console.log(view['ptr'], app.get_by_id_element('123'));
    // console.log(Label['__wrap'](app.get_by_id_element('label')?.js_ptr));
    let data = egui_1.default.render(egui_1.default.createElement(demo_1.Demo, { test: "123" }));
    console.log(data);
    let app = egui_js_js_1.App.create_app("canvas", data);
    app.start("canvas");
}
run();
//# sourceMappingURL=index.js.map