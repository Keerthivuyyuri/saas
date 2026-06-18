import {
  BarChart3,
  Bell,
  Calendar,
  Grid2X2,
  Image,
  List,
  LogOut,
  Settings,
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
}) {
  return (
    <aside className="w-[220px] h-full bg-white flex flex-col py-6 lg:py-8">
      <div className="flex items-center gap-3 px-6 lg:px-8 mb-8 lg:mb-10">
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          ~
        </div>
        <h2 className="text-xl font-bold text-[#111139]">Base</h2>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`w-full flex items-center gap-4 px-6 lg:px-8 py-3.5 lg:py-4 text-sm transition ${
                active
                  ? "text-indigo-500 font-semibold bg-indigo-50"
                  : "text-gray-400 hover:text-indigo-500"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>

              {item.name === "Messages" && !messagesViewed && (
                <span className="ml-auto text-[10px] text-red-500">49</span>
              )}
            </button>
          );
        })}
      </nav>
      
      <div className="mx-5 lg:mx-6 mb-6 lg:mb-8 bg-[#EEF2FF] rounded-3xl h-[130px] lg:h-[140px] relative flex flex-col items-center justify-end pb-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[35px] bg-[#7DA2FF]" />

        <div className="absolute top-[25px] left-1/2 -translate-x-1/2">
          <div className="w-0 h-0 border-l-[34px] border-r-[34px] lg:border-l-[38px] lg:border-r-[38px] border-b-[42px] lg:border-b-[45px] border-l-transparent border-r-transparent border-b-[#7DA2FF]" />

          <div className="w-0 h-0 border-l-[34px] border-r-[34px] lg:border-l-[38px] lg:border-r-[38px] border-t-[16px] lg:border-t-[18px] border-l-transparent border-r-transparent border-t-[#5C8FFF] -mt-1" />
        </div>

        <div className="absolute top-[80px] lg:top-[84px] left-1/2 -translate-x-1/2 w-[70px] h-[10px] rounded-full bg-blue-300 opacity-30 blur-sm" />

        <button className="w-[95px] h-[30px] rounded-xl bg-[#5D5FEF] text-white text-[11px] font-medium hover:bg-[#4F46E5] transition">
          Upgrade Now
        </button>
      </div>

      <div className="flex items-center gap-3 px-6 lg:px-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-10 h-10 rounded-lg"
        />

        <div className="min-w-0">
          <h4 className="text-xs font-bold text-[#111139] truncate">
            Easin Arafat
          </h4>
          <p className="text-[10px] text-gray-400 truncate">Free Account</p>
        </div>

        <button type="button" onClick={onLogout} className="ml-auto">
          <LogOut
            size={16}
            className="text-gray-400 hover:text-red-500 cursor-pointer transition"
          />
        </button>
      </div>
    </aside>
  );
}
