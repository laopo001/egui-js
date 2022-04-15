pub mod web_app; 
pub mod node;
pub use node::Node;
use eframe::wasm_bindgen::{self, prelude::*};
use web_app::WebApp;


#[wasm_bindgen]
pub struct App {
    #[wasm_bindgen(skip)]
    pub internal_app: WebApp,
}

#[wasm_bindgen]
impl App {
    pub fn create_app(_title: &str, data: &Node) -> App {
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
}
