import BottomNav from "../components/BottomNav";
import { Wallet, Scan, Send, Plus, Users } from "lucide-react";

const transactions = [
  { id: 1, name: "Henry James", amount: "+$367.00", type: "income", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Electricity Bill", amount: "-$50.00", type: "expense", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Restaurant", amount: "-$90.00", type: "expense", avatar: "https://i.pravatar.cc/40?img=3" },
];

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-950 text-white px-6 py-5 flex flex-col space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="https://i.pravatar.cc/50" alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-green-500" />
          <div>
            <p className="text-gray-300 text-sm">Hello,</p>
            <h1 className="text-xl font-semibold">Sajibur 👋</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-green-500 text-black rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs">
            2
          </div>
          <Users size={28} className="text-gray-300" />
        </div>
      </div>

      {/* Balance */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-300">My Balance</p>
            <h2 className="text-4xl font-bold">$24,600.00</h2>
            <p className="text-green-400 text-sm mt-1">+22.7%</p>
          </div>
          <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-700 hover:bg-gray-700">
            Add Card +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3 mt-5">
          {[{ icon: Wallet, label: "Withdraw" }, { icon: Plus, label: "Deposit" }, { icon: Send, label: "Pay" }, { icon: Scan, label: "Scan" }].map((btn, index) => (
            <button key={index} className="bg-gray-800 p-3 rounded-lg flex flex-col items-center hover:bg-gray-700">
              <btn.icon size={28} className="text-green-400" />
              <span className="text-sm mt-1 text-gray-300">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left to Spend */}
      <div>
        <div className="flex justify-between text-gray-300">
          <span>Left to spend</span>
          <span>Monthly budget</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-xl">$738</span>
          <span className="font-bold text-xl">$22,550.00</span>
        </div>
        <div className="w-full bg-gray-800 h-3 rounded-full mt-2 relative">
          <div className="bg-green-500 h-3 rounded-full w-1/4 transition-all duration-300 shadow-md"></div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-green-400 text-sm hover:underline">See all</button>
        </div>
        <div className="flex space-x-3 mt-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <img key={index} src={`https://i.pravatar.cc/40?img=${index}`} className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-green-400" alt="Avatar" />
          ))}
        </div>
      </div>

      {/* Transaction Filters */}
      <div className="flex mt-4 space-x-2">
        {["All", "Sent", "Request", "Transfer", "Remit"].map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm ${index === 0 ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="bg-gray-900 p-5 rounded-xl space-y-3 flex-grow overflow-auto shadow-md">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src={tx.avatar} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-700" />
              <div>
                <p className="font-semibold">{tx.name}</p>
                <p className="text-gray-400 text-sm">10:30 AM</p>
              </div>
            </div>
            <span className={tx.type === "income" ? "text-green-400" : "text-red-400"}>{tx.amount}</span>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Dashboard;
