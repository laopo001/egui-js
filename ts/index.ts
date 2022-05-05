import init, { App, Label, View, Link, Input, Button, Text } from '../static/egui_js.js';
async function run() {
  await init();
  let viewP = View.new("vertical");


  let view = View.new("horizontal");
  view.id = "123"

  let text = Text.new("123", new Uint8Array([0, 0, 0, 1]));

  let label = Label.new(text)
  label.id = "label"
  view.add_child_label(label);

  let input = Input.new("name");
  view.add_child_input(input);
  text = Text.new("egui on GitHub test", new Uint8Array([255, 0, 255, 1]));
  let link = Link.new(text, "https://www.github.com/emilk/egui/")
  view.add_child_link(link);
  text = Text.new("button", new Uint8Array([0, 255, 0, 1]));
  let button = Button.new(text);
  button.on_click(function () {
    input.text = input.text + "1";
  });
  view.add_child_button(button);

  viewP.add_child_view(view);

  // setInterval(() => {
  //   label.text = (parseInt(label.text) + 1).toString();
  // }, 1000)

  let canvas = document.createElement('canvas')
  canvas.id = "canvas";
  document.body.style.margin = "0px"
  document.body.appendChild(canvas);

  let app = App.create_app("canvas", viewP);

  // console.log(view['ptr'], app.get_by_id_element('123'));

  // console.log(Label['__wrap'](app.get_by_id_element('label')?.js_ptr));

  app.start("canvas")
}
run();