import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

function BarChart() {
  useEffect(() => {
    // Register required elements and scales
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
  }, []);
  return (
    <div>
      <Bar
        data={{
          labels: ["a", "b", "c"],
          datasets: [
            {
              label: "title",
              data: [200, 300, 400],
            },
            {
              label: "lose",
              data: [230, 400, 140],
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
