import BottomNav from "../components/BottomNav";
import { Wallet, Scan, Send, Plus, Users } from "lucide-react";

const transactions = [
  { id: 1, name: "Henry James", amount: "+$367.00", type: "income", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Electricity Bill", amount: "-$50.00", type: "expense", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Restaurant", amount: "-$90.00", type: "expense", avatar: "https://i.pravatar.cc/40?img=3" },
];

const Dashboard = () => {
  return (
    <div className="h-screen bg-black text-white p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="https://i.pravatar.cc/50" alt="User Avatar" className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-gray-400 text-sm">Hello,</p>
            <h1 className="text-xl font-semibold">Sajibur 👋</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-green-500 text-black rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs">
            2
          </div>
          <Users size={28} className="text-gray-400" />
        </div>
      </div>

      {/* Balance */}
      <div className="bg-gray-900 p-6 rounded-lg mt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400">My Balance</p>
            <h2 className="text-3xl font-bold">$24,600.00</h2>
            <p className="text-green-400 text-sm mt-1">+22.7%</p>
          </div>
          <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm">Add Card +</button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex flex-col items-center">
            <Wallet size={28} className="text-gray-400" />
            <span className="text-sm mt-1">Withdraw</span>
          </button>
          <button className="flex flex-col items-center">
            <Plus size={28} className="text-gray-400" />
            <span className="text-sm mt-1">Deposit</span>
          </button>
          <button className="flex flex-col items-center">
            <Send size={28} className="text-gray-400" />
            <span className="text-sm mt-1">Pay</span>
          </button>
          <button className="flex flex-col items-center">
            <Scan size={28} className="text-gray-400" />
            <span className="text-sm mt-1">Scan</span>
          </button>
        </div>
      </div>

      {/* Left to Spend */}
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Left to spend</span>
          <span className="text-gray-400">Monthly budget</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">$738</span>
          <span className="font-bold">$22,550.00</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
          <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-green-400 text-sm">See all</button>
        </div>
        <div className="flex space-x-3 mt-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <img key={index} src={`https://i.pravatar.cc/40?img=${index}`} className="w-10 h-10 rounded-full" alt="Avatar" />
          ))}
        </div>
      </div>

      {/* Transaction Filters */}
      <div className="flex mt-4 space-x-2">
        {["All", "Sent", "Request", "Transfer", "Remit"].map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm ${index === 0 ? "bg-green-500 text-black" : "bg-gray-800 text-gray-400"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="bg-gray-900 p-4 rounded-lg mt-4 space-y-3 flex-grow overflow-auto">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={tx.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
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
