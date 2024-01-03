import { MortgageCalculator } from '@tollbrothers/tollbrothers-ui'
//import { DragSlider } from '@tollbrothers/tollbrothers-ui'

import { useState } from 'react'
import styles from '/styles/mortgageCalculatorLayout.module.scss'

export default function MortgageCalculatorTest() {
    const [salesNumber, setSalesNumber] = useState(500000);
    const [loanNumber, setLoanNumber] = useState(30);
    const [downPaymentNumber, setDownPaymentNumber] = useState(250000);
    const [interestNumber, setInterestNumber] = useState(3);
    const [estimatedPayment, setEstimatedPayment] = useState(salesNumber);
    
    return (

        <article>

            <aside className={styles.mortgageCalculator}>
                <div>
                    <MortgageCalculator
                          salesStep={1000}
                          salesMin={10000}
                          salesMax={1000000}
                          salesNumber={salesNumber}
                          setSalesNumber={setSalesNumber}
                          salesCallOut={'Sales Price'}
                          loanStep={1}
                          loanMin={1}
                          loanMax={30}
                          loanNumber={loanNumber}
                          setLoanNumber={setLoanNumber}
                          loanCallOut={'Loan Term'}
                          downPaymentStep={1000}
                          downPaymentMin={0}
                          downPaymentMax={500000}
                          downPaymentNumber={downPaymentNumber}
                          setDownPaymentNumber={setDownPaymentNumber}
                          downPaymentCallOut={'Down Payment'}
                          interestStep={.1}
                          interestMin={3}
                          interestMax={10}
                          interestNumber={interestNumber}
                          setInterestNumber={setInterestNumber}
                          interestCallOut={'Interest Rate'}
                        
                    />

                  
                </div>

            </aside>

        </article>

    )
}