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
  const data = activeTab === "income" ? incomeData : spendingData;
  const totalAmount = data.reduce((acc, cur) => acc + (cur.income || cur.spending), 0);

  return (
    <div className="h-screen bg-black text-white p-6 flex flex-col space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="text-gray-400 hover:text-white">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold">Statistics</h1>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical size={28} />
        </button>
      </div>

      {/* Toggle Income / Spending */}
      <div className="flex bg-gray-800 p-2 rounded-xl">
        {['income', 'spending'].map(tab => (
          <button
            key={tab}
            className={`flex-1 py-3 text-center rounded-xl text-lg transition-all duration-300 ${
              activeTab === tab ? "bg-green-500 text-black font-bold shadow-lg" : "text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Total Income / Spending */}
      <div className="text-center">
        <p className="text-gray-400 text-lg">Total {activeTab === "income" ? "Income" : "Spending"}</p>
        <h2 className="text-4xl font-extrabold">${totalAmount.toLocaleString()}</h2>
      </div>

      {/* Time Filter */}
      <div className="flex justify-center space-x-4">
        {["D", "W", "M", "Y"].map((time) => (
          <button
            key={time}
            className="py-2 px-4 rounded-lg text-lg transition-all duration-300 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            {time}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-5 h-56 bg-gray-800 p-5 rounded-xl shadow-lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "white" }} />
            <Bar dataKey={activeTab} fill="#32CD32" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Scheduled Payments */}
      <div className="mt-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Scheduled Payments</h2>
          <button className="text-gray-400 text-md hover:text-white">See all</button>
        </div>

        <div className="flex space-x-4 mt-4 overflow-x-auto pb-2">
          {payments.map((p) => (
            <div key={p.id} className="bg-gray-800 p-5 rounded-xl flex-1 text-center min-w-[120px] shadow-lg">
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
