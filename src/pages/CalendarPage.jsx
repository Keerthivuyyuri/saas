import { useState } from "react";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  CalendarDays,
  Clock,
  MapPin,
  X,
  Users,
} from "lucide-react";

const people = [
  {
    name: "Eddie Lobanovskiy",
    email: "lobanovskiy@gmail.com",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alexey Stave",
    email: "alexeyst@gmail.com",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Anton Tkacheve",
    email: "tkacheveanton@gmail.com",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const days = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      currentMonth: false,
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push({
      day: i,
      currentMonth: true,
    });
  }

  while (days.length < 35) {
    days.push({
      day: days.length - totalDays - firstDay + 1,
      currentMonth: false,
    });
  }

  return days.slice(0, 35);
}

export default function CalendarPage({ setActivePage }) {
  const today = new Date();

  const [view, setView] = useState("Month");
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [showEventModal, setShowEventModal] = useState(false);

  const handlePrev = () => {
    if (view === "Year") {
      setSelectedYear(selectedYear - 1);
    } else if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNext = () => {
    if (view === "Year") {
      setSelectedYear(selectedYear + 1);
    } else if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <div className="relative bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-x-hidden">
      <div className={showEventModal ? "opacity-40 pointer-events-none" : ""}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
          <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[#111139]">
            Calendar
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["Day", "Week", "Month", "Year"].map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`w-[68px] h-[38px] rounded-lg text-sm ${
                  view === item
                    ? "bg-[#5D5FEF] text-white"
                    : "bg-white text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-8">
          <LeftPanel
            setActivePage={setActivePage}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            setShowEventModal={setShowEventModal}
          />

          <div className="bg-white rounded-xl p-4 sm:p-5 min-w-0">
            <CalendarHeader
              view={view}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />

            {view === "Day" && (
              <DayView
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
              />
            )}

            {view === "Week" && (
              <WeekView
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
              />
            )}

            {view === "Month" && (
              <MonthView
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
              />
            )}

            {view === "Year" && <YearView selectedYear={selectedYear} />}
          </div>
        </div>
      </div>

      {showEventModal && (
        <CreateEventModal onClose={() => setShowEventModal(false)} />
      )}
    </div>
  );
}

function LeftPanel({
  setActivePage,
  selectedYear,
  selectedMonth,
  setShowEventModal,
}) {
  const miniDays = getCalendarDays(selectedYear, selectedMonth);
  const today = new Date();

  return (
    <div className="min-w-0">
      <button
        onClick={() => setShowEventModal(true)}
        className="w-full h-[50px] bg-[#5D5FEF] text-white rounded-lg flex items-center justify-center gap-2 text-sm mb-6"
      >
        <Plus size={18} />
        Create Schedule
      </button>

      <div className="bg-white rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#111139]">
            {monthNames[selectedMonth]} {selectedYear}
          </p>

          <div className="flex gap-2 text-gray-400">
            <ChevronLeft size={14} />
            <ChevronRight size={14} />
          </div>
        </div>

        <div className="grid grid-cols-7 text-center text-xs gap-y-3">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <span key={index}>{day}</span>
          ))}

          {miniDays.map((item, index) => {
            const isToday =
              item.currentMonth &&
              item.day === today.getDate() &&
              selectedMonth === today.getMonth() &&
              selectedYear === today.getFullYear();

            return (
              <span
                key={index}
                className={
                  isToday
                    ? "w-6 h-6 mx-auto rounded-full bg-[#5D5FEF] text-white flex items-center justify-center"
                    : item.currentMonth
                    ? "text-gray-500"
                    : "text-gray-300"
                }
              >
                {item.day}
              </span>
            );
          })}
        </div>
      </div>

      <h3 className="text-[#111139] font-semibold mb-4">People</h3>

      <div className="h-[48px] bg-white rounded-lg flex items-center gap-3 px-4 mb-4">
        <Search size={15} className="text-gray-400" />
        <input
          placeholder="Search for People"
          className="outline-none text-xs text-gray-400 w-full bg-transparent min-w-0"
        />
      </div>

      <div className="bg-white rounded-xl px-3">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3 border-b last:border-b-0"
          >
            <img
              src={person.img}
              alt=""
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#111139] truncate">
                {person.name}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {person.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setActivePage && setActivePage("TaskList")}
        className="w-full h-[48px] bg-white border border-indigo-100 text-[#5D5FEF] rounded-lg text-sm mt-8 xl:mt-[90px]"
      >
        My Schedule
      </button>
    </div>
  );
}

function CalendarHeader({
  view,
  selectedYear,
  selectedMonth,
  handlePrev,
  handleNext,
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <p className="font-semibold text-[#111139] text-sm sm:text-base">
        {view === "Year"
          ? selectedYear
          : `${monthNames[selectedMonth]} ${selectedYear}`}
      </p>

      <div className="flex gap-3 text-gray-500">
        <button onClick={handlePrev}>
          <ChevronLeft size={18} />
        </button>

        <button onClick={handleNext}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function MonthView({ selectedYear, selectedMonth }) {
  const days = getCalendarDays(selectedYear, selectedMonth);
  const today = new Date();

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px] grid grid-cols-7">
        {weekNames.map((day) => (
          <div
            key={day}
            className="h-[48px] flex items-center justify-center text-sm font-semibold text-[#111139]"
          >
            {day}
          </div>
        ))}

        {days.map((item, index) => {
          const isToday =
            item.currentMonth &&
            item.day === today.getDate() &&
            selectedMonth === today.getMonth() &&
            selectedYear === today.getFullYear();

          return (
            <div
              key={index}
              className="h-[110px] sm:h-[120px] border border-[#f0f0f5] p-3 text-[20px] sm:text-[22px] text-[#555a7b] relative"
            >
              <span
                className={
                  isToday
                    ? "w-8 h-8 rounded-full bg-[#5D5FEF] text-white flex items-center justify-center"
                    : item.currentMonth
                    ? ""
                    : "text-gray-300"
                }
              >
                {String(item.day).padStart(2, "0")}
              </span>

              {item.currentMonth && item.day === 2 && (
                <>
                  <p className="bg-[#20BCD8] text-white text-[10px] px-2 py-1 rounded mt-2">
                    Free day
                  </p>
                  <p className="bg-[#E941D6] text-white text-[10px] px-2 py-1 rounded mt-1">
                    Party Time
                  </p>
                  <p className="text-[#5D5FEF] text-[10px] px-2 mt-1">More</p>
                </>
              )}

              {item.currentMonth && item.day === 16 && (
                <Event color="bg-[#ff8b6b]" text="Victory day" />
              )}

              {item.currentMonth && item.day === 21 && (
                <Event color="bg-[#E941D6]" text="friend's Birthday" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function YearView({ selectedYear }) {
  const today = new Date();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-8">
      {monthNames.map((month, monthIndex) => {
        const days = getCalendarDays(selectedYear, monthIndex);

        return (
          <div key={month}>
            <h3 className="text-sm font-semibold text-[#111139] mb-3">
              {month} {selectedYear}
            </h3>

            <div className="grid grid-cols-7 text-center text-[10px] gap-y-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <span key={index} className="font-semibold text-[#111139]">
                  {day}
                </span>
              ))}

              {days.map((item, index) => {
                const isToday =
                  item.currentMonth &&
                  item.day === today.getDate() &&
                  monthIndex === today.getMonth() &&
                  selectedYear === today.getFullYear();

                return (
                  <span
                    key={index}
                    className={
                      isToday
                        ? "w-5 h-5 mx-auto rounded-full bg-[#5D5FEF] text-white flex items-center justify-center"
                        : item.currentMonth
                        ? "text-[#555a7b]"
                        : "text-gray-300"
                    }
                  >
                    {item.day}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WeekView({ selectedYear, selectedMonth }) {
  const weekDates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(selectedYear, selectedMonth, index + 1);
    return {
      day: weekNames[date.getDay()],
      date: date.getDate(),
    };
  });

  const times = ["09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM"];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] grid grid-cols-[80px_repeat(7,1fr)] border border-[#f0f0f5]">
        <div className="border p-4"></div>

        {weekDates.map((item) => (
          <div
            key={item.date}
            className="border p-4 text-center font-semibold text-[#111139]"
          >
            {item.day} {item.date}
          </div>
        ))}

        {times.map((time, row) => (
          <div className="contents" key={time}>
            <div className="border p-4 text-xs text-gray-400">{time}</div>

            {weekDates.map((day, col) => (
              <div key={`${time}-${day.date}`} className="h-[75px] border p-2">
                {row === 1 && col === 1 && (
                  <div className="bg-[#5D5FEF] text-white rounded-lg p-2 text-xs">
                    Team Meeting
                  </div>
                )}

                {row === 3 && col === 4 && (
                  <div className="bg-[#20BCD8] text-white rounded-lg p-2 text-xs">
                    Design Review
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function DayView() {
  const dayEvents = [
    {
      title: "Invited by Friends",
      color: "bg-[#ff8b6b]",
      top: 18,
      left: 70,
      width: 150,
    },
    {
      title: "Prayer Time",
      color: "bg-[#20BCD8]",
      top: 145,
      left: 360,
      width: 150,
    },
    {
      title: "Lunch Time",
      color: "bg-[#ff8b6b]",
      top: 245,
      left: 610,
      width: 150,
    },
    {
      title: "Prayer Time",
      color: "bg-[#34A853]",
      top: 450,
      left: 260,
      width: 150,
    },
    {
      title: "Dinner Time",
      color: "bg-[#5D5FEF]",
      top: 585,
      left: 530,
      width: 150,
    },
  ];

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
    "01:00 AM",
  ];

  return (
    <div className="overflow-x-auto">
      <div className="relative h-[720px] min-w-[780px] overflow-hidden">
        {times.map((time) => (
          <div
            key={time}
            className="h-[42px] border-t border-[#eef0f7] dark:border-gray-600 relative"
          >
            <span className="absolute left-0 top-[-8px] text-[10px] text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 pr-2">
              {time}
            </span>
          </div>
        ))}

        {dayEvents.map((event, index) => (
          <div
            key={index}
            className={`absolute h-[34px] rounded-lg ${event.color} text-white text-xs flex items-center justify-center shadow-sm`}
            style={{
              top: `${event.top}px`,
              left: `${event.left}px`,
              width: `${event.width}px`,
            }}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateEventModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b35]/30 px-4">
      <div className="w-full max-w-[470px] bg-white rounded-xl shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-lg sm:text-xl font-bold text-[#111139]">
            Create an Event
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0"
          >
            <X size={18} className="text-red-400" />
          </button>
        </div>

        <div className="flex flex-wrap bg-[#fafafa] rounded-lg mb-6 w-fit">
          <button className="px-6 sm:px-7 py-3 rounded-lg bg-[#ff8b6b] text-white text-sm">
            Event
          </button>
          <button className="px-6 sm:px-7 py-3 text-sm text-gray-500">
            Reminder
          </button>
          <button className="px-6 sm:px-7 py-3 text-sm text-gray-500">
            Task
          </button>
        </div>

        <input
          placeholder="Add title"
          className="w-full h-[44px] rounded-lg bg-[#f6f6f8] px-5 outline-none text-sm mb-7"
        />

        <div className="flex gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
            <Clock size={17} className="text-orange-400" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#111139]">
              Thursday, December 5
              <span className="block sm:inline font-normal sm:ml-6 mt-1 sm:mt-0">
                12:00pm - 1:00pm
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Time zone · Does not repeat
            </p>
            <p className="text-sm text-[#ff8b6b] mt-3">Find a time</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-7">
          <button className="h-[44px] px-7 rounded-lg bg-[#5D5FEF] text-white text-sm flex items-center justify-center gap-2">
            <Users size={16} />
            Add People
          </button>

          <button className="h-[44px] px-7 rounded-lg border border-indigo-100 text-[#5D5FEF] text-sm flex items-center justify-center gap-2">
            <MapPin size={16} />
            Add location
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
            <CalendarDays size={17} className="text-orange-400" />
          </div>

          <div>
            <p className="text-sm text-[#111139]">John Deo</p>
            <p className="text-xs text-gray-400">
              Busy · Default visibility · notify 30 minutes before
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-4 sm:gap-5">
          <button
            onClick={onClose}
            className="w-[90px] h-[42px] rounded-lg border border-indigo-100 text-[#5D5FEF] text-sm"
          >
            Close
          </button>

          <button
            onClick={onClose}
            className="w-[90px] h-[42px] rounded-lg bg-[#5D5FEF] text-white text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function Event({ color, text }) {
  return (
    <p
      className={`${color} text-white text-[10px] px-2 py-1 rounded mt-5 w-fit`}
    >
      {text}
    </p>
  );
}