import { MortgageCalculator } from '@tollbrothers/tollbrothers-ui'
import { DragSlider } from '@tollbrothers/tollbrothers-ui'

import { useState } from 'react'
import styles from './mortgageCalculatorLayout.module.scss'

export default function MortgageCalculatorTest() {
    const [myNumber, setMyNumber] = useState(500000);
    // const [myNumber, setMyNumber] = useState(500000);
    // const [myNumber, setMyNumber] = useState(500000);
    const myMin = 10000;
    const myMax = 1000000;

    return (

        <article>

            <aside className={styles.mortgageCalculator}>

                <div>

                    <DragSlider
                        step={1000}
                        minValue={10000}
                        maxValue={1000000}
                        number={myNumber}
                        setNumber={setMyNumber}
                    />

                    <DragSlider
                        step={1000}
                        minValue={10000}
                        maxValue={1000000}
                        number={myNumber}
                        setNumber={setMyNumber}
                    />

                    <DragSlider
                        step={1000}
                        minValue={10000}
                        maxValue={1000000}
                        number={myNumber}
                        setNumber={setMyNumber}
                    />
                </div>
                
            </aside>

        </article>

    )
}