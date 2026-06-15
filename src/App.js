import { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState("login");
  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogout = () => {
  setIsLoggedIn(false);
  setAuthPage("login");
  setActivePage("Dashboard");
};

  if (!isLoggedIn) {
  if (authPage === "login") {
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
        onSignupClick={() => setAuthPage("signup")}
        onRecoverClick={() => setAuthPage("recover")}
      />
    );
  }

  if (authPage === "signup") {
    return (
      <Signup
        onSignup={() => setAuthPage("confirm")}
        onLoginClick={() => setAuthPage("login")}
      />
    );
  }

  if (authPage === "recover") {
    return <Recover onLoginClick={() => setAuthPage("login")} />;
  }

  return (
  <Confirm
    onGoHome={() => setAuthPage("login")}
  />
);
}

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-5">
      <div className="max-w-[1500px] mx-auto bg-[#fafbff] flex min-h-[900px]">
        <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout} />

        <main className="flex-1">
          {activePage === "Dashboard" && <Dashboard />}
          {activePage === "Invoice" && <InvoiceList setActivePage={setActivePage} />}
          {activePage === "Schedule" && <ScheduleList setActivePage={setActivePage} />}
          {activePage === "Board" && <BoardList />}
          {activePage === "Analytics" && <CustomerList />}
          {activePage === "Calendar" && <CalendarPage setActivePage={setActivePage} />}
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