import { DragSlider } from '@tollbrothers/tollbrothers-ui'
import { useState } from 'react'
import styles from './dragSliderLayout.module.scss'

export default function DragSliderTest() {
    const [myNumber, setMyNumber] = useState(500000);
    //const myNumber = 500000;
    const myMin = 10000;
    const myMax = 1000000;
    //const step = 5000;

    return (

        <article>

            <aside className={styles.dragContainer}>

                <div>
                <p>My Value: {myNumber}</p>
                    <DragSlider
                       step={1000}
                       minValue={10000}
                       maxValue={1000000}
                       number={myNumber}
                       setNumber={setMyNumber}
                    />
                    <div className={styles.minmax}>
                    <span>min: {myMin}</span>
                    <span>max: {myMax}</span>
                </div>
                </div>

            </aside>


        </article>

    )
}