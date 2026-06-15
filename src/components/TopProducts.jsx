const products = [
  {
    name: "NIKE Shoes Black Pattern",
    price: "$87",
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "iPhone 12",
    price: "$987",
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function TopProducts() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between mb-5">
        <h3 className="text-[#333653] font-semibold">Top selling Products</h3>
        <span className="text-gray-400">...</span>
      </div>

      <div className="space-y-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b last:border-b-0 pb-6 last:pb-0"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[85px] h-[85px] rounded-lg object-cover bg-blue-100"
            />

            <div>
              <h4 className="text-[#333653] text-sm font-medium mb-2">
                {item.name}
              </h4>

              <p className="text-yellow-400 text-sm">★★★★☆</p>

              <h5 className="text-[#111139] font-bold mt-2">{item.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}