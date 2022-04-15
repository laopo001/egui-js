use eframe::wasm_bindgen::{self, prelude::*};

#[wasm_bindgen]
pub struct Node {
    #[wasm_bindgen(skip)] 
    pub typename: String,
    #[wasm_bindgen(skip)] 
    pub data: String,
    pub num: i32,
}
#[wasm_bindgen]
impl Node {
    pub fn new(typename: &str, data: &str, num: i32) -> Node {
        Node {
            typename: typename.to_string(),
            data: data.to_string(),
            num,
        }
    }
    pub fn get(&self, n: i32) -> i32 {
        return self.num + n;
    }
    pub fn set_data(&mut self, data: &str)  {
        return self.data = data.to_string();
    }
    pub fn get_data(&self) -> String {
        return self.data.clone();
    }
}
