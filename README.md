## 介绍 （开发中）

这是一个UI库，使用 javascript（typescript） 调用 rust egui库编译的 `wasm` 运行webgl绘制UI。使用tsx描绘页面元素。目前有以下7种基础标签。

* input 
* label
* view
* link
* image
* text
* button

## Start

```
npm run watch:rs
npm run serve
```

## DEMO [online](https://egui-js.vercel.app/)



```javascript
import logo from './images/googlelogo.png';
export function Demo(props: { test: string }) {
    return <view id="view">
        <label>test</label>
        <view dir='horizontal'>
            <label>123123</label>
            <label><text color={[255, 0, 0, 255]}>123</text></label>
            <link url='https://www.baidu.com'>123</link>
            <view backgroundColor={[255, 255, 0, 255]}>
                <input>123123</input>
            </view>

        </view>

        <view >
            <button onClick={() => {
                console.log("click");
            }}><text color={[0, 255, 0, 1]}>test</text></button>
            <image height={100} width={300} url={logo} />
            <input>123123</input>
        </view>
    </view>
}

let data = EGUI.render(<Demo test="999"></Demo>)
let app = App.create_app("canvas", data);
```

## TODO

目前采用类dom的命令式更新。以后可能加入类react响应式布局更新。