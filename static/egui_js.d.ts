/* tslint:disable */
/* eslint-disable */
/**
* @param {string} canvas_id
* @param {Node} data
*/
export function main(canvas_id: string, data: Node): void;
/**
*/
export class App {
  free(): void;
/**
* @param {string} _title
* @param {Node} data
* @returns {App}
*/
  static create_app(_title: string, data: Node): App;
/**
* @param {string} canvas_id
*/
  start(canvas_id: string): void;
}
/**
*/
export class Node {
  free(): void;
/**
* @param {string} typename
* @param {string} data
* @param {number} num
* @returns {Node}
*/
  static new(typename: string, data: string, num: number): Node;
/**
* @param {number} n
* @returns {number}
*/
  get(n: number): number;
/**
* @param {string} data
*/
  set_data(data: string): void;
/**
* @returns {string}
*/
  get_data(): string;
/**
*/
  num: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_node_free: (a: number) => void;
  readonly __wbg_get_node_num: (a: number) => number;
  readonly __wbg_set_node_num: (a: number, b: number) => void;
  readonly node_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly node_get: (a: number, b: number) => number;
  readonly node_set_data: (a: number, b: number, c: number) => void;
  readonly node_get_data: (a: number, b: number) => void;
  readonly main: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_app_free: (a: number) => void;
  readonly app_create_app: (a: number, b: number, c: number) => number;
  readonly app_start: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9447ff34d6080c8f: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdf42a6afa2c25490: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h754c181f2a70fcc0: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5cb475519c0e7bfe: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hca58c19fb9415cbf: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb310d66d3fb64618: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h05e1535793b1e49c: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdf37a06ea81fc9d0: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5100e5139991431c: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h343fdc6894be5509: (a: number, b: number, c: number) => void;
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
