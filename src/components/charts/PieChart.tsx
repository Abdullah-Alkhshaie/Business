import { Chart, ArcElement, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement); // Register the ArcElement for Chart.js

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    paid?: number;
    trail?: number;
    new?: number;
    returning?: number;
    inactive?: number;
    number: number;
    backgroundColor: string[];
    hoverOffset?: number;
  }[];
}

interface PieChartProps {
  data: ChartData;
  options?: any; // You can efine a more specific type for options if needed
}

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function PieChart({ data, options }: PieChartProps) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg">{data.datasets[0].label}</h1>
        <p className="font-bold text-3xl my-1">{data.datasets[0].number}</p>
        <p className="text-gray-200  text- text-[12px]">since last month</p>
      </div>
      <div className="flex items-end justify-between gap-2">
        <div className="">
          {data.datasets[0].paid && (
            <p className="">
              <span className="font-bold">{data.datasets[0].paid}%</span>{" "}
              <span className="text-gray-400 text-[11px]">Piad</span>
            </p>
          )}
          {data.datasets[0].trail && (
            <p>
              <span className="font-bold">{data.datasets[0].trail}%</span>{" "}
              <span className="text-gray-400 text-[11px]">Trail</span>
            </p>
          )}
          {data.datasets[0].new && (
            <p>
              <span className="font-bold">{data.datasets[0].new}%</span>{" "}
              <span className="text-gray-400 text-[11px]">New</span>
            </p>
          )}
          {data.datasets[0].returning && (
            <p>
              <span className="font-bold">{data.datasets[0].returning}%</span>{" "}
              <span className="text-gray-400 text-[11px]">Returning</span>
            </p>
          )}
          {data.datasets[0].inactive && (
            <p>
              <span className="font-bold">{data.datasets[0].inactive}%</span>{" "}
              <span className="text-gray-400 text-[11px]">inactive</span>
            </p>
          )}
        </div>
        <div style={{ width: "150px", height: "150px" }}>
          <Doughnut data={data} options={options || {}} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;
