import init, { main, Node } from '../static/egui_js.js';
async function run() {
  await init();

  let n = Node.new("label", "test", 100)

  n.set_data('123');
  let canvas = document.createElement('canvas')
  canvas.id = "canvas";
  document.body.style.margin = "0px"
  document.body.appendChild(canvas);
  main('canvas', n)
}
run();