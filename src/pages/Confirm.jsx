import { ThumbsUp } from "lucide-react";

export default function Confirm({ onGoHome }) {
  return (
    <div className="min-h-screen bg-[#e5e5e5] dark:bg-gray-950 p-3 sm:p-6 lg:p-8">
      <div className="max-w-[980px] mx-auto min-h-screen lg:min-h-[730px] bg-[#fbfbfc] dark:bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-[480px] min-h-[400px] sm:min-h-[480px] bg-white dark:bg-gray-800 rounded-xl flex flex-col items-center justify-center px-6 sm:px-10">
          <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#f4f3ff] dark:bg-gray-700 flex items-center justify-center mb-8 relative">
            <span className="absolute top-2 left-4 sm:left-5 text-[#ff7a59] text-lg sm:text-xl">
              ⌒
            </span>

            <span className="absolute top-4 right-4 sm:right-5 text-[#ff7a59] text-lg sm:text-xl">
              ⌒
            </span>

            <span className="absolute top-1 right-8 sm:right-10 text-[#5D5FEF] text-xs sm:text-sm">
              ✦
            </span>

            <span className="absolute left-6 sm:left-8 top-7 text-[#5D5FEF] text-xs sm:text-sm">
              ✦
            </span>

            <ThumbsUp
              size={38}
              className="sm:w-[46px] sm:h-[46px] text-[#5D5FEF] fill-[#5D5FEF]"
            />
          </div>

          <p className="text-[15px] sm:text-[17px] text-[#111139] dark:text-white mb-7 text-center px-4">
            Your account successfully created.
          </p>

          <button
            type="button"
            onClick={onGoHome}
            className="w-[120px] h-[40px] rounded-md bg-[#5D5FEF] text-white text-sm hover:bg-[#4b4df2] transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}