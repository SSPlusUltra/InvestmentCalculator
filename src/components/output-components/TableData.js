const TableData = (props)=>{

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return(<tr>
        <td>{(props.one)}</td>
        <td>{formatter.format(props.two)}</td>
        <td>{formatter.format(props.three)}</td>
        <td>{formatter.format(props.four)}</td>
        <td>{formatter.format(props.five)}</td>
      </tr>);
}

export default TableData;