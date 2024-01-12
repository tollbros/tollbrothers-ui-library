import { MortgageCalculator } from '@tollbrothers/tollbrothers-ui'
//import { DragSlider } from '@tollbrothers/tollbrothers-ui'

import { useState } from 'react'
import styles from '/styles/mortgageCalculatorLayout.module.scss'

export default function MortgageCalculatorTest() {
    const [salesNumber, setSalesNumber] = useState(500000);
    const [loanNumber, setLoanNumber] = useState(30);
    const [downPaymentNumber, setDownPaymentNumber] = useState(250000);
    const [interestNumber, setInterestNumber] = useState(3);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [showCalcButton, setSshowCalcButton] = useState(true);
    const [showAdvancedToggle, setShowAdvancedToggle] = useState(true); 
    
    return (

        <article>

            <aside className={styles.mortgageCalculator}>
                <div>
                    <MortgageCalculator
                          salesNumber={salesNumber}
                          setSalesNumber={setSalesNumber}
                          loanNumber={loanNumber}
                          setLoanNumber={setLoanNumber}
                          downPaymentNumber={downPaymentNumber}
                          setDownPaymentNumber={setDownPaymentNumber}
                          interestNumber={interestNumber}
                          setInterestNumber={setInterestNumber}
                          setMonthlyPayment={setMonthlyPayment}
                          monthlyPayment={monthlyPayment}
                          showAdvancedToggle={showAdvancedToggle}
                          setShowAdvancedToggle={setShowAdvancedToggle}
                          
                    />

                  
                </div>

            </aside>

        </article>

    )
}