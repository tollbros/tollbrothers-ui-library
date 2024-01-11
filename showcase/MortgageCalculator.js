import { MortgageCalculator } from '@tollbrothers/tollbrothers-ui'
//import { DragSlider } from '@tollbrothers/tollbrothers-ui'

import { useState } from 'react'
import styles from './mortgageCalculatorLayout.module.scss'

export default function MortgageCalculatorTest() {
    const [salesNumber, setSalesNumber] = useState(500000);
    const [loanNumber, setLoanNumber] = useState(30);
    const [downPaymentNumber, setDownPaymentNumber] = useState(250000);
    const [interestNumber, setInterestNumber] = useState(3);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [showCalcButton, setSshowCalcButton] = useState(true);
    const [showAdvancedToggle, setShowAdvancedToggle] = useState(true); 
    //const [taxNumber, setTaxNumber] = useState(0); 
    //const [insuranceNumber, setInsuranceNumber] = useState(0);
    //const [hoaNumber, setHoaNumber] = useState(0);
    return (

        <article>

            <aside className={styles.mortgageCalculator}>
                <div>
                    <MortgageCalculator
                          //salesStep={1000}
                          //salesMin={10000}
                          //salesMax={1000000}
                          salesNumber={salesNumber}
                          setSalesNumber={setSalesNumber}
                          //salesCallOut={'Sales Price'}
                          //loanStep={1}
                          //loanMin={1}
                          //loanMax={30}
                          loanNumber={loanNumber}
                          setLoanNumber={setLoanNumber}
                          //loanCallOut={'Loan Term'}
                          //downPaymentStep={1000}
                          //downPaymentMin={0}
                          //downPaymentMax={500000}
                          downPaymentNumber={downPaymentNumber}
                          setDownPaymentNumber={setDownPaymentNumber}
                          //downPaymentCallOut={'Down Payment'}
                          //interestStep={.1}
                          //interestMin={1}
                          //interestMax={10}
                          interestNumber={interestNumber}
                          setInterestNumber={setInterestNumber}
                          //interestCallOut={'Interest Rate'}
                          //taxesStep={100}
                          //taxesMin={0}
                          //taxesMax={1200}
                          //taxNumber={taxNumber}
                          //setTaxNumber={setTaxNumber}
                          //insuranceStep={100}
                          //insuranceMin={0}
                          //insuranceMax={1000}
                          //insuranceNumber={insuranceNumber}
                          //setInsuranceNumber={setInsuranceNumber}
                          setMonthlyPayment={setMonthlyPayment}
                          monthlyPayment={monthlyPayment}
                          showAdvancedToggle={showAdvancedToggle}
                          //showCalcButton={showCalcButton}
                          //hoaStep={100}
                          //hoaMin={100}
                          //hoaMax={1000}
                          //hoaNumber={hoaNumber}
                          //setHoaNumber={setHoaNumber}
                          
                    />

                  
                </div>

            </aside>

        </article>

    )
}