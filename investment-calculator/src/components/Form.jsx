import { useState } from "react";

const INITIAL_INVESTMENT_DETAIL = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

function isNumber (value) {
    const number = parseFloat(value);
    return !isNaN(number) && isFinite(number);
}

function isValidValue (value) {
    return value !== 0 && isNumber(value);
}

function areValidParameters(investmentDetail) {
    for (let key in investmentDetail) {
        if (investmentDetail.hasOwnProperty(key) && !isValidValue(investmentDetail[key])) {
            return false;
        }
    }
    return true;
}

function convertToNumber(investmentDetail) {
    for (let key in investmentDetail) {
        if (investmentDetail.hasOwnProperty(key)) {
            investmentDetail[key] = parseFloat(investmentDetail[key]);
        }
    }
    return investmentDetail;
}

const Form = ({updateResults}) => {

    const [investmentDetail, setInvestmentDetail] = useState(INITIAL_INVESTMENT_DETAIL);

    function handleInitialInvestmentChange(e) {
        const value = e.target.value;
        const prevInvestmentDetail = investmentDetail;
        setInvestmentDetail(prevInvestmentDetail => ({...prevInvestmentDetail, 
            initialInvestment : value
        }));
        const newInvestmentDetail = {...prevInvestmentDetail, 
            initialInvestment : parseFloat(value)
        };
        if (areValidParameters(newInvestmentDetail)) {
            updateResults(convertToNumber(newInvestmentDetail));
        }
        
    }

    function handleAnnualInvestmentChange(e) {
        const value = e.target.value;
        const prevInvestmentDetail = investmentDetail;
        setInvestmentDetail(prevInvestmentDetail => ({...prevInvestmentDetail, 
            annualInvestment : value
        }));
        const newInvestmentDetail = {...prevInvestmentDetail, 
            annualInvestment : parseFloat(value)
        };
        if (areValidParameters(newInvestmentDetail)) {
            updateResults(convertToNumber(newInvestmentDetail));
        }
        
    }

    function handleExpectedReturnChange(e) {
        const value = e.target.value;
        const prevInvestmentDetail = investmentDetail;
        setInvestmentDetail(prevInvestmentDetail => ({...prevInvestmentDetail, 
            expectedReturn : value
        }));
        const newInvestmentDetail = {...prevInvestmentDetail, 
            expectedReturn : parseFloat(value)
        };
        if (areValidParameters(newInvestmentDetail)) {
            console.log(newInvestmentDetail);
            updateResults(convertToNumber(newInvestmentDetail));
        }
    }

    function handleDurationChange(e) {
        const value = e.target.value;
        const prevInvestmentDetail = investmentDetail;
        setInvestmentDetail(prevInvestmentDetail => ({...prevInvestmentDetail, 
            duration : value
        }));
        const newInvestmentDetail = {...prevInvestmentDetail, 
            duration : parseFloat(value)
        };
        if (areValidParameters(newInvestmentDetail)) {
            updateResults(convertToNumber(newInvestmentDetail));
        }
    }

    return (
        <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initial-investment" >INITIAL INVESTMENT</label>
                <input type="text" onChange={handleInitialInvestmentChange} required value={investmentDetail.initialInvestment}/>
            </p>
            <p>
                <label htmlFor="annual-investment" >ANNUAL INVESTMENT</label>
                <input type="number" onChange={handleAnnualInvestmentChange} required value={investmentDetail.annualInvestment}/>
            </p>
                
                
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expected-return">EXPECTED RETURN</label>
                <input type="text" onChange={handleExpectedReturnChange} required value={investmentDetail.expectedReturn}/>
            </p>
            <p>
                <label htmlFor="duration">DURATION</label>
                <input type="text" onChange={handleDurationChange} required value={investmentDetail.duration}/> 
            </p>     
        </div>
    </section>
    );
};

export default Form;