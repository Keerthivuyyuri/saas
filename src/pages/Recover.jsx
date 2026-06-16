import { useState } from "react";

export default function Recover({ onLoginClick }) {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-3 sm:p-6 lg:p-8">
      <div className="max-w-[1320px] mx-auto min-h-screen lg:min-h-[820px] bg-[#fbfbfc] flex items-center justify-center">
        <div className="w-full max-w-[590px] min-h-[480px] sm:min-h-[590px] bg-white rounded-lg flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5D5FEF] flex items-center justify-center mb-8 sm:mb-12">
            <div className="w-10 h-7 sm:w-12 sm:h-8 border-t-2 border-white rounded-full relative">
              <span className="absolute left-0 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></span>
              <span className="absolute left-5 sm:left-6 top-[-4px] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></span>
              <span className="absolute right-0 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></span>
            </div>
          </div>

          <h1 className="text-[20px] sm:text-[22px] font-semibold text-[#111139] mb-10 sm:mb-14">
            Recover
          </h1>

          <div className="w-full mb-6">
            <label className="text-sm text-[#111139]">Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none"
            />
          </div>

          <button
            type="button"
            onClick={onLoginClick}
            className="w-full h-[48px] bg-[#5D5FEF] text-white rounded-lg text-sm"
          >
            Reset Your Password
          </button>
        </div>
      </div>
    </div>
  );
}