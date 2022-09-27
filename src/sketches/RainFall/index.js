import Rain from "./Rain";
import Sketch from 'react-p5'

const Rainfall = (props) => {
    const {width, height, background, color} = props;

    var rain;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        rain = new Rain(p5, width, height, color);
        rain.createRainDrops();        
    }

    const draw = (p5) => {
        p5.background(background);
        rain.display();
    }

    return <Sketch setup={setup} draw={draw} />
}

export default Rainfall;