import { useState } from "react";
import {
  Search,
  Plus,
  Trash2,
  Calendar,
  Mail,
  Star,
  MoreHorizontal,
  Edit,
  Trash,
} from "lucide-react";

const invoices = [
  ["#876364", "Arrora gaur", "arroragaur@gmail.com", "12 Dec, 2020", "Complete", true],
  ["#876123", "James Mullican", "jamesmullican@gmail.com", "10 Dec, 2020", "Pending", true],
  ["#876213", "Robert Bacins", "robertbacins@gmail.com", "09 Dec, 2020", "Complete", false],
  ["#876987", "Bethany Jackson", "bethanyjackson@gmail.com", "09 Dec, 2020", "Cancel", false],
  ["#871345", "Anne Jacob", "annejacob@gmail.com", "10 Dec, 2020", "Complete", false],
  ["#872345", "Bethany jackson", "bethanyjackson@gmail.com", "10 Dec, 2020", "Pending", true],
  ["#872346", "James Mullican", "jamesmullican@gmail.com", "10 Dec, 2020", "Complete", false],
  ["#873245", "Jhon Deo", "jhondeo32@gmail.com", "08 Dec, 2020", "Complete", true],
  ["#876364", "Bethany jackson", "bethanyjackson@gmail.com", "02 Dec, 2020", "Cancel", true],
  ["#878769", "James Mullican", "jamesmullican@gmail.com", "01 Dec, 2020", "Pending", false],
];

const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/women/58.jpg",
  "https://randomuser.me/api/portraits/men/62.jpg",
  "https://randomuser.me/api/portraits/women/75.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
];

export default function InvoiceList({ setActivePage }) {
  const [openMenu, setOpenMenu] = useState(null);

  const statusStyle = {
    Complete: "bg-green-100 text-green-600",
    Pending: "bg-orange-100 text-orange-500",
    Cancel: "bg-red-100 text-red-500",
  };

  return (
    <div className="bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-10 py-6 lg:py-9 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[#111139]">
          Invoice List
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <div className="w-full sm:w-[240px] h-[44px] bg-white rounded-xl flex items-center px-5">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none text-sm text-gray-400 min-w-0"
            />
            <Search size={18} className="text-gray-400" />
          </div>

          <button
            onClick={() => setActivePage && setActivePage("CreateInvoice")}
            className="w-full sm:w-auto h-[44px] px-7 rounded-xl bg-[#5D5FEF] text-white text-sm flex items-center justify-center gap-2"
          >
            <Plus size={16} />
            Add New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="min-w-[1220px]">
          <div className="grid grid-cols-[45px_110px_220px_270px_170px_180px_60px_40px] px-6 mb-3 text-xs text-gray-500 items-center">
            <input type="checkbox" className="w-5 h-5 accent-[#5D5FEF]" />
            <p>Invoice Id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Date</p>
            <p>Status</p>
            <Trash2 size={18} className="text-gray-400" />
            <span></span>
          </div>

          <div className="space-y-4">
            {invoices.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[45px_110px_220px_270px_170px_180px_60px_40px] items-center bg-white rounded-xl px-6 h-[70px] shadow-sm relative"
              >
                <input
                  type="checkbox"
                  defaultChecked={[2, 3, 5, 9].includes(index)}
                  className="w-5 h-5 accent-[#5D5FEF]"
                />

                <p className="text-sm text-[#111139]">{item[0]}</p>

                <div className="flex items-center gap-4">
                  <img
                    src={avatars[index]}
                    alt={item[1]}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-sm text-[#111139]">{item[1]}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-green-500" />
                  <p className="text-sm text-[#111139]">{item[2]}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={15} className="text-blue-500" />
                  <p className="text-sm text-[#111139]">{item[3]}</p>
                </div>

                <span
                  className={`w-[165px] h-[42px] rounded-full flex items-center justify-center text-sm font-medium ${statusStyle[item[4]]}`}
                >
                  {item[4]}
                </span>

                <Star
                  size={20}
                  className={
                    item[5]
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200 fill-gray-200"
                  }
                />

                <button
                  onClick={() =>
                    setOpenMenu(openMenu === index ? null : index)
                  }
                  className="relative"
                >
                  <MoreHorizontal size={20} className="text-gray-400" />
                </button>

                {openMenu === index && (
                  <div className="absolute right-5 top-[48px] w-[105px] bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-2">
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
      </div>
    </div>
  );
}