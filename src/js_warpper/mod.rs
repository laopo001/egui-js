pub mod egui_app;
pub mod element;
use eframe::wasm_bindgen::{self, prelude::*};
use egui_app::WebApp;
pub use element::{view::View, Element};

#[wasm_bindgen]
pub struct App {
    #[wasm_bindgen(skip)]
    pub internal_app: WebApp,
}

#[wasm_bindgen]
impl App {
    pub fn create_app(_title: &str, data: &View) -> App {
        let app = WebApp::new(data);
        App { internal_app: app }
    }
    pub fn start(self, canvas_id: &str) -> Result<(), eframe::wasm_bindgen::JsValue> {
        console_error_panic_hook::set_once();

        // Redirect tracing to console.log and friends:
        tracing_wasm::set_as_global_default();

        let app = self.internal_app;
        eframe::start_web(canvas_id, Box::new(app))
    }
    // pub fn get_by_id(&self, id: &str) -> {
    //     let root = self.internal_app.get_data();
    //     if root.id == id {
    //         return root;
    //     }
    // }
}
