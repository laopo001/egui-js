import init, { App, Label, View, Link } from '../static/egui_js.js';
async function run() {
  await init();
  let viewP = View.new("vertical");

  for (let i = 0; i < 100; i++) {
    let view = View.new("horizontal");


    let label = Label.new("123")
    label.text = "798"
    view.add_child_label(label)


    let link = Link.new("egui on GitHub", "https://www.github.com/emilk/egui/")
    view.add_child_link(link);

    viewP.add_child_view(view)
  }


  let canvas = document.createElement('canvas')
  canvas.id = "canvas";
  document.body.style.margin = "0px"
  document.body.appendChild(canvas);

  let app = App.create_app("canvas", viewP);
  app.start("canvas")
}
run();