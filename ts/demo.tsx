import { Label, View, Text, Link, Input, Button, Image } from './element';
import EGUI from './egui'
import logo from './images/googlelogo.png';


export function Demo(props: { test: string }) {

    return <View >
        <View dir='horizontal' width={200} height={300}>
            <Label>{props.test}</Label>
            <Label><Text color={[255, 0, 0, 1]}>123</Text></Label>
            <Link url='https://www.baidu.com'>123</Link>
            <Input>123123</Input>
        </View>


        <Button onClick={() => {
            console.log("click");
        }}><Text color={[0, 255, 0, 1]}>test</Text></Button>
        <Image height={100} width={300} url={logo} />
        <Input>123123</Input>
    </View>
}