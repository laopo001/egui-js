import { Label, View } from './element';
import EGUI  from './egui'


export function Demo(props: { test: string }) {

    let res = <View >

        <View ><Label>{props.test}</Label></View><Label>123</Label>
    </View>
    return res;
}