import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

const exchangeRates = {
  USD: { BDT: 121.61, EUR: 0.92 },
  BDT: { USD: 0.0082, EUR: 0.0076 },
  EUR: { USD: 1.09, BDT: 131.25 },
};

const Exchange = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency] = useState("USD");
  const [toCurrency, ] = useState("BDT");

  const convertedAmount = (amount * (exchangeRates[fromCurrency][toCurrency] || 1)).toFixed(2);

  const handleKeyPress = (value) => {
    if (value === "clear") {
      setAmount("0");
    } else if (value === "." && amount.includes(".")) {
      return;
    } else if (value === "del") {
      setAmount(amount.length > 1 ? amount.slice(0, -1) : "0");
    } else {
      setAmount(amount === "0" ? value : amount + value);
    }
  };

  return (  
    <div className="h-screen bg-black text-white p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <button className="text-gray-400">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold">Exchange</h1>
      </div>

      {/* Currency Details */}
      <div className="bg-gray-900 p-4 rounded-lg mt-4 space-y-3">
        {/* From */}
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
          <div>
            <p className="text-gray-400 text-sm">From</p>
            <h2 className="text-xl font-bold">{amount}</h2>
          </div>
          <button className="flex items-center space-x-2">
            <span>{fromCurrency}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>

        {/* To */}
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
          <div>
            <p className="text-gray-400 text-sm">To</p>
            <h2 className="text-xl font-bold">{convertedAmount}</h2>
          </div>
          <button className="flex items-center space-x-2">
            <span>{toCurrency}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Network Fees */}
        <p className="text-gray-400 text-sm text-right">Network Fees: <span className="text-white">2.59 USD</span></p>
      </div>

      {/* Exchange Rate */}
      <div className="mt-4">
        <p className="text-gray-400 text-sm">Rate</p>
        <p className="font-bold">1 {fromCurrency} = {exchangeRates[fromCurrency][toCurrency]} {toCurrency}</p>
        <p className="text-gray-400 text-xs mt-1">Feb 10, 12:20 PM UTC</p>
        <p className="text-green-400 text-xs">▲ +11.15% (1Y)</p>
      </div>

      {/* Number Pad */}
      <div className="grid grid-cols-3 gap-3 mt-6 flex-grow">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"].map((num) => (
          <button
            key={num}
            className="bg-gray-800 p-4 rounded-lg text-xl font-bold flex items-center justify-center"
            onClick={() => handleKeyPress(num)}
          >
            {num === "del" ? "⌫" : num}
          </button>
        ))}
      </div>

      {/* Exchange Button */}
      <button className="bg-green-500 text-black text-lg font-bold p-4 rounded-lg mt-4">
        Exchange Money
      </button>
    </div>
  );
};

export default Exchange;
