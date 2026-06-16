import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import InterviewImage from "../assets/Interview.png";

export default function Signup({ onSignup, onLoginClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    setError("");

    if (!fullName || !email || !username || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!agree) {
      setError("Please agree to the terms and privacy policy");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError("Email already exists");
      return;
    }

    users.push({ fullName, email, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    onSignup();
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-3 sm:p-6">
      <div className="max-w-[1080px] mx-auto bg-white min-h-screen md:min-h-[820px] grid grid-cols-1 md:grid-cols-[330px_1fr]">
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 py-10">
          <div className="w-16 h-16 rounded-full bg-[#5D5FEF] flex items-center justify-center mb-6">
            <div className="w-10 h-6 border-t-2 border-white rounded-full relative">
              <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-white rounded-full" />
              <span className="absolute left-5 top-[-4px] w-2.5 h-2.5 bg-white rounded-full" />
              <span className="absolute right-0 top-2 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
          </div>

          <h1 className="text-[18px] font-semibold text-[#111139] mb-8">
            Sign Up
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-5">
            <button className="h-[38px] bg-[#f6f6f8] rounded-md text-xs flex items-center justify-center gap-2">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="h-[38px] bg-[#f6f6f8] rounded-md text-xs flex items-center justify-center gap-2">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          <div className="flex items-center w-full mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-4 text-xs text-[#111139]">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="w-full mb-4">
            <label className="text-xs text-[#111139]">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="w-full h-[42px] bg-[#f6f6f8] rounded-md mt-2 px-4 text-xs outline-none"
            />
          </div>

          <div className="w-full mb-4">
            <label className="text-xs text-[#111139]">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full h-[42px] bg-[#f6f6f8] rounded-md mt-2 px-4 text-xs outline-none"
            />
          </div>

          <div className="w-full mb-4">
            <label className="text-xs text-[#111139]">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full h-[42px] bg-[#f6f6f8] rounded-md mt-2 px-4 text-xs outline-none"
            />
          </div>

          <div className="w-full mb-4">
            <label className="text-xs text-[#111139]">Password</label>

            <div className="w-full h-[42px] bg-[#f6f6f8] rounded-md mt-2 px-4 flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="flex-1 bg-transparent outline-none text-xs min-w-0"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={14} className="text-gray-400 cursor-pointer" />
                ) : (
                  <Eye size={14} className="text-gray-400 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          <label className="w-full text-xs text-[#111139] flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1"
            />
            <span>
              By creating an account you agree to the{" "}
              <span className="text-[#5D5FEF]">terms of use</span> and our{" "}
              <span className="text-[#5D5FEF]">privacy policy</span>
            </span>
          </label>

          {error && <p className="w-full text-red-500 text-xs mb-4">{error}</p>}

          <button
            onClick={handleSignup}
            className="w-full h-[44px] bg-[#5D5FEF] text-white rounded-md text-sm mb-6"
          >
            Create account
          </button>

          <p className="text-xs text-[#111139]">
            Already have an account?{" "}
            <button onClick={onLoginClick} className="text-[#5D5FEF]">
              Log in
            </button>
          </p>
        </div>

        <div className="hidden md:flex bg-[#fbfbfc] items-center justify-center p-6">
          <img
            src={InterviewImage}
            alt="signup"
            className="w-full max-w-[620px]"
          />
        </div>
      </div>
    </div>
  );
}