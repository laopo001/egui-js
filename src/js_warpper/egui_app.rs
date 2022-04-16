use std::f32::consts::E;

// use eframe::wasm_bindgen::{self, prelude::*};
use eframe::wasm_bindgen::{self, prelude::*};
use eframe::{
    egui::{self, Ui},
    epi,
};

use crate::js_warpper::element::view::View;
// use crate::js_warpper::element::link::Link;
use crate::js_warpper::element::Element;
pub struct WebApp {
    pub data: *const View,
}

impl WebApp {
    pub fn new(data: &View) -> Self {
        Self { data }
    }
    pub(crate) fn get_data(&self) -> &View {
        let data = unsafe { &*self.data };
        return data;
    }
}
fn test(s: &str) {
    web_sys::console::log_1(&eframe::wasm_bindgen::JsValue::from_str(s));
}

impl epi::App for WebApp {
    fn name(&self) -> &str {
        "eframe template"
    }

    fn update(&mut self, ctx: &egui::Context, _frame: &epi::Frame) {
        egui::CentralPanel::default().show(ctx, |ui| {
            // ui.label("test");
            // ui.hyperlink_to("egui on GitHub", "https://www.github.com/emilk/egui/");

            let data = unsafe { &*self.data };
            loop_div(ui, data);
            // test(&data.children.len().to_string());

            // for x in 0..10000 {
            //     ui.vertical(|ui| {
            //         ui.label("&label.tex");
            //         ui.hyperlink_to("egui on GitHub", "https://www.github.com/emilk/egui/");
            //     });
            // }

            // egui::warn_if_debug_build(ui);
        });
    }
}

fn loop_div(ui: &mut Ui, view: &View) {
    if view.dir == "vertical" {
        ui.vertical(|ui| {
            for c in view.children.iter() {
                match c {
                    Element::Label(label) => {
                        ui.label(&label.text);
                    }
                    Element::View(view) => loop_div(ui, view),
                    Element::Link(link) => {
                        ui.hyperlink_to(&link.text, &link.url);
                    }
                }
            }
        });
    } else if view.dir == "horizontal" {
        ui.horizontal(|ui| {
            for c in view.children.iter() {
                match c {
                    Element::Label(label) => {
                        ui.label(&label.text);
                    }
                    Element::View(view) => loop_div(ui, view),
                    Element::Link(link) => {
                        ui.hyperlink_to(&link.text, &link.url);
                    }
                }
            }
        });
    } else {
        test("view.dir没有匹配");
    }
}
