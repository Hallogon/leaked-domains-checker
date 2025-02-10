import type { FC } from 'react';
import { Chart as ReactChartJS } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, ChartData, ChartType } from 'chart.js/auto';

// https://stackoverflow.com/questions/70098392/react-chartjs-2-with-chartjs-3-error-arc-is-not-a-registered-element
ChartJS.register(ArcElement);

interface IChartProps {
  data: ChartData;
  height?: string | number;
  type?: ChartType;
  width?: string | number;
}

const Chart: FC<IChartProps> = (props) => {
  const {
    data,
    height,
    type = 'doughnut',
    width,
  } = props

  return (
    <ReactChartJS
      data={data}
      height={height}
      type={type}
      width={width}
    />
  );
}

export default Chart;
