export { };
declare module '*.less'
declare module '*.css'
declare global {
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

