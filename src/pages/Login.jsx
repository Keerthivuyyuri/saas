import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import loginImage from "../assets/office.png";

export default function Login({ onLogin, onSignupClick, onRecoverClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!existingUser) {
      setError("Invalid email or password");
      return;
    }

    /*
      Do not save login status in localStorage.
      So when page refreshes, App.js starts from:
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      and user will be logged out.
    */

    onLogin();
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
            Log in
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
            <label className="text-sm text-[#111139]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 text-sm outline-none"
            />
          </div>

          <div className="w-full mb-5">
            <label className="text-sm text-[#111139]">Password</label>

            <div className="w-full h-[48px] bg-[#f6f6f8] rounded-lg mt-2 px-4 flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="flex-1 bg-transparent outline-none text-sm min-w-0"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={15} className="text-gray-400 cursor-pointer" />
                ) : (
                  <Eye size={15} className="text-gray-400 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {error && <p className="w-full text-red-500 text-sm mb-4">{error}</p>}

          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <label className="text-sm text-[#111139] flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={onRecoverClick}
              className="text-sm text-[#5D5FEF] text-left sm:text-right"
            >
              Reset Password?
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-[48px] bg-[#5D5FEF] text-white rounded-lg text-sm mb-8"
          >
            Log in
          </button>

          <p className="text-sm text-[#111139] text-center">
            Don’t have account yet?{" "}
            <span
              onClick={onSignupClick}
              className="text-[#5D5FEF] cursor-pointer hover:underline"
            >
              New Account
            </span>
          </p>
        </div>

        <div className="hidden md:flex bg-[#fbfbfc] items-center justify-center p-6">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}