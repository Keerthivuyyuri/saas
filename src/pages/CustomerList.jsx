import { useState } from "react";
import {
  Plus,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  Edit,
  Trash,
  X,
  Camera,
} from "lucide-react";

const customers = [
  ["Jhon Deo", "jhondoe2211@gmail.com", "+33757005467", "Male"],
  ["Shelby Goode", "shelbygoode481@gmail.com", "+33757005467", "Female"],
  ["Robert Bacins", "robertbacins4182@.com", "+33757005467", "Male"],
  ["John Carilo", "john carilo182@.com", "+33757805467", "Male"],
  ["Adriene Watson", "adrienewatson82@.com", "+83757305467", "Female"],
  ["Jhon Deo", "jhondeo24823@.com", "+63475700546", "Male"],
  ["Mark Ruffalo", "markruffalo3735@.com", "+33757005467", "Male"],
  ["Bethanyjackson", "bethanyjackson5@.com", "+33757005467", "Female"],
  ["Christine Huston", "christinehuston4@.com", "+33757005467", "Male"],
  ["Anne Jacob", "annejacob2@ummoh.com", "+33757005467", "Male"],
  ["James Mullican", "jamesmullican5346@.com", "+33757005467", "Male"],
];

const avatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
  "https://randomuser.me/api/portraits/men/17.jpg",
  "https://randomuser.me/api/portraits/women/18.jpg",
  "https://randomuser.me/api/portraits/women/19.jpg",
  "https://randomuser.me/api/portraits/women/20.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
];

export default function CustomerList() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="grid grid-cols-[1fr_395px] bg-[#fafbff] min-h-screen">
      <div className="px-8 py-9">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[26px] font-bold text-[#111139]">
            Customer List
          </h1>

          <button
            onClick={() => setShowAddCustomer(true)}
            className="h-[44px] px-7 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center gap-2"
          >
            <Plus size={16} />
            Add Customer
          </button>
        </div>

        <div className="grid grid-cols-[210px_260px_180px_120px_40px] px-6 mb-3 text-xs text-gray-500">
          <p>Name</p>
          <p>Email</p>
          <p>Phone number</p>
          <p>Gender</p>
          <span></span>
        </div>

        <div className="space-y-4">
          {customers.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[210px_260px_180px_120px_40px] items-center bg-white rounded-xl h-[58px] px-6 shadow-sm relative"
            >
              <div className="flex items-center gap-4">
                <img
                  src={avatars[index]}
                  alt={item[0]}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-sm text-[#111139]">{item[0]}</p>
              </div>

              <p className="text-sm text-[#111139]">{item[1]}</p>
              <p className="text-sm text-[#111139]">{item[2]}</p>

              <span
                className={`w-[70px] h-[28px] rounded-full flex items-center justify-center text-xs ${
                  item[3] === "Male"
                    ? "bg-blue-50 text-blue-500"
                    : "bg-red-50 text-red-400"
                }`}
              >
                {item[3]}
              </span>

              <button onClick={() => setOpenMenu(openMenu === index ? null : index)}>
                <MoreHorizontal size={18} className="text-gray-400" />
              </button>

              {openMenu === index && (
                <div className="absolute right-[-45px] top-[38px] w-[105px] bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-2">
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-blue-500 hover:bg-blue-50">
                    <Edit size={13} />
                    Edit
                  </button>

                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-red-500 hover:bg-red-50">
                    <Trash size={13} />
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showAddCustomer ? (
        <aside className="bg-white px-8 py-9">
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-[22px] font-bold text-[#111139]">
              Add Customer
            </h2>

            <button
              onClick={() => setShowAddCustomer(false)}
              className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center"
            >
              <X size={18} className="text-red-400" />
            </button>
          </div>

          <div className="w-[135px] h-[135px] rounded-full bg-[#f5f5f8] mx-auto flex items-center justify-center mb-12">
            <Camera size={28} className="text-[#4b4b68]" />
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-[#111139]">First Name</label>
              <input
                defaultValue="John"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-md mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Last Name</label>
              <input
                defaultValue="Deo"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-md mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Email</label>
              <input
                defaultValue="Example@gmail.com"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-md mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Phone Number</label>
              <input
                defaultValue="33757005467"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-md mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Gender</label>
              <select className="w-full h-[52px] bg-[#f6f6f8] rounded-md mt-2 px-5 text-sm outline-none text-gray-500">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <button
              type="button"
              className="w-full h-[54px] rounded-xl bg-[#5D5FEF] text-white text-base mt-8"
            >
              Add Customer
            </button>
          </form>
        </aside>
      ) : (
        <aside className="bg-white px-7 py-10">
          <div className="flex flex-col items-center border-b pb-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Deo"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h2 className="text-[22px] font-bold text-[#111139]">John Deo</h2>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>

          <div className="py-8 border-b">
            <h3 className="text-[18px] font-semibold text-[#111139] mb-6">
              Contact Info
            </h3>

            <div className="space-y-6 text-sm text-gray-500">
              <div className="flex gap-4">
                <Mail size={18} className="text-gray-400" />
                <span>kajop5128@ummoh.com</span>
              </div>

              <div className="flex gap-4">
                <Phone size={18} className="text-gray-400" />
                <span>33757005467</span>
              </div>

              <div className="flex gap-4">
                <MapPin size={18} className="text-gray-400" />
                <span>2239 Hog Camp Road Schaumburg</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white border rounded-xl p-5">
            <div className="flex justify-between mb-5">
              <h3 className="text-[18px] font-semibold text-[#111139]">
                Performance
              </h3>
              <MoreHorizontal size={18} className="text-gray-400" />
            </div>

            <div className="flex items-end justify-between h-[140px]">
              {[45, 85, 55, 70, 60, 95].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-2 rounded-full ${
                      i === 1 ? "bg-orange-500" : "bg-orange-100"
                    }`}
                    style={{ height: `${h}px` }}
                  />
                  <span className="text-xs text-gray-400">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-6">
            <div className="bg-white border rounded-xl p-5 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-[8px] border-yellow-400 flex items-center justify-center text-sm font-bold">
                70%
              </div>
            </div>

            <div className="bg-white border rounded-xl p-5 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-[8px] border-blue-500 flex items-center justify-center text-sm font-bold">
                60%
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}