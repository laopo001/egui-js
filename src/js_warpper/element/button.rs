use crate::js_warpper::element::Element;
use crate::js_warpper::element::text::Text;
use crate::log;
use eframe::wasm_bindgen::{self, prelude::*};

#[wasm_bindgen]
pub struct Button {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub text: Text,
    #[wasm_bindgen(skip)]
    pub id: String,
    click_cb: Box<js_sys::Function>,
}

#[wasm_bindgen]
impl Button {
    pub fn new(text: Text) -> Button {
        Button {
            typename: "Button".to_string(),
            text: text,
            id: "".to_string(),
            click_cb: Box::new(js_sys::Function::new_no_args("no")),
        }
    }
    #[wasm_bindgen(setter = text)]
    pub fn set_text(&mut self, text: Text) {
        return self.text = text;
    }
    #[wasm_bindgen(getter = text)]
    pub fn get_text(&self) -> Text {
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
                "Button".to_string(),
                std::mem::transmute::<&Button, *const u8>(self),
            )
        }
    }

    pub fn on_click(&mut self, cb: js_sys::Function) {
        self.click_cb = Box::new(cb);
        // (self.click_cb).call1(&JsValue::null(), &JsValue::from_str("test"));

        //   cb.task();
        // log((self.click_cb as u32).to_string().as_str());
        // unsafe {
        //     let _ = (*self.click_cb).call1(&JsValue::null(), &JsValue::from_str("test"));
        // }
    }
}

use eframe::egui::Ui;
impl Button {
    pub fn update(&mut self, ui: &mut Ui) {
        if ui.button(self.text.create()).clicked() {
            let _ = (self.click_cb).call0(&JsValue::null());
        }
    }
}
