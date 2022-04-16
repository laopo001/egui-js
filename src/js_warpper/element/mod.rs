pub mod label;
pub mod view;
pub mod link;
use label::Label;
use view::View;
use link::Link;
use eframe::wasm_bindgen::{self, prelude::*};


pub enum Element {
    Label(Label),
    View(View),
    Link(Link)
}