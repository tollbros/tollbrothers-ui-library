import { DragSlider } from '@tollbrothers/tollbrothers-ui'


export default function DragSliderTest () {

    return (
        <DragSlider
            step={5000}
            minValue={10000}
            maxValue={1000000}
            initalNum={500000}
        />
    )
}