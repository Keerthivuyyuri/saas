import { Plus, MoreHorizontal, Check } from "lucide-react";

const dates = [
  "29", "30", "01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12", "13", "14",
];

const timeRows = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const tasks = [
  {
    title: "Graphic Design",
    top: 28,
    left: 35,
    width: 430,
    checked: false,
    priority: "Low",
  },
  {
    title: "Dashboard Design",
    top: 155,
    left: 125,
    width: 430,
    checked: true,
    priority: "High",
  },
  {
    title: "Logo Design",
    top: 280,
    left: 35,
    width: 430,
    checked: true,
    priority: "High",
  },
  {
    title: "Web Design",
    top: 405,
    left: 265,
    width: 430,
    checked: true,
    priority: "High",
  },
];

export default function TimelineTask() {
  return (
    <div className="bg-[#fafbff] min-h-screen px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-[24px] font-bold text-[#111139]">
          Task Preview
        </h1>

        <button className="h-[44px] px-7 rounded-lg bg-[#5D5FEF] text-white text-sm flex items-center gap-2">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      {/* Tabs + Month */}
      <div className="flex items-center justify-between mb-7">
        <div className="flex bg-white rounded-lg overflow-hidden">
          <button className="px-6 py-3 text-sm text-[#111139]">List</button>
          <button className="px-6 py-3 text-sm text-[#111139]">Board</button>
          <button className="px-6 py-3 bg-[#5D5FEF] text-white text-sm">
            Timeline
          </button>
        </div>

        <button className="w-[170px] h-[42px] bg-white rounded-lg text-sm text-[#555a7b]">
          December&nbsp; 2021
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[210px_1fr] gap-8">
        {/* Left Status Panel */}
        <div className="bg-white rounded-xl p-5 h-[610px]">
          {["To Do", "Doing", "Done"].map((item, index) => (
            <button
              key={item}
              className={`w-full h-[42px] rounded-lg mb-4 flex items-center justify-between px-5 text-sm ${
                index === 0
                  ? "bg-[#5D5FEF] text-white"
                  : "bg-white border border-[#eef0f7] text-[#111139]"
              }`}
            >
              {item}
              <span className="text-xs">▶</span>
            </button>
          ))}
        </div>

        {/* Right Timeline Panel */}
        <div className="bg-white rounded-xl p-5 h-[610px] overflow-hidden">
          {/* Dates Row */}
          <div className="ml-[70px] flex items-center justify-between h-[45px] mb-2">
            {dates.map((date, index) => (
              <div
                key={index}
                className={`w-[38px] h-[38px] flex items-center justify-center text-sm font-medium ${
                  date === "02"
                    ? "bg-[#5D5FEF] text-white"
                    : "text-[#555a7b]"
                }`}
              >
                {date}
              </div>
            ))}
          </div>

          {/* Timeline Body */}
          <div className="relative h-[520px]">
            {timeRows.map((time) => (
              <div
                key={time}
                className="h-[58px] border-t border-[#eef0f7] relative"
              >
                <span className="absolute left-0 top-[-8px] text-[10px] text-gray-400">
                  {time}
                </span>
              </div>
            ))}

            {tasks.map((task, index) => (
              <div
                key={index}
                className="absolute h-[54px] bg-white border border-[#edf0f7] rounded-xl shadow-sm flex items-center px-4"
                style={{
                  top: `${task.top}px`,
                  left: `${task.left + 70}px`,
                  width: `${task.width}px`,
                }}
              >
                <div className="flex items-center gap-3 w-[155px]">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      task.checked
                        ? "bg-[#5D5FEF] border-[#5D5FEF]"
                        : "border-gray-400"
                    }`}
                  >
                    {task.checked && <Check size={13} className="text-white" />}
                  </div>

                  <p className="text-sm font-semibold text-[#111139]">
                    {task.title}
                  </p>
                </div>

                <div className="flex items-center w-[92px]">
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
                  <div className="w-7 h-7 rounded-full bg-[#27c4df] text-white flex items-center justify-center -ml-2 text-sm">
                    +
                  </div>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-xs text-white ${
                    task.priority === "Low"
                      ? "bg-[#ff6b7a]"
                      : "bg-[#22c7d9]"
                  }`}
                >
                  {task.priority}
                </span>

                <span className="ml-3 px-4 py-2 rounded-full text-xs bg-[#ffd45c] text-[#111139]">
                  On Track
                </span>

                <MoreHorizontal size={18} className="text-gray-400 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}