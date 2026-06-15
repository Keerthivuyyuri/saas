const orders = [
  {
    id: "#876364",
    product: "Camera Lens",
    price: "$178",
    order: "325",
    amount: "$1,46,660",
    icon: "📷",
  },
  {
    id: "#876368",
    product: "Black Sleep Dress",
    price: "$14",
    order: "53",
    amount: "$46,660",
    icon: "👗",
  },
  {
    id: "#876412",
    product: "Argan Oil",
    price: "$21",
    order: "78",
    amount: "$3,46,676",
    icon: "🧴",
  },
  {
    id: "#876621",
    product: "EAU DE Parfum",
    price: "$32",
    order: "98",
    amount: "$3,46,961",
    icon: "🛍️",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between mb-5">
        <h3 className="text-[#333653] font-semibold">Recent Orders</h3>
        <span className="text-gray-400">...</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-gray-500">
              <th className="py-3 font-medium">Tracking no</th>
              <th className="py-3 font-medium">Product Name</th>
              <th className="py-3 font-medium">Price</th>
              <th className="py-3 font-medium">Total Order</th>
              <th className="py-3 font-medium">Total Amount</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className="text-[#343852]">
                <td className="py-3">{item.id}</td>

                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-pink-100 flex items-center justify-center">
                      {item.icon}
                    </span>
                    {item.product}
                  </div>
                </td>

                <td>{item.price}</td>

                <td>
                  <span className="bg-cyan-100 text-cyan-600 px-5 py-2 rounded-md">
                    {item.order}
                  </span>
                </td>

                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}