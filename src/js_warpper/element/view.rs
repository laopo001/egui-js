use crate::{js_warpper::element::label::Label, log};
use crate::js_warpper::element::link::Link;
use crate::js_warpper::element::Element;
use eframe::wasm_bindgen::{self, prelude::*};
use std::vec;

#[wasm_bindgen]
pub struct View {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub children: Vec<Element>,
    #[wasm_bindgen(skip)]
    pub dir: String,
    #[wasm_bindgen(skip)]
    pub id: String,
}

#[wasm_bindgen]
impl View {
    pub fn new(direction: &str) -> View {
        View {
            typename: "View".to_string(),
            children: vec![],
            dir: direction.to_string(),
            id: "".to_string(),
        }
    }
    pub fn add_child_view(&mut self, node: &View) {
        log(&format!("{:p}", node));
        self.children.push(node.as_element());
    }
    pub fn add_child_label(&mut self, node: &Label) {
        self.children.push(node.as_element());
    }
    pub fn add_child_link(&mut self, node: &Link) {
        self.children.push(node.as_element());
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
                "View".to_string(),
                std::mem::transmute::<&View, *const u8>(self),
            )
        }
    }
}