import Chart from "../Chart/chart";

const ExpenssesChart = (props)=>{

    const chartBar =[
        {label: "jan", value: "0"},
        {label: "feb", value: "0"},
        {label: "mar", value: "0"},
        {label: "apr", value: "0"},
        {label: "may", value: "0"},
        {label: "jun", value: "0"},
        {label: "jul", value: "0"},
        {label: "agu", value: "0"},
        {label: "sep", value: "0"},
        {label: "oct", value: "0"},
        {label: "nov", value: "0"},
        {label: "dec", value: "0"},
    ]
  for( const expense of props.expenses){
     const chartBarMonth = expense.date.getMonth();
     chartBar[chartBarMonth].value += expense.amount
  }

  return(
    <Chart  dataPoints={chartBar}/>
  )
}

export default ExpenssesChart;