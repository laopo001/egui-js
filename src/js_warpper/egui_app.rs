use std::vec;

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

            // let texture = ui
            //     .ctx()
            //     .load_texture("my-image", egui::ColorImage::example());
            // ui.image(&texture, [500.0, 100.0]);

            // ui.text_edit_singleline(&mut "name");

            // for event in &ctx.output().events {
            //     // output_event_history.push_back(event.clone());
            //     log(&format!("{:?}", event));
            // }
        });
    }
}

fn loop_div(ui: &mut Ui, view: &View) {
    let run = |ui: &mut Ui| {
        for c in view.children.iter() {
            if c.get_type() == "Label" {
                let label = c.as_label();
                label.update(ui);
            } else if c.get_type() == "View" {
                loop_div(ui, c.as_view())
            } else if c.get_type() == "Link" {
                let link = c.as_link();
                link.update(ui);
            } else if c.get_type() == "Input" {
                let input = c.as_input();
                input.update(ui);
            } else if c.get_type() == "Button" {
                let el = c.as_button();
                el.update(ui);
            } else if c.get_type() == "Image" {
                let el = c.as_image();
                el.update(ui);
            }
        }
    };

    if view.background_data.len() > 0 {
        ui.painter().rect_filled(
            ui.available_rect_before_wrap(),
            0.0,
            egui::Color32::from_rgba_premultiplied(
                view.background_data[0],
                view.background_data[1],
                view.background_data[2],
                view.background_data[3],
            ),
        );
    }

    if view.width > 0.0 {
        ui.set_width(view.width);
    }
    if view.height > 0.0 {
        // log(view.height.to_string().as_str());
        ui.set_height(view.height);
    }

    if view.dir == "vertical" {
        ui.vertical(run);
    } else if view.dir == "horizontal" {
        ui.horizontal(run);
    } else {
        log("view.dir没有匹配");
    }
}
