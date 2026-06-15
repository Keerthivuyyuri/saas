import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "10am", value: 55 },
  { time: "11am", value: 30 },
  { time: "12am", value: 58 },
  { time: "01am", value: 37 },
  { time: "02am", value: 25 },
  { time: "03am", value: 50 },
  { time: "04am", value: 15 },
  { time: "05am", value: 36 },
  { time: "06am", value: 70 },
  { time: "07am", value: 73 },
];

export default function ReportsChart() {
  return (
    <div className="bg-white rounded-xl p-6 h-[360px]">
      <div className="flex justify-between mb-4">
        <h3 className="text-[#333653] font-semibold">Reports</h3>
        <span className="text-gray-400">...</span>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4fa3ff" />
              <stop offset="100%" stopColor="#f15cff" />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#f1f1f1" vertical={false} />
          <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#a0a0a0" }} />
          <YAxis tick={{ fontSize: 11, fill: "#a0a0a0" }} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineColor)"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "white",
              stroke: "#9d6bff",
              strokeWidth: 3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}