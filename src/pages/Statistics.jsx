import { useState } from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const incomeData = [
  { month: "Jan", income: 10000 },
  { month: "Feb", income: 15000 },
  { month: "Mar", income: 12000 },
  { month: "Apr", income: 25000 },
  { month: "May", income: 18000 },
  { month: "Jun", income: 20000 },
];

const spendingData = [
  { month: "Jan", spending: 8000 },
  { month: "Feb", spending: 12000 },
  { month: "Mar", spending: 9500 },
  { month: "Apr", spending: 20000 },
  { month: "May", spending: 15000 },
  { month: "Jun", spending: 18000 },
];

const payments = [
  { id: 1, name: "Dribbble", price: "$7.99/m" },
  { id: 2, name: "Figma", price: "$9.99/m" },
  { id: 3, name: "WeChat", price: "$6.89/m" },
];

const Statistics = () => {
  const [activeTab, setActiveTab] = useState("income");
  const dataMap = { income: incomeData, spending: spendingData };
  const data = dataMap[activeTab];
  const totalAmount = data.reduce((acc, cur) => acc + (cur.income || cur.spending), 0);

  return (
    <div className="h-screen bg-gray-950 text-white p-6 flex flex-col space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="text-gray-400 hover:text-white transition-all">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold">Statistics</h1>
        <button className="text-gray-400 hover:text-white transition-all">
          <MoreVertical size={28} />
        </button>
      </div>

      {/* Toggle Income / Spending */}
      <div className="flex bg-gray-800 p-2 rounded-xl">
        {["income", "spending"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-center rounded-xl text-lg font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-green-500 text-black shadow-lg shadow-green-500/50"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Total Amount */}
      <div className="text-center">
        <p className="text-gray-400 text-lg">Total {activeTab === "income" ? "Income" : "Spending"}</p>
        <h2 className="text-5xl font-extrabold text-green-400 transition-all">
          ${totalAmount.toLocaleString()}
        </h2>
      </div>

      {/* Chart */}
      <div className="h-56 bg-gray-800 p-5 rounded-xl shadow-xl shadow-gray-900">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" tick={{ fill: "white" }} tickLine={false} />
            <YAxis tick={{ fill: "white" }} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "#222", color: "white", borderRadius: "8px", padding: "10px" }} />
            <Bar dataKey={activeTab} fill="url(#gradient)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#32CD32" />
                <stop offset="100%" stopColor="#1B5E20" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Scheduled Payments */}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Scheduled Payments</h2>
          <button className="text-green-400 text-md hover:text-white transition-all">See all</button>
        </div>

        <div className="flex space-x-4 mt-4 overflow-x-auto pb-2">
          {payments.map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 p-5 rounded-xl flex-1 text-center min-w-[120px] shadow-md border border-gray-700 hover:border-green-500 hover:shadow-green-500/50 transition-all"
            >
              <p className="text-white text-lg font-medium">{p.name}</p>
              <p className="text-gray-400 text-md">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
