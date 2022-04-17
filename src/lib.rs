use eframe::wasm_bindgen::{self, prelude::*};
mod js_warpper;
use js_warpper::{element::view::View, App};

// #[wasm_bindgen]
// pub fn main(canvas_id: &str, data: &View) -> Result<(), eframe::wasm_bindgen::JsValue> {
//     // Make sure panics are logged using `console.error`.
//     console_error_panic_hook::set_once();

//     // Redirect tracing to console.log and friends:
//     tracing_wasm::set_as_global_default();

//     let app = App::create_app("", data);
//     eframe::start_web(canvas_id, Box::new(app.internal_app))
// }

pub fn log(s: &str) {
    web_sys::console::log_1(&eframe::wasm_bindgen::JsValue::from_str(s));
}

#[wasm_bindgen]
pub struct Test {}

#[wasm_bindgen]
impl Test{
    pub fn new() -> Test{
        Test {  }
    }
}
#[wasm_bindgen]
pub fn run_test(t: &Test)  {
    
    log(&format!("{:p}", t));

}
