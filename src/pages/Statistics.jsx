import { useState } from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", income: 10000 },
  { month: "Feb", income: 15000 },
  { month: "Mar", income: 12000 },
  { month: "Apr", income: 25000 },
  { month: "May", income: 18000 },
  { month: "Jun", income: 20000 },
];

const payments = [
  { id: 1, name: "Dribbble", price: "$7.99/m" },
  { id: 2, name: "Figma", price: "$9.99/m" },
  { id: 3, name: "WeChat", price: "$6.89/m" },
];

const Statistics = () => {
  const [activeTab, setActiveTab] = useState("income");

  return (
    <div className="h-screen bg-black text-white p-5 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="text-gray-400">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold">Statistics</h1>
        <button className="text-gray-400">
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Toggle Income / Spending */}
      <div className="flex bg-gray-900 p-1 rounded-lg mt-4">
        <button
          className={`flex-1 py-2 text-center rounded-lg ${
            activeTab === "income" ? "bg-green-500 text-black font-bold" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("income")}
        >
          Income
        </button>
        <button
          className={`flex-1 py-2 text-center rounded-lg ${
            activeTab === "spending" ? "bg-green-500 text-black font-bold" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("spending")}
        >
          Spending
        </button>
      </div>

      {/* Total Income */}
      <div className="mt-5">
        <p className="text-gray-400 text-sm">Total {activeTab === "income" ? "Income" : "Spending"}</p>
        <h2 className="text-3xl font-bold">$67,545.23</h2>
      </div>

      {/* Time Filter */}
      <div className="flex space-x-2 mt-3">
        {["D", "W", "M", "Y"].map((time) => (
          <button
            key={time}
            className={`py-1 px-3 rounded-lg text-sm ${
              time === "Y" ? "bg-green-500 text-black font-bold" : "text-gray-400"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-5 h-48 bg-gray-900 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
            <Bar dataKey="income" fill="#32CD32" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Scheduled Payments */}
      <div className="mt-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Scheduled Payments</h2>
          <button className="text-gray-400 text-sm">See all</button>
        </div>

        <div className="flex space-x-3 mt-3">
          {payments.map((p) => (
            <div key={p.id} className="bg-gray-900 p-4 rounded-lg flex-1 text-center">
              <p className="text-white">{p.name}</p>
              <p className="text-gray-400 text-sm">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
