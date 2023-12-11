import { DragSlider } from '@tollbrothers/tollbrothers-ui'
import { useState } from 'react'
import styles from './dragSliderLayout.module.scss'

export default function DragSliderTest () {


    const [myNumber, setMyNumber] = useState(200000);
    const myMin = 10000;
    const myMax = 1000000;

    return (

        <article>

            <aside className={styles.dragContainer}>
                <h2>plain</h2>
                <p>above</p>
                <div>
                <DragSlider
                    step={5000}
                    minValue={10000}
                    maxValue={1000000}
                    initalNum={500000}
                />
                </div>
                <p>Below</p>
            </aside>


            <aside className={`${styles.dragContainer} ${styles.wider}`}>
                <h2>with state</h2>
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