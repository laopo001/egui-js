use eframe::wasm_bindgen::{self, prelude::*};
mod js_warpper;
use js_warpper::{App, Node};

#[wasm_bindgen]
pub fn main(canvas_id: &str, data: &Node) -> Result<(), eframe::wasm_bindgen::JsValue> {
    // Make sure panics are logged using `console.error`.
    console_error_panic_hook::set_once();

    // Redirect tracing to console.log and friends:
    tracing_wasm::set_as_global_default();

    let app = App::create_app("", data).internal_app;
    eframe::start_web(canvas_id, Box::new(app))
}
