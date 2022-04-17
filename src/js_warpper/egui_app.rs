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
use crate::log;
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
                if c.get_type() == "Label" {
                    ui.label(c.as_label().text.as_str());
                } else if c.get_type() == "View" {
                    loop_div(ui, c.as_view())
                } else if c.get_type() == "Link" {
                    let link = c.as_link();
                    ui.hyperlink_to(&link.text, &link.url);
                }
            }
        });
    } else if view.dir == "horizontal" {
        ui.horizontal(|ui| {
            for c in view.children.iter() {
                if c.get_type() == "Label" {
                    ui.label(c.as_label().text.as_str());
                } else if c.get_type() == "View" {
                    loop_div(ui, c.as_view())
                } else if c.get_type() == "Link" {
                    let link = c.as_link();
                    ui.hyperlink_to(&link.text, &link.url);
                }
            }
        });
    } else {
        log("view.dir没有匹配");
    }
}
