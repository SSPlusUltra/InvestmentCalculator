
import { useState } from "react";
const InvestmentForm = (props)=>{
  const [currentsavings, setcurrentSavings] = useState('');
  const [yearlysavings, setyearlySavings] = useState('');
  const [expectedinterest, setexpectedInterest] = useState('');
  const [investmentduration, setinvestmentDuration] = useState('');

  const currentsavingsHandler = (event)=>{
          setcurrentSavings(parseFloat(event.target.value));
  }

  const yearlysavingsHandler = (event)=>{
    setyearlySavings(parseFloat(event.target.value));

  }

  const expectedinterestHandler = (event)=>{
       setexpectedInterest(parseFloat(event.target.value));
  }

  const investmentdurationHandler = (event)=>{
       setinvestmentDuration(parseFloat(event.target.value));
  }

  const submitHandler = (event)=>{
    event.preventDefault();

    const investmentData = {
        'curr_savings': currentsavings,
        'year_savings': yearlysavings,
        'exp_interest': expectedinterest,
        duration: investmentduration
    }

    props.onCalculate(investmentData);
    
   setcurrentSavings('')
   setexpectedInterest('')
   setinvestmentDuration('')
   setyearlySavings('')

}

const resetHandler = ()=>{
  setcurrentSavings('')
   setexpectedInterest('')
   setinvestmentDuration('')
   setyearlySavings('')
}


    return(
     <form onSubmit= {submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value = {currentsavings} onChange= {currentsavingsHandler} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value = {yearlysavings} onChange= {yearlysavingsHandler}  type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={expectedinterest} onChange= {expectedinterestHandler} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={investmentduration} onChange= {investmentdurationHandler} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>);

};

export default InvestmentForm;