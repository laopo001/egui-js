// use eframe::wasm_bindgen::{self, prelude::*};
use eframe::wasm_bindgen::{self, prelude::*};
use eframe::{egui, epi};

use crate::js_warpper::node::Node;

pub struct WebApp {
    data: *const Node,
}

impl WebApp {
    pub fn new(data: &Node) -> Self {
        Self { data }
    }
}

impl epi::App for WebApp {
    fn name(&self) -> &str {
        "eframe template"
    }

    fn update(&mut self, ctx: &egui::Context, _frame: &epi::Frame) {
        egui::CentralPanel::default().show(ctx, |ui| {

            let data  = unsafe { &*self.data };
            if data.typename == "label" {
                let value = &data.data;
                ui.label(value);
            }
            // egui::warn_if_debug_build(ui);
        });
    }
}
