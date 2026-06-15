import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sale", value: 55, color: "#5b8ff9" },
  { name: "Distribute", value: 25, color: "#ffd15c" },
  { name: "Return", value: 20, color: "#ff835d" },
];

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-xl p-6 h-[360px]">
      <div className="flex justify-between mb-4">
        <h3 className="text-[#333653] font-semibold">Analytics</h3>
        <span className="text-gray-400">...</span>
      </div>

      <div className="relative h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-[#111139]">80%</h2>
          <p className="text-gray-500 text-xs">Transactions</p>
        </div>
      </div>

      <div className="flex justify-center gap-7 mt-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-sm"></span> Sale
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-sm"></span> Distribute
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-orange-400 rounded-sm"></span> Return
        </div>
      </div>
    </div>
  );
}