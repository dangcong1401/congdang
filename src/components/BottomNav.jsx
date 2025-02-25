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
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-3 flex justify-around text-white">
      {navItems.map(({ to, icon, label }) => (
        <Link key={to} to={to} className={`flex flex-col items-center ${location.pathname === to ? "text-green-400" : "text-gray-400"}`}>
          {icon}
          <span className="text-xs">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
