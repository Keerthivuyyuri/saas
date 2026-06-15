import { ThumbsUp } from "lucide-react";

export default function Confirm({ onGoHome }) {
  return (
    <div className="min-h-screen bg-[#e5e5e5] p-8">
      <div className="max-w-[980px] mx-auto min-h-[730px] bg-[#fbfbfc] flex items-center justify-center">
        <div className="w-[480px] h-[480px] bg-white rounded-lg flex flex-col items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full bg-[#f4f3ff] flex items-center justify-center mb-8 relative">
            <span className="absolute top-2 left-5 text-[#ff7a59] text-xl">⌒</span>
            <span className="absolute top-4 right-5 text-[#ff7a59] text-xl">⌒</span>
            <span className="absolute top-1 right-10 text-[#5D5FEF] text-sm">✦</span>
            <span className="absolute left-8 top-7 text-[#5D5FEF] text-sm">✦</span>

            <ThumbsUp size={46} className="text-[#5D5FEF] fill-[#5D5FEF]" />
          </div>

          <p className="text-[17px] text-[#111139] mb-7">
            Your account successfully created.
          </p>

          <button
            onClick={onGoHome}
            className="w-[110px] h-[36px] rounded-md bg-[#5D5FEF] text-white text-xs"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}