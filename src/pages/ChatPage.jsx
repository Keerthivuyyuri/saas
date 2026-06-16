import { useState } from "react";
import {
  Plus,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";

const users = [
  {
    name: "Shelby Goode",
    time: "1 min ago",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Robert Bacins",
    time: "9 min ago",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "John Carilo",
    time: "15 min ago",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Adriene Watson",
    time: "21 min ago",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jhon Deo",
    time: "29 min ago",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Emma Stone",
    time: "52 min ago",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Miller",
    time: "1 hr ago",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedUser, setSelectedUser] = useState(users[2]);

  return (
    <div className="bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-x-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-6 lg:gap-8">
        <div className="bg-white rounded-xl p-4 sm:p-5 xl:h-[850px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18px] font-semibold text-[#111139]">
              Message
            </h2>

            <button className="w-9 h-9 rounded-full bg-[#5D5FEF] text-white flex items-center justify-center">
              <Plus size={18} />
            </button>
          </div>

          <div className="h-[45px] bg-[#f6f6f8] rounded-lg flex items-center gap-3 px-4 mb-6">
            <Search size={15} className="text-gray-400" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-gray-400 w-full min-w-0"
            />
          </div>

          <div className="grid grid-cols-3 text-center text-sm border-b mb-4">
            {["All", "Personal", "Teams"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 ${
                  activeTab === tab
                    ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Personal" ? (
            <div className="max-h-[620px] xl:max-h-none overflow-y-auto">
              {users.map((user, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedUser(user)}
                  className={`flex gap-4 p-4 rounded-lg border-b last:border-b-0 cursor-pointer ${
                    selectedUser.name === user.name
                      ? "bg-[#f4f3ff]"
                      : "bg-white"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#111139] truncate">
                        {user.name}
                      </h3>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap">
                        {user.time}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-5 truncate">
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[300px] xl:h-[550px] flex items-center justify-center text-gray-400 text-sm">
              No chats available
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col min-h-[650px] xl:h-[850px]">
          {activeTab === "Personal" ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 xl:mb-16">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={selectedUser.img}
                      alt={selectedUser.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>

                  <div>
                    <h2 className="text-[17px] font-semibold text-[#111139]">
                      {selectedUser.name}
                    </h2>
                    <p className="text-xs text-gray-400">Online</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <button className="w-10 h-10 rounded-full bg-[#f6f6f8] flex items-center justify-center">
                    <Phone size={17} className="text-gray-500" />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#f6f6f8] flex items-center justify-center">
                    <Video size={17} className="text-gray-500" />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#f6f6f8] flex items-center justify-center">
                    <MoreVertical size={17} className="text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative overflow-y-auto pr-1">
                <div className="ml-12 sm:ml-[70px] mb-2 w-full max-w-[210px] bg-[#5B8FF9] text-white text-xs px-5 py-3 rounded-md">
                  Hi, this is {selectedUser.name}
                </div>

                <div className="ml-12 sm:ml-[70px] w-full max-w-[355px] bg-[#5B8FF9] text-white text-xs px-5 py-4 rounded-md">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <span className="block text-right text-[10px] opacity-70 mt-2">
                    09:02 PM
                  </span>
                </div>

                <img
                  src={selectedUser.img}
                  alt=""
                  className="w-10 h-10 rounded-full mt-5"
                />

                <div className="flex flex-wrap justify-end gap-4 mt-8">
                  <img
                    src="https://picsum.photos/seed/dashboard1/210/160"
                    alt=""
                    className="w-full sm:w-[180px] h-[150px] rounded-lg object-cover"
                  />

                  <img
                    src="https://picsum.photos/seed/dashboard2/210/160"
                    alt=""
                    className="w-full sm:w-[180px] h-[150px] rounded-lg object-cover"
                  />
                </div>

                <div className="ml-12 sm:ml-[70px] mt-10 w-full max-w-[360px] bg-[#5B8FF9] text-white text-xs px-5 py-4 rounded-md">
                  Chat opened with {selectedUser.name}.
                  <span className="block text-right text-[10px] opacity-70 mt-2">
                    09:04 PM
                  </span>
                </div>

                <img
                  src={selectedUser.img}
                  alt=""
                  className="w-10 h-10 rounded-full mt-5"
                />
              </div>

              <div className="bg-[#fafbff] rounded-xl flex items-center px-4 py-3 gap-3 mt-6">
                <Paperclip size={18} className="text-gray-400 shrink-0" />

                <input
                  placeholder={`Type a message to ${selectedUser.name}...`}
                  className="flex-1 bg-transparent outline-none text-sm text-gray-400 min-w-0"
                />

                <Smile size={18} className="text-gray-400 shrink-0" />
                <Send
                  size={22}
                  className="text-[#5D5FEF] fill-[#5D5FEF] shrink-0"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold">
                No Conversations
              </h2>
              <p className="mt-2 text-sm">No chats available in {activeTab}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}