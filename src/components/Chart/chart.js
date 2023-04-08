import './chart.css'
import ChartBar from './chartBar';
const Chart = props =>{
const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
const totalMaximun = Math.max(...dataPointValue)
    return (
        <div className='chart'>
         {props.dataPoints.map((dataPoint) =>(
            <ChartBar key={dataPoint.label} value={dataPoint.value} max={totalMaximun} label={dataPoint.label}/>
         ))}
        </div>
    )
}

export default Chart;