import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !username || !password) {
      setError("Please fill all fields");
      toast.warning("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      toast.error("Please enter a valid email");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      toast.warning("Username must be at least 3 characters");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      toast.warning("Password must be at least 6 characters");
      return;
    }

    if (!agree) {
      setError("Please agree to the terms and privacy policy");
      toast.warning("Please agree to the terms and privacy policy");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError("Email already exists");
      toast.error("Email already exists");
      return;
    }

    users.push({ fullName, email, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully!");

    setTimeout(() => {
      onSignup();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-3 sm:p-6 lg:p-8">
      <div className="max-w-[1350px] mx-auto bg-white min-h-screen lg:min-h-[850px] grid grid-cols-1 md:grid-cols-[410px_1fr]">
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-12 py-10">
          <div className="w-20 h-20 rounded-full bg-[#5D5FEF] flex items-center justify-center mb-8">
            <div className="w-12 h-8 border-t-2 border-white rounded-full relative">
              <span className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></span>
              <span className="absolute left-6 top-[-4px] w-3 h-3 bg-white rounded-full"></span>
              <span className="absolute right-0 top-2 w-3 h-3 bg-white rounded-full"></span>
            </div>
          </div>

          <h1 className="text-[22px] font-semibold text-[#111139] mb-8">
            Sign Up
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
            <button
              type="button"
              className="h-[44px] bg-[#f6f6f8] rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button
              type="button"
              className="h-[44px] bg-[#f6f6f8] rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          <div className="flex items-center w-full mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-[#111139]">Or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="w-full mb-5">
            <label className="text-sm text-[#111139]">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className={`w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 text-sm outline-none border ${
                error && !fullName ? "border-red-500" : "border-transparent"
              }`}
            />
          </div>

          <div className="w-full mb-5">
            <label className="text-sm text-[#111139]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className={`w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 text-sm outline-none border ${
                error && !email ? "border-red-500" : "border-transparent"
              }`}
            />
          </div>

          <div className="w-full mb-5">
            <label className="text-sm text-[#111139]">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className={`w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 text-sm outline-none border ${
                error && !username ? "border-red-500" : "border-transparent"
              }`}
            />
          </div>

          <div className="w-full mb-5">
            <label className="text-sm text-[#111139]">Password</label>

            <div
              className={`w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 flex items-center border ${
                error && !password ? "border-red-500" : "border-transparent"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="flex-1 h-full bg-transparent outline-none text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 flex items-center justify-center"
              >
                {showPassword ? (
                  <EyeOff size={16} className="text-gray-400" />
                ) : (
                  <Eye size={16} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <label className="w-full text-sm text-[#111139] flex items-start gap-2 mb-5">
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

          {error && <p className="w-full text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="button"
            onClick={handleSignup}
            className="w-full h-[48px] bg-[#5D5FEF] text-white rounded-lg text-sm mb-8"
          >
            Create account
          </button>

          <p className="text-sm text-[#111139] text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onLoginClick}
              className="text-[#5D5FEF] hover:underline"
            >
              Log in
            </button>
          </p>
        </div>

        <div className="hidden md:flex bg-[#fbfbfc] items-center justify-center p-6">
          <img
            src={InterviewImage}
            alt="signup"
            className="w-full max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}