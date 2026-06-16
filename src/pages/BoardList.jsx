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
    <div className="bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
        <h1 className="text-[22px] sm:text-[24px] font-bold text-[#111139]">
          Task Preview
        </h1>

        <button className="w-full sm:w-auto h-[42px] px-6 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center justify-center gap-3">
          Filter
          <SlidersHorizontal size={17} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-7">
        <div className="flex bg-white rounded-md overflow-x-auto w-fit max-w-full">
          <button className="px-6 py-3 text-sm text-[#111139] whitespace-nowrap">
            List
          </button>
          <button className="px-6 py-3 text-sm bg-[#5D5FEF] text-white whitespace-nowrap">
            Board
          </button>
          <button className="px-6 py-3 text-sm text-[#111139] whitespace-nowrap">
            Timeline
          </button>
        </div>

        <div className="w-full lg:w-[230px] h-[42px] bg-white rounded-md flex items-center px-4">
          <input
            placeholder="Search"
            className="flex-1 outline-none text-xs text-gray-400 bg-transparent min-w-0"
          />
          <Search size={16} className="text-gray-500" />
        </div>
      </div>

      <div className="overflow-x-auto xl:overflow-visible pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:min-w-0 min-w-[900px] md:min-w-0">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0">
              <h2 className="text-[18px] text-[#555a7b] mb-4">
                {column.title}
              </h2>

              <div className="space-y-4">
                {column.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 min-h-[185px] shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            columnIndex === 0
                              ? "border-gray-400"
                              : "bg-[#5D5FEF] border-[#5D5FEF]"
                          }`}
                        >
                          {columnIndex !== 0 && (
                            <Check size={13} className="text-white" />
                          )}
                        </div>

                        <h3 className="text-[13px] font-semibold text-[#111139] truncate">
                          {task[0]}
                        </h3>
                      </div>

                      <MoreHorizontal
                        size={18}
                        className="text-gray-400 shrink-0"
                      />
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {task[1] && (
                        <span
                          className={`px-4 py-1.5 rounded-full text-[11px] ${badgeStyle[task[1]]}`}
                        >
                          {task[1]}
                        </span>
                      )}

                      {task[2] && (
                        <span
                          className={`px-4 py-1.5 rounded-full text-[11px] ${badgeStyle[task[2]]}`}
                        >
                          {task[2]}
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-gray-500 leading-4 mb-4">
                      Discussion for management dashboard ui design
                    </p>

                    {(column.title === "In Progress" && index === 1) ||
                    column.title === "In Review" ||
                    column.title === "Done" ? (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <img
                          src="https://picsum.photos/seed/dashboardui/180/100"
                          alt="task"
                          className="rounded-lg h-[65px] w-full object-cover"
                        />
                        <img
                          src="https://picsum.photos/seed/mobileapp/180/100"
                          alt="task"
                          className="rounded-lg h-[65px] w-full object-cover"
                        />
                      </div>
                    ) : null}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          className="w-6 h-6 rounded-full border-2 border-white"
                          alt=""
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                          alt=""
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/46.jpg"
                          className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                          alt=""
                        />
                        <div className="w-6 h-6 rounded-full bg-[#27c4df] text-white flex items-center justify-center -ml-2 text-sm">
                          +
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-[11px] text-gray-400 whitespace-nowrap">
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

      <p className="xl:hidden mt-2 text-xs text-gray-400">
        Swipe horizontally to view all board columns.
      </p>
    </div>
  );
}