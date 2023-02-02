import ChartBar from './ChartBar.js';
import './Chart.css';

export default function Chart(props) {

  // const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
  
  const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
  
  const yearTotal = dataValues.reduce((curr, accu) => curr+accu, 0);
  
  // const maxValue = Math.max(...dataValues);

  const chartBars = props.dataPoints.map(dataPoint =>
                    <ChartBar
                      key={dataPoint.label}
                      value={dataPoint.value}
                      maxValue={yearTotal}
                      label={dataPoint.label}
                    />)

  return (
    <div className='chart'>
      {chartBars}
    </div>
  )
}