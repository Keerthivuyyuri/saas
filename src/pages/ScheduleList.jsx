import {
  Plus,
  CalendarDays,
  Clock,
  MapPin,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

const schedules = [
  ["12 Dec, 2021", "10.15AM", "Office Meeting"],
  ["10 Dec, 2021", "11.20AM", "Home"],
  ["09 Dec, 2021", "11.45AM", "Friends Zone"],
  ["08 Dec, 2021", "12.15PM", "Office Meeting"],
  ["07 Dec, 2021", "01.20PM", "Home"],
  ["05 Dec, 2021", "10.15AM", "Meeting Outside"],
  ["04 Dec, 2021", "11.15AM", "Office Meeting"],
  ["04 Dec, 2021", "01.25PM", "Home"],
  ["02 Dec, 2021", "10.15AM", "Friends"],
  ["01 Dec, 2021", "04.30PM", "Meeting Outside"],
];

const people = [
  [
    "Eddie Lobanovskiy",
    "lobanovskiy@gmail.com",
    "https://randomuser.me/api/portraits/men/32.jpg",
  ],
  [
    "Alexey Stave",
    "alexeyst@gmail.com",
    "https://randomuser.me/api/portraits/women/44.jpg",
  ],
  [
    "Anton Tkacheve",
    "tkacheveanton@gmail.com",
    "https://randomuser.me/api/portraits/men/46.jpg",
  ],
];

export default function ScheduleList({ setActivePage }) {
  return (
    <div className="bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-9 py-6 lg:py-9 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-9">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[#111139]">
          Schedule List
        </h1>

        <button className="w-full sm:w-auto h-[44px] px-7 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center justify-center gap-2">
          <Plus size={17} />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-8">
        <div className="min-w-0">
          <button className="w-full h-[50px] bg-[#5D5FEF] text-white rounded-lg flex items-center justify-center gap-2 text-sm mb-6">
            <Plus size={18} />
            Create Schedule
          </button>

          <div className="bg-white rounded-xl p-5 mb-6">
            <div className="flex justify-between items-center mb-5">
              <p className="text-sm text-[#111139]">December 2, 2021</p>
              <div className="flex gap-2 text-gray-300">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-[#111139] gap-y-3">
              {["S", "S", "M", "T", "W", "T", "F"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}

              {[29, 30, 1, 2].map((d) => (
                <span key={d} className="text-gray-400">
                  {d}
                </span>
              ))}

              <span className="w-7 h-7 mx-auto rounded-full bg-[#5D5FEF] text-white flex items-center justify-center">
                3
              </span>

              {[
                4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2,
              ].map((d, i) => (
                <span key={i} className="text-gray-500">
                  {d}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-[#111139] font-semibold mb-4">People</h3>

          <div className="h-[48px] bg-white rounded-lg flex items-center gap-3 px-4 mb-4">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search for People"
              className="outline-none text-xs text-gray-400 w-full min-w-0 bg-transparent"
            />
          </div>

          <div className="bg-white rounded-xl">
            {people.map((person, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-3 border-b last:border-b-0"
              >
                <img
                  src={person[2]}
                  alt={person[0]}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#111139] truncate">
                    {person[0]}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">
                    {person[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActivePage("Board")}
            className="w-full h-[48px] bg-white border border-indigo-100 text-[#5D5FEF] rounded-lg text-sm mt-8 xl:mt-[170px]"
          >
            My Schedule
          </button>
        </div>

        <div className="min-w-0">
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[850px]">
              <div className="grid grid-cols-[50px_220px_200px_1fr_70px_70px] text-xs text-gray-500 mb-4 px-6">
                <input type="checkbox" className="w-5 h-5 accent-[#5D5FEF]" />
                <p>Date</p>
                <p>Time</p>
                <p>Location</p>
                <span></span>
                <span></span>
              </div>

              <div className="space-y-4">
                {schedules.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[50px_220px_200px_1fr_70px_70px] items-center bg-white rounded-xl h-[68px] px-6 shadow-sm"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#5D5FEF]"
                    />

                    <div className="flex items-center gap-3 text-sm text-[#111139]">
                      <CalendarDays size={15} className="text-blue-500" />
                      {item[0]}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#111139]">
                      <Clock
                        size={15}
                        className="text-gray-500 fill-gray-500"
                      />
                      {item[1]}
                    </div>

                    <div className="w-[180px] h-[42px] rounded-full bg-[#EFECFF] text-[#5D5FEF] flex items-center gap-3 px-5 text-sm">
                      <MapPin size={16} className="fill-[#5D5FEF]" />
                      {item[2]}
                    </div>

                    <button className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                      <Pencil size={16} className="text-yellow-400" />
                    </button>

                    <button className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                      <Trash2
                        size={16}
                        className="text-red-500 fill-red-500"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:hidden mt-4 text-xs text-gray-400">
            Swipe horizontally to view all schedule details.
          </div>
        </div>
      </div>
    </div>
  );
}