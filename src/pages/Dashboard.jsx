import { useState } from "react";
import {
  Package,
  ShoppingCart,
  Plus,
  MoreHorizontal,
  Award,
  Camera,
  ChevronLeft,
  Upload,
} from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { value: 20 },
  { value: 18 },
  { value: 28 },
  { value: 30 },
  { value: 45 },
  { value: 35 },
  { value: 30 },
  { value: 34 },
  { value: 45 },
  { value: 50 },
  { value: 48 },
  { value: 62 },
];

const salesData = [
  { value: 55, color: "#5B8FF9" },
  { value: 25, color: "#FFD15C" },
  { value: 20, color: "#FF835D" },
];

const products = [
  ["Bluetooth Devices", "$10", "34,666 Piece", "$3,46,660"],
  ["Airdot", "$15", "20,000 Piece", "$3,00,000"],
  ["Shoes", "$10", "15,000 Piece", "$1,50,000"],
  ["Kids T-Shirt", "$12", "10,000 Piece", "$1,20,000"],
  ["Smart Watch", "$12", "10,000 Piece", "$1,20,000"],
  ["Girls Top", "$12", "10,000 Piece", "$1,20,000"],
];

const bars = [
  ["Jan", 80, "23,400"],
  ["Feb", 40, "15,000"],
  ["Mar", 90, "30,000"],
  ["Apr", 65, "22,000"],
  ["May", 30, "10,000"],
  ["Jun", 95, "23,400"],
  ["Jul", 12, "5,000"],
];

export default function Dashboard() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="relative bg-[#fafbff] min-h-screen px-8 py-8 overflow-hidden">
      <div className={showAddProduct ? "opacity-40 pointer-events-none" : ""}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[26px] font-bold text-[#111139]">
            Product Analytics
          </h1>

          <div className="flex gap-5">
            <select className="w-[150px] h-[42px] bg-white rounded-lg px-4 text-sm text-gray-500 outline-none">
              <option>10-06-2021</option>
            </select>

            <select className="w-[150px] h-[42px] bg-white rounded-lg px-4 text-sm text-gray-500 outline-none">
              <option>10-10-2021</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="bg-white rounded-lg overflow-hidden">
            <button className="w-[110px] h-[42px] bg-[#5D5FEF] text-white text-sm">
              Product
            </button>
            <button className="w-[110px] h-[42px] text-[#111139] text-sm">
              Customer
            </button>
          </div>

          <button
            onClick={() => setShowAddProduct(true)}
            className="h-[44px] px-7 rounded-lg bg-[#5D5FEF] text-white text-sm flex items-center gap-2"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <StatBox
                icon={<Package size={20} />}
                title="Total Product"
                value="5,00,874"
                note="+1400 New Added"
                color="text-blue-500"
                bg="bg-blue-50"
                stroke="#5B8FF9"
              />

              <StatBox
                icon={<ShoppingCart size={20} />}
                title="Total Sales"
                value="2,34,888"
                note="+1000 Sales Today"
                color="text-yellow-500"
                bg="bg-yellow-50"
                stroke="#FFBE3D"
              />
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-[20px] font-semibold text-[#111139]">
                  Top Selling Products
                </h2>
                <button className="text-[#5D5FEF] text-sm">See More</button>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-left">
                    <th className="py-4">SN</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total Order</th>
                    <th>Total Sales</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-5">
                        {index < 3 ? (
                          <Award size={18} className="text-orange-500" />
                        ) : (
                          index + 1
                        )}
                      </td>

                      <td>
                        <div className="flex items-center gap-3 text-blue-500">
                          <span className="w-9 h-9 rounded-full bg-[#f0f2ff] flex items-center justify-center">
                            {index === 0
                              ? "🎧"
                              : index === 1
                              ? "🎩"
                              : index === 2
                              ? "👟"
                              : index === 3
                              ? "👕"
                              : index === 4
                              ? "⌚"
                              : "👗"}
                          </span>
                          {item[0]}
                        </div>
                      </td>

                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td className="text-green-500">{item[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-[20px] font-semibold text-[#111139] mb-7">
                Product Add by Month
              </h2>

              <div className="space-y-5">
                {bars.map((bar, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[35px_1fr_70px] items-center gap-3 text-sm"
                  >
                    <span className="text-gray-500">{bar[0]}</span>

                    <div className="h-3 rounded-full bg-transparent">
                      <div
                        className={`h-3 rounded-full ${
                          index % 2 === 0 ? "bg-[#ff8b6b]" : "bg-[#5B8FF9]"
                        }`}
                        style={{ width: `${bar[1]}%` }}
                      />
                    </div>

                    <span className="text-[#111139]">{bar[2]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[20px] font-semibold text-[#555a7b]">
                  Product Sales Analytics
                </h2>
                <MoreHorizontal size={20} className="text-gray-400" />
              </div>

              <div className="h-[260px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salesData}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={105}
                      paddingAngle={3}
                    >
                      {salesData.map((item, index) => (
                        <Cell key={index} fill={item.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    ↗
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <i className="w-3 h-3 bg-blue-500 rounded-full"></i>
                  Total Sales
                </span>
                <span className="flex items-center gap-2">
                  <i className="w-3 h-3 bg-yellow-400 rounded-full"></i>
                  Total Order
                </span>
                <span className="flex items-center gap-2">
                  <i className="w-3 h-3 bg-orange-400 rounded-full"></i>
                  Order Cancel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddProduct && (
        <AddProductPanel onClose={() => setShowAddProduct(false)} />
      )}
    </div>
  );
}

function AddProductPanel({ onClose }) {
  return (
    <div className="absolute top-0 right-0 w-[380px] min-h-full bg-white z-50 px-9 py-12 shadow-2xl">
      <div className="flex items-center gap-8 mb-10">
        <button onClick={onClose} className="text-[#555a7b]">
          <ChevronLeft size={20} />
        </button>

        <h2 className="text-[20px] font-bold text-[#111139]">
          Add a New Product
        </h2>
      </div>

      <div className="w-[120px] h-[120px] rounded-full bg-[#f6f6f8] mx-auto flex items-center justify-center mb-10">
        <Camera size={24} className="text-[#4b4b68]" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-semibold text-[#111139]">
            Product Name
          </label>
          <input
            defaultValue='Mackbook Pro 2021 14"'
            className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#111139]">Brand</label>
          <select className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none text-gray-500">
            <option>Apple</option>
            <option>Samsung</option>
            <option>HP</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#111139]">Price</label>

          <div className="flex items-center gap-5 mt-2">
            <input
              defaultValue="$1200"
              className="w-[145px] h-[52px] bg-[#f6f6f8] rounded-lg px-5 text-sm outline-none"
            />

            <label className="flex items-center gap-3 text-sm text-[#111139]">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-[#5D5FEF]"
              />
              Negotiable
            </label>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#111139]">
            Descriptions
          </label>
          <textarea
            defaultValue="This the New creation Of apple This the New creation Of apple This the New creation Of apple This the New creation Of apple."
            className="w-full h-[110px] bg-[#f6f6f8] rounded-lg mt-2 px-5 py-4 text-sm outline-none resize-none"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full h-[54px] rounded-lg bg-[#5D5FEF] text-white text-sm flex items-center justify-center gap-2 mt-8"
        >
          <Upload size={16} />
          Save Product
        </button>
      </div>
    </div>
  );
}

function StatBox({ icon, title, value, note, color, bg, stroke }) {
  return (
    <div className="bg-white rounded-xl p-8 h-[190px] relative overflow-hidden">
      <div className="flex items-start gap-5">
        <div
          className={`w-16 h-16 rounded-full ${bg} ${color} flex items-center justify-center`}
        >
          {icon}
        </div>

        <div>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm">{title}</p>
            <span className="text-green-500 text-xs">{note}</span>
          </div>

          <h2 className="text-[30px] font-bold text-[#555a7b] mt-2">
            {value}
          </h2>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[80px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={stroke}
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}