use crate::js_warpper::element::Element;
use eframe::wasm_bindgen::{self, prelude::*};

#[wasm_bindgen]
pub struct Image {
    #[wasm_bindgen(skip)]
    pub typename: String,
    #[wasm_bindgen(skip)]
    pub data: Box<[u8]>,
    #[wasm_bindgen(skip)]
    pub id: String,
    pub width: f32,
    pub height: f32,
}

#[wasm_bindgen]
impl Image {
    pub fn new() -> Image {
        Image {
            typename: "Image".to_string(),
            data: Box::new([]),
            id: "".to_string(),
            width: 0.0,
            height: 0.0,
        }
    }
    pub fn set_data(&mut self, data: Box<[u8]>, width: f32, height: f32) {
        self.data = data;
        self.width = width;
        self.height = height;
    }
    pub fn get_data(&self) -> Box<[u8]> {
        return self.data.clone();
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
                "Image".to_string(),
                std::mem::transmute::<&Image, *const u8>(self),
            )
        }
    }
}
use eframe::egui;
use eframe::egui::Ui;
impl Image {
    pub fn update(&mut self, ui: &mut Ui) {
        let img = if self.width > 0.0 {
            egui::ColorImage::from_rgba_unmultiplied(
                [self.width as usize, self.height as usize],
                self.data.as_ref(),
            )
        } else {
            egui::ColorImage::example()
        };
        let texture = ui.ctx().load_texture(
            "my-image",
            img,
        );
        ui.image(&texture, [self.width, self.height]);
    }
}
