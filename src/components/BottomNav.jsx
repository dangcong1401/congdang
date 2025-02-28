import { Home, RefreshCw, BarChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <Home size={24} />, label: "Dashboard" },
    { to: "/exchange", icon: <RefreshCw size={24} />, label: "Exchange" },
    { to: "/statistics", icon: <BarChart size={24} />, label: "Statistics" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-3 flex justify-around text-white rounded-t-2xl shadow-2xl">
      {navItems.map(({ to, icon, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center p-2 transition-all duration-300 ${
              isActive
                ? "text-green-400 scale-110"
                : "text-gray-500 hover:text-white"
            }`}
          >
            <div
              className={`p-2 rounded-full transition-all ${
                isActive ? "bg-green-600 bg-opacity-20 shadow-md" : ""
              }`}
            >
              {icon}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
