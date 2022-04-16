/* tslint:disable */
/* eslint-disable */
/**
*/
export class App {
  free(): void;
/**
* @param {string} _title
* @param {View} data
* @returns {App}
*/
  static create_app(_title: string, data: View): App;
/**
* @param {string} canvas_id
*/
  start(canvas_id: string): void;
}
/**
*/
export class Label {
  free(): void;
/**
* @param {string} text
* @returns {Label}
*/
  static new(text: string): Label;
/**
* @returns {string}
*/
  id: string;
/**
* @returns {string}
*/
  text: string;
}
/**
*/
export class Link {
  free(): void;
/**
* @param {string} text
* @param {string} url
* @returns {Link}
*/
  static new(text: string, url: string): Link;
/**
* @returns {string}
*/
  id: string;
/**
* @returns {string}
*/
  text: string;
/**
* @returns {string}
*/
  url: string;
}
/**
*/
export class View {
  free(): void;
/**
* @param {string} direction
* @returns {View}
*/
  static new(direction: string): View;
/**
* @param {View} node
*/
  add_child_view(node: View): void;
/**
* @param {Label} node
*/
  add_child_label(node: Label): void;
/**
* @param {Link} node
*/
  add_child_link(node: Link): void;
/**
* @returns {string}
*/
  id: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_app_free: (a: number) => void;
  readonly app_create_app: (a: number, b: number, c: number) => number;
  readonly app_start: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_link_free: (a: number) => void;
  readonly link_new: (a: number, b: number, c: number, d: number) => number;
  readonly link_set_text: (a: number, b: number, c: number) => void;
  readonly link_get_text: (a: number, b: number) => void;
  readonly link_set_url: (a: number, b: number, c: number) => void;
  readonly link_get_url: (a: number, b: number) => void;
  readonly link_get_id: (a: number, b: number) => void;
  readonly link_set_id: (a: number, b: number, c: number) => void;
  readonly __wbg_label_free: (a: number) => void;
  readonly label_new: (a: number, b: number) => number;
  readonly label_set_text: (a: number, b: number, c: number) => void;
  readonly label_get_text: (a: number, b: number) => void;
  readonly label_get_id: (a: number, b: number) => void;
  readonly label_set_id: (a: number, b: number, c: number) => void;
  readonly __wbg_view_free: (a: number) => void;
  readonly view_new: (a: number, b: number) => number;
  readonly view_add_child_view: (a: number, b: number) => void;
  readonly view_add_child_label: (a: number, b: number) => void;
  readonly view_add_child_link: (a: number, b: number) => void;
  readonly view_get_id: (a: number, b: number) => void;
  readonly view_set_id: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2040c96be8790959: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h77cb1a18c8f553e4: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hde178ac014ce8250: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9ba1e368b45a6783: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf9e8773c47c1865d: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3354795b29bf21c9: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h993d75df6d212d24: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha004a85c37ffa1b2: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h97f6282cfae9d8f0: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h22b10cbf549f66aa: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
