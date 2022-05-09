
export { };


declare global {
    declare module '*.less'
    declare module '*.css'
    declare module '*.png'
    // interface Window {
    //     ENV: any;
    // }

    type WithCommonProps<T> = T & { id?: string };
    namespace JSX {
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children?: {}; }
        interface IntrinsicElements {
            view: WithCommonProps<import("../ts/element/view").ViewProps>;
            label: WithCommonProps<import("../ts/element/label").LabelProps>;
            text: import("../ts/element/text").TextProps;
            link: WithCommonProps<import("../ts/element/link").LinkProps>;
            input: WithCommonProps<import("../ts/element/input").InputProps>;
            image: WithCommonProps<import("../ts/element/image").ImageProps>;
            button: WithCommonProps<import("../ts/element/button").ButtonProps>;
        }
    }

}

