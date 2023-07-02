import TableData from "./TableData";
const InvestmentDisplay = (props)=>{
    return(<table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.Data.map((inv)=>(<TableData key={inv.year} one = {inv.year} two = {inv.savingsEndOfYear} three = {inv.yearlyInterest} four = {inv.savingsEndOfYear - props.initial_investment - (inv.yearlyContribution*inv.year)} five={props.initial_investment+inv.yearlyContribution*inv.year}/>))}
    </tbody>
  </table>);
};

export default InvestmentDisplay;
