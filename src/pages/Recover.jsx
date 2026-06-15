import { useState } from "react";

export default function Recover({ onLoginClick }) {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-8">
      <div className="max-w-[1320px] mx-auto min-h-[820px] bg-[#fbfbfc] flex items-center justify-center">
        <div className="w-[590px] h-[590px] bg-white rounded-lg flex flex-col items-center justify-center px-16">
          <div className="w-20 h-20 rounded-full bg-[#5D5FEF] flex items-center justify-center mb-12">
            <div className="w-12 h-8 border-t-2 border-white rounded-full relative">
              <span className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></span>
              <span className="absolute left-6 top-[-4px] w-3 h-3 bg-white rounded-full"></span>
              <span className="absolute right-0 top-2 w-3 h-3 bg-white rounded-full"></span>
            </div>
          </div>

          <h1 className="text-[22px] font-semibold text-[#111139] mb-14">
            Recover
          </h1>

          <div className="w-full mb-6">
            <label className="text-sm text-[#111139]">
              Email Address
            </label>

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