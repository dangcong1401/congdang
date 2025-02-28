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
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-3 flex justify-around text-white rounded-t-2xl shadow-lg">
      {navItems.map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to}
          className={`flex flex-col items-center p-2 transition-all duration-200 ${
            location.pathname === to ? "text-green-400" : "text-gray-400 hover:text-white"
          } active:scale-95`}
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
