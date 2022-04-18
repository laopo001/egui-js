use crate::js_warpper::element::Element;
use eframe::wasm_bindgen::{self, prelude::*};
#[wasm_bindgen]
pub struct Input {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: String,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl Input {
    pub fn new(text: &str) -> Input {
        Input {
            typename: "Input".to_string(),
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
    #[wasm_bindgen(skip)]
    pub fn as_element(&self) -> Element {
        unsafe {
            Element(
                "Input".to_string(),
                std::mem::transmute::<&Input, *const u8>(self),
            )
        }
    }
}
