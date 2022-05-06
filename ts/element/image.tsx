import * as egui from '../../static/egui_js.js';
import { IElement } from './element';
import { Text } from './text'

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d')!;

export class Image extends IElement<{ url: string, width?: number, height?: number }> {

    create() {
        let res = egui.Image.new();
        let img = new window.Image();
        img.src = this.props.url;

        img.onload = (e) => {
            let width = this.props.width || img.width;
            let height = this.props.height || img.height;
            canvas.width = width;
            canvas.height = height;

            context.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
            var myData = context.getImageData(0, 0, width, height);
            res.set_data(Uint8Array.from(myData.data), myData.width, myData.height);
        };
        // fetch(this.props.url).then(b => b.blob()).then(blob => {
        //     return createImageBitmap(blob);
        // }).then(bitmap => {
        //     console.log(bitmap);
        // });
        return res
    }
}