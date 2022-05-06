import { Label, View, Text, Link, Input, Button } from './element';
import EGUI from './egui'


export function Demo(props: { test: string }) {

    return <View >
        <View dir='horizontal'>
            <Label>{props.test}</Label>
            <Label><Text color={[255, 0, 0, 1]}>123</Text></Label>
            <Link url='https://www.baidu.com'>123</Link>
        </View>
        <Input>123123</Input>

        <Button onClick={()=>{
            console.log("click");
        }}><Text color={[0, 255, 0, 1]}>test</Text></Button>
    </View>
}