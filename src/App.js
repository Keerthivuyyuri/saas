import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { ReactLenis } from "lenis/react";

import "react-toastify/dist/ReactToastify.css";
import "lenis/dist/lenis.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import InvoiceList from "./pages/InvoiceList";
import ScheduleList from "./pages/ScheduleList";
import BoardList from "./pages/BoardList";
import CustomerList from "./pages/CustomerList";
import CalendarPage from "./pages/CalendarPage";
import TaskList from "./pages/TaskList";
import CreateInvoice from "./pages/CreateInvoice";
import TimelineTask from "./pages/TimelineTask";
import Recover from "./pages/Recover";
import Confirm from "./pages/Confirm";
import ChatPage from "./pages/ChatPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [authPage, setAuthPage] = useState("login");
  const [activePage, setActivePage] = useState(
    localStorage.getItem("activePage") || "Dashboard"
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const [messagesViewed, setMessagesViewed] = useState(
    localStorage.getItem("messagesViewed") === "true"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const mainRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [authPage, activePage, isLoggedIn]);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("activePage");
    localStorage.removeItem("messagesViewed");

    setIsLoggedIn(false);
    setAuthPage("login");
    setActivePage("Dashboard");
    setMessagesViewed(false);
    setShowSidebar(false);
  };

  const handleAuthPageChange = (page) => {
    setAuthPage(page);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);
    setShowSidebar(false);

    if (page === "Messages") {
      setMessagesViewed(true);
      localStorage.setItem("messagesViewed", "true");
    }
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("activePage", "Dashboard");

    setIsLoggedIn(true);
    setActivePage("Dashboard");
    setShowSidebar(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen overflow-y-auto">
        {authPage === "login" && (
          <Login
            onLogin={handleLogin}
            onSignupClick={() => handleAuthPageChange("signup")}
            onRecoverClick={() => handleAuthPageChange("recover")}
          />
        )}

        {authPage === "signup" && (
          <Signup
            onSignup={() => handleAuthPageChange("confirm")}
            onLoginClick={() => handleAuthPageChange("login")}
          />
        )}

        {authPage === "recover" && (
          <Recover onLoginClick={() => handleAuthPageChange("login")} />
        )}

        {authPage === "confirm" && (
          <Confirm onGoHome={() => handleAuthPageChange("login")} />
        )}

        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </div>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        syncTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        prevent: (node) =>
          node.classList?.contains("sidebar-scroll") ||
          node.classList?.contains("main-scroll"),
      }}
    >
      <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
        <div className="min-h-screen bg-[#e5e5e5] dark:bg-gray-950 p-2 sm:p-4 lg:p-5 overflow-hidden">
          <div className="max-w-[1500px] mx-auto bg-[#fafbff] dark:bg-gray-900 flex h-[calc(100vh-40px)] relative overflow-hidden">
            <div className="hidden lg:block h-full">
              <Sidebar
                activePage={activePage}
                setActivePage={handlePageChange}
                onLogout={handleLogout}
                messagesViewed={messagesViewed}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </div>

            {showSidebar && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setShowSidebar(false)}
                />

                <div className="absolute left-0 top-0 h-full bg-white dark:bg-gray-900">
                  <Sidebar
                    activePage={activePage}
                    setActivePage={handlePageChange}
                    onLogout={handleLogout}
                    messagesViewed={messagesViewed}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                </div>
              </div>
            )}

            <main
              ref={mainRef}
              className="main-scroll flex-1 min-w-0 h-full overflow-y-auto overflow-x-hidden"
            >
              <div className="lg:hidden h-[58px] bg-white dark:bg-gray-800 flex items-center justify-between px-4 sticky top-0 z-40 border-b dark:border-gray-700">
                <h2 className="text-lg font-bold text-[#111139] dark:text-white">
                  Base
                </h2>

                <button
                  type="button"
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="w-10 h-10 rounded-lg bg-[#f6f6f8] dark:bg-gray-700 flex items-center justify-center"
                >
                  {showSidebar ? (
                    <X size={20} className="dark:text-white" />
                  ) : (
                    <Menu size={20} className="dark:text-white" />
                  )}
                </button>
              </div>

              {activePage === "Dashboard" && <Dashboard />}
              {activePage === "Invoice" && (
                <InvoiceList setActivePage={handlePageChange} />
              )}
              {activePage === "Schedule" && (
                <ScheduleList setActivePage={handlePageChange} />
              )}
              {activePage === "Board" && <BoardList />}
              {activePage === "Analytics" && <CustomerList />}
              {activePage === "Calendar" && (
                <CalendarPage setActivePage={handlePageChange} />
              )}
              {activePage === "TaskList" && <TaskList />}
              {activePage === "CreateInvoice" && <CreateInvoice />}
              {activePage === "Settings" && <TimelineTask />}
              {activePage === "Messages" && <ChatPage />}
            </main>
          </div>
        </div>

        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </div>
    </ReactLenis>
  );
}

export default App;