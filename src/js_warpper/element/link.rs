use crate::js_warpper::element::Element;
use eframe::wasm_bindgen::{self, prelude::*};

#[wasm_bindgen]
pub struct Link {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: String,
    #[wasm_bindgen(skip)]
    pub url: String,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl Link {
    pub fn new(text: &str, url: &str) -> Link {
        Link {
            typename: "Link".to_string(),
            text: text.to_string(),
            url: url.to_string(),
            id: "".to_string(),
        }
    }
    #[wasm_bindgen(setter = text)]
    pub fn set_text(&mut self, data: &str) {
        return self.text = data.to_string();
    }
    #[wasm_bindgen(getter = text)]
    pub fn get_text(&self) -> String {
        return self.text.clone();
    }
    #[wasm_bindgen(setter = url)]
    pub fn set_url(&mut self, data: &str) {
        return self.url = data.to_string();
    }
    #[wasm_bindgen(getter = url)]
    pub fn get_url(&self) -> String {
        return self.url.clone();
    }
    #[wasm_bindgen(getter = id)]
    pub fn get_id(&self) -> String {
        return self.id.to_string();
    }
    #[wasm_bindgen(setter = id)]
    pub fn set_id(&mut self, id: &str) {
        self.id = id.to_string();
    }
    #[wasm_bindgen(skip)]
    pub fn as_element(&self) -> Element {
        unsafe {
            Element(
                "Link".to_string(),
                std::mem::transmute::<&Link, *const u8>(self),
            )
        }
    }
}

use eframe::egui::Ui;
impl Link {
    pub fn update(&mut self, ui: &mut Ui) {
        ui.hyperlink_to(&self.text, &self.url);
    }
}
