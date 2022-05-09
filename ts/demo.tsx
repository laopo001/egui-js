import { Label, View, Text, Link, Input, Button, Image } from './element';
import EGUI from './egui'
import logo from './images/googlelogo.png';

export function Demo(props: { test: string }) {
    return <view>
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

