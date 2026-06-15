import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const sections = [
  {
    title: "To Do",
    checked: false,
    status: "Pending",
    color: "bg-[#ff8b6b]",
    tasks: [
      ["🎨", "Ui Design", "03/12/2021", "5/12/2021"],
      ["💼", "Logo Design", "03/12/2021", "5/12/2021"],
    ],
  },
  {
    title: "Doing",
    checked: true,
    status: "Running",
    color: "bg-[#5D5FEF]",
    tasks: [
      ["🖼️", "Graphic Design", "03/12/2021", "5/12/2021"],
      ["🧾", "Web Design", "03/12/2021", "5/12/2021"],
    ],
  },
  {
    title: "Done",
    checked: true,
    status: "Done",
    color: "bg-green-500",
    tasks: [
      ["💼", "Logo Design", "01/12/2021", "3/12/2021"],
      ["🎨", "Ui Design", "01/12/2021", "3/12/2021"],
    ],
  },
];

export default function TaskList() {
  return (
    <div className="bg-[#fafbff] min-h-screen px-8 py-8">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-[26px] font-bold text-[#111139]">Task Preview</h1>

        <button className="h-[44px] px-7 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center gap-2">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      <div className="flex justify-between items-center mb-7">
        <div className="flex bg-white rounded-lg overflow-hidden">
          <button className="px-6 py-3 bg-[#5D5FEF] text-white text-sm">
            List
          </button>
          <button className="px-6 py-3 text-sm text-[#111139]">Board</button>
          <button className="px-6 py-3 text-sm text-[#111139]">
            Timeline
          </button>
        </div>

        <div className="w-[230px] h-[42px] bg-white rounded-lg flex items-center px-4">
          <input
            placeholder="Search"
            className="flex-1 outline-none text-xs bg-transparent"
          />
          <Search size={16} className="text-gray-500" />
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl p-8">
            <div className="flex justify-between mb-8">
              <h2 className="text-lg font-semibold text-[#111139]">
                {section.title}
              </h2>
              <button className="text-[#5D5FEF] text-sm">See More</button>
            </div>

            <div className="grid grid-cols-[130px_220px_170px_170px_160px_140px_100px] text-sm text-[#111139] mb-5">
              <p>Check Box</p>
              <p>Task Name</p>
              <p>Start Date</p>
              <p>End Date</p>
              <p>Member</p>
              <p>Status</p>
              <p>Actions</p>
            </div>

            <div>
              {section.tasks.map((task, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[130px_220px_170px_170px_160px_140px_100px] items-center border-b last:border-b-0 py-4 text-sm"
                >
                  <input
                    type="checkbox"
                    defaultChecked={section.checked}
                    className="w-5 h-5 accent-[#5D5FEF]"
                  />

                  <div className="flex items-center gap-3 text-[#5D5FEF]">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                      {task[0]}
                    </span>
                    {task[1]}
                  </div>

                  <p className="text-[#555a7b]">{task[2]}</p>

                  <p className="text-red-400">{task[3]}</p>

                  <p className="text-[#555a7b]">5 Member</p>

                  <span
                    className={`${section.color} text-white w-[70px] h-[30px] rounded-lg flex items-center justify-center text-xs`}
                  >
                    {section.status}
                  </span>

                  <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Pencil size={14} className="text-[#5D5FEF]" />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                      <Trash2 size={14} className="text-red-500" />
                    </button>
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