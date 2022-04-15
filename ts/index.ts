import init, { main } from '../static/egui_js.js';
async function run() {
  await init();
  console.log(main('hello'));
}
run();