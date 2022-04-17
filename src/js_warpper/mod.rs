pub mod egui_app;
pub mod element;
use eframe::wasm_bindgen::{self, prelude::*};
use egui_app::WebApp;
pub use element::{view::View, Element};

use crate::log;

#[wasm_bindgen]
pub struct App {
    #[wasm_bindgen(skip)]
    pub title: String,
    #[wasm_bindgen(skip)]
    pub internal_app: WebApp,
}

#[wasm_bindgen]
impl App {
    pub fn create_app(title: &str, data: &View) -> App {
        let app = WebApp::new(data);
        App {
            title: title.to_string(),
            internal_app: app,
        }
    }
    pub fn start(self, canvas_id: &str) -> Result<(), eframe::wasm_bindgen::JsValue> {
        console_error_panic_hook::set_once();

        // Redirect tracing to console.log and friends:
        tracing_wasm::set_as_global_default();

        let app = self.internal_app;
        eframe::start_web(canvas_id, Box::new(app))
    }
    pub fn get_by_id_view(&self, id: &str) -> Option<Element> {
        let root = self.internal_app.get_data();
        return get_element(root, id);
    }
}

fn get_element(view: &View, id: &str) -> Option<Element> {
    if view.id == id {
        return Some(view.as_element());
    } else {
        for c in view.children.iter() {
            if c.get_type() == "Label" && c.as_label().id == id {
                return Some(c.as_label().as_element());
            } else if c.get_type() == "View" && c.as_view().id == id {
                return Some(c.as_view().as_element());
            } else if c.get_type() == "Link" && c.as_link().id == id {
                return Some(c.as_link().as_element());
            } else {
                return get_element(c.as_view(), id);
            }
        }
        return None;
    }
}


