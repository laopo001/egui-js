import init, { App, Label, View, Link, Test, run_test } from '../static/egui_js.js';
async function run() {
  await init();
  let viewP = View.new("vertical");


  let view = View.new("horizontal");
  view.id = "123"

  let label = Label.new("123")
  label.id = "label"

  view.add_child_label(label)


  let link = Link.new("egui on GitHub", "https://www.github.com/emilk/egui/")
  view.add_child_link(link);

  viewP.add_child_view(view);

  // setInterval(() => {
  //   label.text = (parseInt(label.text) + 1).toString();
  // }, 1000)

  let canvas = document.createElement('canvas')
  canvas.id = "canvas";
  document.body.style.margin = "0px"
  document.body.appendChild(canvas);

  let app = App.create_app("canvas", viewP);

  console.log(view['ptr'], app.get_by_id_view('123'));

  console.log(Label['__wrap'](app.get_by_id_view('label')?.iptr! - 4));

  app.start("canvas")

  let t = Test.new();
  console.log(t);
  run_test(t);
}
run();