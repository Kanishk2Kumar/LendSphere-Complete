import React, { useState } from "react";

export function InterestCalculator({ isCompact }: { isCompact?: boolean }) {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [interest, setInterest] = useState<number | null>(null);

  const calculateInterest = () => {
    const calculatedInterest = (principal * rate * time) / 100;
    setInterest(calculatedInterest);
  };

  return (
    <div>
      <div className={`space-y-2 ${isCompact ? "text-sm" : "text-base"}`}>
        <div>
          <label className="block text-gray-700 mb-1 text-xl font-merriweather-black font-bold">
            Principal
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
            Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg"
            placeholder="Enter rate"
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
            placeholder="Enter time"
          />
        </div>
        <button
          onClick={calculateInterest}
          className="w-full bg-blue-600 text-white font-medium py-2 text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Calculate
        </button>
        {interest !== null && (
          <div className="mt-2 text-center font-semibold text-xl">
            Interest:{" "}
            <span className="text-blue-600">
              {interest.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
