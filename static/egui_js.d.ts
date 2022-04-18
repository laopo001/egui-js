/* tslint:disable */
/* eslint-disable */
/**
*/
export class App {
  free(): void;
/**
* @param {string} title
* @param {View} data
* @returns {App}
*/
  static create_app(title: string, data: View): App;
/**
* @param {string} canvas_id
*/
  start(canvas_id: string): void;
/**
* @param {string} id
* @returns {Element | undefined}
*/
  get_by_id_element(id: string): Element | undefined;
}
/**
*/
export class Element {
  free(): void;
/**
* @returns {number}
*/
  readonly iptr: number;
/**
* @returns {number}
*/
  readonly js_ptr: number;
/**
* @returns {string}
*/
  readonly type: string;
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
* @returns {Element}
*/
  as_element(): Element;
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
* @returns {Element}
*/
  as_element(): Element;
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
* @returns {Element}
*/
  as_element(): Element;
/**
* @returns {string}
*/
  id: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_view_free: (a: number) => void;
  readonly view_new: (a: number, b: number) => number;
  readonly view_add_child_view: (a: number, b: number) => void;
  readonly view_add_child_label: (a: number, b: number) => void;
  readonly view_add_child_link: (a: number, b: number) => void;
  readonly view_get_id: (a: number, b: number) => void;
  readonly view_set_id: (a: number, b: number, c: number) => void;
  readonly view_as_element: (a: number) => number;
  readonly __wbg_link_free: (a: number) => void;
  readonly link_new: (a: number, b: number, c: number, d: number) => number;
  readonly link_set_text: (a: number, b: number, c: number) => void;
  readonly link_get_text: (a: number, b: number) => void;
  readonly link_set_url: (a: number, b: number, c: number) => void;
  readonly link_get_url: (a: number, b: number) => void;
  readonly link_get_id: (a: number, b: number) => void;
  readonly link_set_id: (a: number, b: number, c: number) => void;
  readonly link_as_element: (a: number) => number;
  readonly __wbg_app_free: (a: number) => void;
  readonly app_create_app: (a: number, b: number, c: number) => number;
  readonly app_start: (a: number, b: number, c: number, d: number) => void;
  readonly app_get_by_id_element: (a: number, b: number, c: number) => number;
  readonly __wbg_element_free: (a: number) => void;
  readonly element_get_type_name: (a: number, b: number) => void;
  readonly element_get_ptr: (a: number) => number;
  readonly element_get_js_ptr: (a: number) => number;
  readonly __wbg_label_free: (a: number) => void;
  readonly label_new: (a: number, b: number) => number;
  readonly label_set_text: (a: number, b: number, c: number) => void;
  readonly label_get_text: (a: number, b: number) => void;
  readonly label_get_id: (a: number, b: number) => void;
  readonly label_set_id: (a: number, b: number, c: number) => void;
  readonly label_as_element: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd59f5e83f90fe7d4: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h43aa5fe6afdb8687: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h63fd760bc3a1f2f5: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9dec9fe7658d82bf: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h84b34f985ebe8e14: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfa76d001ba0ad1ac: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8d35d13216d0ad10: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha8f03f3742ce8c3f: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h74d2971fb27934c1: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6f3e5fa77e4b8f50: (a: number, b: number, c: number) => void;
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
