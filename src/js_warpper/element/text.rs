use crate::js_warpper::element::Element;
use eframe::egui::{Color32, RichText};
use eframe::wasm_bindgen::{self, prelude::*};
#[wasm_bindgen]
pub struct Text {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: String,
    #[wasm_bindgen(skip)]
    pub color: Box<[u8]>,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl Text {
    pub fn new(text: &str, color: Box<[u8]>) -> Text {
        Text {
            typename: "Text".to_string(),
            text: text.to_string(),
            color,
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

    pub fn set_color(&mut self, color: Box<[u8]>) {
        return self.color = color;
    }
    #[wasm_bindgen(getter = color)]
    pub fn get_color(&self) -> Box<[u8]> {
        return self.color.clone();
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
                "Text".to_string(),
                std::mem::transmute::<&Text, *const u8>(self),
            )
        }
    }
}

use eframe::egui::Ui;
impl Text {
    pub fn create(&mut self) -> RichText {
        return RichText::new(&self.text).color(Color32::from_rgba_premultiplied(
            self.color[0],
            self.color[1],
            self.color[2],
            self.color[3] * 255,
        ));
    }
}
