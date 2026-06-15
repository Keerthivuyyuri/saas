export default function StatCard({ icon, count, label, bg, color }) {
  return (
    <div className="bg-white rounded-xl h-[105px] flex items-center gap-5 px-7">
      <div
        className={`w-14 h-14 rounded-full ${bg} ${color} flex items-center justify-center`}
      >
        {icon}
      </div>

      <div>
        <h2 className="text-[#555a7b] text-xl font-bold">{count}</h2>
        <p className="text-gray-400 text-xs">{label}</p>
      </div>
    </div>
  );
}