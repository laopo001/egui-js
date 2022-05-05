pub mod button;
pub mod input;
pub mod label;
pub mod link;
pub mod view;
pub mod text;
// use eframe::wasm_bindgen::__rt::WasmRefCell;
use button::Button;
use eframe::wasm_bindgen::{self, prelude::*};
use input::Input;
use label::Label;
use link::Link;
use view::View;
#[wasm_bindgen]
pub struct Element(String, *const u8);

#[wasm_bindgen]
impl Element {
    #[wasm_bindgen(getter = type)]
    pub fn get_type_name(&self) -> String {
        return self.0.clone();
    }
    #[wasm_bindgen(getter = iptr)]
    pub fn get_ptr(&self) -> *const u8 {
        // return Box::into_raw(Box::new(WasmRefCell::new(unsafe {*self.1})));
        return self.1 as *const u8;
    }
    #[wasm_bindgen(getter = js_ptr)]
    pub fn get_js_ptr(&self) -> u32 {
        return self.get_ptr() as u32 - 4;
    }
}

impl Element {
    pub fn as_label(&self) -> &mut Label {
        return unsafe { std::mem::transmute::<*const u8, &mut Label>(self.1) };
    }

    pub fn as_link(&self) -> &mut Link {
        return unsafe { std::mem::transmute::<*const u8, &mut Link>(self.1) };
    }

    pub fn as_view(&self) -> &mut View {
        return unsafe { std::mem::transmute::<*const u8, &mut View>(self.1) };
    }

    pub fn as_input(&self) -> &mut Input {
        return unsafe { std::mem::transmute::<*const u8, &mut Input>(self.1) };
    }
    pub fn as_button(&self) -> &mut Button {
        return unsafe { std::mem::transmute::<*const u8, &mut Button>(self.1) };
    }

    pub fn get_type(&self) -> &str {
        return self.0.as_str();
    }
}
