import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
    scrollToTop();
  };

  const handleAuthPageChange = (page) => {
    setAuthPage(page);
    scrollToTop();
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);

    setShowSidebar(false);
    scrollToTop();

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
    scrollToTop();
  };

  if (!isLoggedIn) {
    if (authPage === "login") {
      return (
        <Login
          onLogin={handleLogin}
          onSignupClick={() => handleAuthPageChange("signup")}
          onRecoverClick={() => handleAuthPageChange("recover")}
        />
      );
    }

    if (authPage === "signup") {
      return (
        <Signup
          onSignup={() => handleAuthPageChange("confirm")}
          onLoginClick={() => handleAuthPageChange("login")}
        />
      );
    }

    if (authPage === "recover") {
      return <Recover onLoginClick={() => handleAuthPageChange("login")} />;
    }

    return <Confirm onGoHome={() => handleAuthPageChange("login")} />;
  }

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-2 sm:p-4 lg:p-5">
      <div className="max-w-[1500px] mx-auto bg-[#fafbff] flex min-h-screen relative overflow-hidden">
        <div className="hidden lg:block">
          <Sidebar
            activePage={activePage}
            setActivePage={handlePageChange}
            onLogout={handleLogout}
            messagesViewed={messagesViewed}
          />
        </div>

        {showSidebar && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowSidebar(false)}
            />

            <div className="absolute left-0 top-0 h-full bg-white">
              <Sidebar
                activePage={activePage}
                setActivePage={handlePageChange}
                onLogout={handleLogout}
                messagesViewed={messagesViewed}
              />
            </div>
          </div>
        )}

        <main className="flex-1 min-w-0">
          <div className="lg:hidden h-[58px] bg-white flex items-center justify-between px-4 sticky top-0 z-40 border-b">
            <h2 className="text-lg font-bold text-[#111139]">Base</h2>

            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="w-10 h-10 rounded-lg bg-[#f6f6f8] flex items-center justify-center"
            >
              {showSidebar ? <X size={20} /> : <Menu size={20} />}
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
  );
}

export default App;