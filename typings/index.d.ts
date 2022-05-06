export { };


declare global {
    declare module '*.less'
    declare module '*.css'
    declare module '*.png'
    // interface Window {
    //     ENV: any;
    // }
    namespace JSX {
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children?: {}; }
        // interface IntrinsicElements {
        //     a: {};
        // }
    }
}

