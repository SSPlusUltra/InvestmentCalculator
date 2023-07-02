import logo from './assets/logo-2.jpg';
import CalculateInvestment from './components/output-components/CalculateInvestment';
import InvestmentDisplay from './components/output-components/InvestmentDisplay';
import { useState } from 'react'; 
function App() {

  const[data,setData] = useState('')
  const[initial_invest, setInitial] = useState('')
  const calcinvHandler = (yearlydata)=>{
        setData(yearlydata);
  }

  const investmentHandler = (initial_investment)=>{
    setInitial(initial_investment);
  }

  let temp = <InvestmentDisplay Data = {data} initial_investment = {initial_invest}/>
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <CalculateInvestment onInvest={calcinvHandler} initialInvest = {investmentHandler}/>
      {(data.length===0 )? <p style={{"textAlign": "center"}}>no investment calculated yet</p> : temp }
    </div>
  );
}

export default App;
