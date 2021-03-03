use std::panic;
use wasm_bindgen::prelude::*;
mod form;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn use_panic_hook() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
}
