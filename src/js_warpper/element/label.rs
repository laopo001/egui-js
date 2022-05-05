use crate::js_warpper::element::Element;
use crate::js_warpper::element::text::Text;

use eframe::wasm_bindgen::{self, prelude::*};
#[wasm_bindgen]
pub struct Label {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: Text,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl Label {
    pub fn new(text: Text) -> Label {
        Label {
            typename: "Label".into(),
            text: text,
            id: "".to_string(),
        }
    }
    #[wasm_bindgen(setter = text)]
    pub fn set_text(&mut self, text: &str) {
        return self.text.text = text.to_string();
    }
    #[wasm_bindgen(getter = text)]
    pub fn get_text(&self) -> String {
        return self.text.text.clone();
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
                "Label".to_string(),
                std::mem::transmute::<&Label, *const u8>(self),
            )
        }
    }
}

use eframe::egui::Ui;
impl Label {
    pub fn update(&mut self, ui: &mut Ui) {
        ui.label(self.text.create());
    }
}
