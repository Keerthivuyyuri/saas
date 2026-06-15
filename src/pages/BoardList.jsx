import { Search, SlidersHorizontal, MoreHorizontal, Check } from "lucide-react";

const columns = [
  {
    title: "ToDo",
    tasks: [
      ["Dashboard Design", "Low", "On Track"],
      ["Landing page Design", "Medium", "At risk"],
      ["E-Shop Mobile App", "High", ""],
      ["Dashboard Design", "Low", "On Track"],
    ],
  },
  {
    title: "In Progress",
    tasks: [
      ["Dashboard Design", "High", "On Track"],
      ["Landing page Design", "Low", ""],
      ["E-Shop Mobile App", "Low", "On Track"],
    ],
  },
  {
    title: "In Review",
    tasks: [
      ["Dashboard Design", "Medium", ""],
      ["E-Shop Mobile App", "Low", ""],
    ],
  },
  {
    title: "Done",
    tasks: [["Dashboard Design", "High", "On Track"]],
  },
];

const badgeStyle = {
  Low: "bg-[#ff6b7a] text-white",
  Medium: "bg-[#ff8b6b] text-white",
  High: "bg-[#22c7d9] text-white",
  "On Track": "bg-[#ffd45c] text-[#111139]",
  "At risk": "bg-[#f01446] text-white",
};

export default function BoardList() {
  return (
    <div className="px-8 py-8 bg-[#fafbff] min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[24px] font-bold text-[#111139]">Task Preview</h1>

        <button className="h-[44px] px-6 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center gap-3">
          Filter
          <SlidersHorizontal size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-7">
        <div className="flex bg-white rounded-md overflow-hidden">
          <button className="px-6 py-4 text-sm text-[#111139]">List</button>
          <button className="px-6 py-4 text-sm bg-[#5D5FEF] text-white">
            Board
          </button>
          <button className="px-6 py-4 text-sm text-[#111139]">
            Timeline
          </button>
        </div>

        <div className="w-[230px] h-[42px] bg-white rounded-md flex items-center px-4">
          <input
            placeholder="Search"
            className="flex-1 outline-none text-xs text-gray-400"
          />
          <Search size={16} className="text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex}>
            <h2 className="text-[20px] text-[#555a7b] mb-6">
              {column.title}
            </h2>

            <div className="space-y-5">
              {column.tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 min-h-[200px] shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          columnIndex === 0
                            ? "border-gray-400"
                            : "bg-[#5D5FEF] border-[#5D5FEF]"
                        }`}
                      >
                        {columnIndex !== 0 && (
                          <Check size={13} className="text-white" />
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-[#111139]">
                        {task[0]}
                      </h3>
                    </div>

                    <MoreHorizontal size={18} className="text-gray-400" />
                  </div>

                  <div className="flex gap-3 mb-5">
                    {task[1] && (
                      <span
                        className={`px-6 py-2 rounded-full text-xs ${badgeStyle[task[1]]}`}
                      >
                        {task[1]}
                      </span>
                    )}

                    {task[2] && (
                      <span
                        className={`px-6 py-2 rounded-full text-xs ${badgeStyle[task[2]]}`}
                      >
                        {task[2]}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 leading-5 mb-5">
                    Discussion for management dashboard ui design
                  </p>

                  {(column.title === "In Progress" && index === 1) ||
                  (column.title === "In Review") ||
                  (column.title === "Done") ? (
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <img
                        src="https://picsum.photos/seed/dashboardui/180/100"
                        alt="task"
                        className="rounded-lg h-[75px] w-full object-cover"
                      />
                      <img
                        src="https://picsum.photos/seed/mobileapp/180/100"
                        alt="task"
                        className="rounded-lg h-[75px] w-full object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt=""
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white -ml-2"
                        alt=""
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white -ml-2"
                        alt=""
                      />
                      <div className="w-7 h-7 rounded-full bg-[#27c4df] text-white flex items-center justify-center -ml-2 text-lg">
                        +
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>💬 112</span>
                      <span>👁 1.2k</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}