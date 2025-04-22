import { ComposedChart } from "recharts";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
} from "recharts";
const chart = ({ chartData }) => {
  return (
    <ComposedChart width={730} height={250} data={chartData}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="orders" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="price" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="quantity" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default chart;
