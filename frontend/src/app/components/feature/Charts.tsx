import { ChartData } from 'chart.js/auto';
import Chart from '@/app/components/ui/Chart';

interface IChartsProps {
  leakedChartData: ChartData;
  numberOfLeaksPerDBChartData: ChartData;
}

const Charts = (props: IChartsProps) => {
  const { leakedChartData, numberOfLeaksPerDBChartData } = props;

  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <Chart data={leakedChartData} height={400} width={400} />
      </div>
      <div className="w-1/2">
        <Chart data={numberOfLeaksPerDBChartData} type="bar" height={700} width={700} />
      </div>
    </div>
  );
};

export default Charts;
