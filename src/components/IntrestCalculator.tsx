import React, { useState } from "react";


export function EmiCalculator({ isCompact }: { isCompact?: boolean }) {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEmi = () => {
    const monthlyRate = rate / 100 / 12; // Monthly interest rate
    const totalMonths = time * 12; // Convert years to months

    if (monthlyRate === 0) {
      setEmi(principal / totalMonths); // For 0% interest, EMI is just principal/number of months
    } else {
      const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      setEmi(emiValue);
    }
  };

  return (
    <div>
      <div className={`space-y-2 ${isCompact ? "text-sm" : "text-base"}`}>
        <div>
          <label className="block text-gray-700 mb-1 text-xl font-merriweather-black font-bold">

            EMI Calculator
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg"
            placeholder="Enter principal"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1 text-lg">

            Rate of Interest (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg"

            placeholder="Enter rate of interest"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1 text-lg">
            Time (Years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg"

            placeholder="Enter loan tenure in years"
          />
        </div>
        <button
          onClick={calculateEmi}
          className="w-full bg-blue-600 text-white font-medium py-2 text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Calculate EMI
        </button>
        {emi !== null && (
          <div className="mt-2 text-center font-semibold text-xl">
            EMI:{" "}
            <span className="text-blue-600">
              {emi.toFixed(2)}

            </span>
          </div>
        )}
      </div>
    </div>
  );
}
