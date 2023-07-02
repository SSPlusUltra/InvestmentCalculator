import InvestmentForm from "../input-components/InvestmentForm"

const CalculateInvestment = (props)=>{

    const calculateHandler = (userInput) => {
    
        const yearlyData = []; 
    
        let currentSavings = userInput['curr_savings']; 
        const yearlyContribution = userInput['year_savings']; 
        const expectedReturn = userInput['exp_interest'] / 100;
        const duration = userInput['duration'];
    
        
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            year: i + 1,
            savingsEndOfYear: currentSavings,
            yearlyInterest: yearlyInterest,
            yearlyContribution: yearlyContribution
          });
        }
    
        props.onInvest(yearlyData);
        props.initialInvest(userInput['curr_savings']);
      };

    return(<InvestmentForm onCalculate = {calculateHandler}/>);
}

export default CalculateInvestment;