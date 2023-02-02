import ChartBar from './ChartBar.js';
import './Chart.css';

export default function Chart(props) {

  const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...dataValues);
console.log(dataValues);

  const chartBars = props.dataPoints.map(dataPoint =>
                    <ChartBar
                      key={dataPoint.label}
                      value={dataPoint.value}
                      maxValue={maxValue}
                      label={dataPoint.label}
                    />)

  return (
    <div className='chart'>
      {chartBars}
    </div>
  )
}