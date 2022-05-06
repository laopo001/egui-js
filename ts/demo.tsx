import { Label, View, Text } from './element';
import EGUI from './egui'


export function Demo(props: { test: string }) {

    return <View >
        <View ><Label>{props.test}</Label></View><Label><Text color={[255, 0, 0, 1]}>123</Text></Label>
    </View>
}