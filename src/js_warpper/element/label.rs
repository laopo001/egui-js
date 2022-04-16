use eframe::wasm_bindgen::{self, prelude::*};
use crate::js_warpper::element::Element;


#[wasm_bindgen]
pub struct Label {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: String,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl Label {
    pub fn new(text: &str) -> Label {
        Label {
            typename: "Label".to_string(),
            text: text.to_string(),
            id: "".to_string(),
        }
    }
    #[wasm_bindgen(setter = text)]
    pub fn set_text(&mut self, text: &str) {
        return self.text = text.to_string();
    }
    #[wasm_bindgen(getter = text)]
    pub fn get_text(&self) -> String {
        return self.text.clone();
    }
    #[wasm_bindgen(getter = id)]
    pub fn get_id(&self) -> String {
        return self.id.to_string();
    }
    #[wasm_bindgen(setter = id)]
    pub fn set_id(&mut self, id: &str) {
        self.id = id.to_string();
    }
}
impl Into<Element> for Label {
    fn into(self) -> Element {
        Element::Label(self)
    }
}
