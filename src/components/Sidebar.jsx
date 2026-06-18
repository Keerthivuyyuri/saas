import {
  BarChart3,
  Bell,
  Calendar,
  Grid2X2,
  Image,
  List,
  LogOut,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Grid2X2 },
  { name: "Analytics", icon: BarChart3 },
  { name: "Invoice", icon: Image },
  { name: "Schedule", icon: List },
  { name: "Calendar", icon: Calendar },
  { name: "Messages", icon: Image },
  { name: "Notification", icon: Bell },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({
  activePage,
  setActivePage,
  onLogout,
  messagesViewed,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <aside className="sidebar-scroll w-[220px] shrink-0 h-full bg-white dark:bg-gray-900 flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="flex items-center gap-4 px-8 pt-8 mb-10">
        <div className="w-12 h-12 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white text-xl font-bold">
          ~
        </div>

        <h2 className="text-[20px] font-bold text-[#111139] dark:text-white">
          Base
        </h2>
      </div>

      <nav className="flex flex-col">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActivePage(item.name)}
              className={`w-full h-[48px] flex items-center gap-4 px-8 text-[15px] transition ${
                active
                  ? "bg-[#EEF2FF] dark:bg-indigo-500/20 text-[#5D5FEF] font-semibold"
                  : "text-gray-400 dark:text-gray-300 hover:text-[#5D5FEF]"
              }`}
            >
              <Icon size={21} strokeWidth={2} />
              <span>{item.name}</span>

              {item.name === "Messages" && !messagesViewed && (
                <span className="ml-auto text-[13px] text-red-500">5</span>
              )}
            </button>
          );
        })}

        <button
          type="button"
          onClick={toggleDarkMode}
          className="w-full h-[48px] flex items-center gap-4 px-8 text-[15px] text-gray-400 dark:text-gray-300 hover:text-[#5D5FEF] transition"
        >
          {darkMode ? (
            <Sun size={21} strokeWidth={2} />
          ) : (
            <Moon size={21} strokeWidth={2} />
          )}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </nav>

      <div className="px-6 pb-5 pt-[300px]">
        <div className="h-[120px] bg-[#EEF2FF] dark:bg-gray-800 rounded-2xl relative flex flex-col items-center justify-end pb-4 mb-5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[34px] bg-[#7DA2FF]" />

          <div className="absolute top-[28px] left-1/2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[35px] border-r-[35px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#7DA2FF]" />
            <div className="w-0 h-0 border-l-[35px] border-r-[35px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#5C8FFF] -mt-1" />
          </div>

          <button
            type="button"
            className="relative z-10 w-[105px] h-[28px] rounded-lg bg-[#5D5FEF] text-white text-[10px] font-medium"
          >
            Upgrade Now
          </button>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="w-9 h-9 rounded-lg object-cover"
          />

          <div className="min-w-0">
            <h4 className="text-[11px] font-bold text-[#111139] dark:text-white truncate">
              Easin Arafat
            </h4>
            <p className="text-[9px] text-gray-400 dark:text-gray-300 truncate">
              Free Account
            </p>
          </div>

          <button type="button" onClick={onLogout} className="ml-auto">
            <LogOut
              size={15}
              className="text-gray-400 hover:text-red-500 cursor-pointer transition"
            />
          </button>
        </div>
      </div>
    </aside>
  );
}