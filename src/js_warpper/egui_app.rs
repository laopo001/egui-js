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

            // ui.text_edit_singleline(&mut "name");

            for event in &ctx.output().events {
                // output_event_history.push_back(event.clone());
                log(&format!("{:?}", event));
            }
        });
    }
}

fn loop_div(ui: &mut Ui, view: &View) {
    let run = |ui: &mut Ui| {
        for c in view.children.iter() {
            if c.get_type() == "Label" {
                ui.label(c.as_label().text.as_str());
            } else if c.get_type() == "View" {
                loop_div(ui, c.as_view())
            } else if c.get_type() == "Link" {
                let link = c.as_link();
                ui.hyperlink_to(&link.text, &link.url);
            } else if c.get_type() == "Input" {
                let input = c.as_input();
                ui.text_edit_singleline(&mut input.text);

            }
        }
    };
    if view.dir == "vertical" {
        ui.vertical(run);
    } else if view.dir == "horizontal" {
        ui.horizontal(run);
    } else {
        log("view.dir没有匹配");
    }
}
