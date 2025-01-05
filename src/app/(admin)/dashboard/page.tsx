"use client";

import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Table } from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";

const Dashboard = () => {
  const [loanData, setLoanData] = useState([
    {
      amount: "$5000",
      reason: "Business Expansion",
      lenderAddress: "5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS",
      duration: "6 months",
      interest: "5%",
      status: "pending",
    },
    {
      amount: "$1200",
      reason: "Medical Emergency",
      lenderAddress: "5Np1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS",
      duration: "3 months",
      interest: "4%",
      status: "active",
    },
    {
      amount: "$3000",
      reason: "Education Fund",
      lenderAddress: "5Lp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS",
      duration: "1 year",
      interest: "6%",
      status: "pending",
    },
    {
      amount: "$4500",
      reason: "Home Renovation",
      lenderAddress: "5Op1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS",
      duration: "9 months",
      interest: "4.5%",
      status: "pending",
    },
  ]);

  const [activeCount, setActiveCount] = useState(1); // 1 active loan initially
  const [pendingCount, setPendingCount] = useState(3); // 3 pending loans initially
  const [resolvedCount, setResolvedCount] = useState(1); // 1 resolved loan initially

  const handleApprove = (index: number) => {
    const updatedLoans = [...loanData];
    const loan = updatedLoans[index];

    if (loan.status === "pending") {
      loan.status = "active";
      setLoanData(updatedLoans);

      setActiveCount(activeCount + 1);
      setPendingCount(pendingCount - 1);
    }
  };

  const handleDisapprove = (index: number) => {
    const updatedLoans = loanData.filter((_, i) => i !== index);
    setLoanData(updatedLoans);

    const removedLoan = loanData[index];
    if (removedLoan.status === "pending") {
      setPendingCount(pendingCount - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <h2 className="text-4xl font-semibold text-gray-900 mt-8 font-merriweather-black ml-24">
        Admin <span style={{ borderBottom: "2px dotted purple" }}>Dashboard</span>
      </h2>

      <main className="py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-merriweather-black">
          Loans Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg">
            <h3 className="text-lg font-medium text-purple-600">Active</h3>
            <p className="text-gray-500 mt-2">Total active loans</p>
            <div className="mt-4 text-purple-600 text-2xl">{activeCount}</div>
            <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
              View All
            </Button>
          </Card>

          <Card className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg">
            <h3 className="text-lg font-medium text-purple-600">Pending</h3>
            <p className="text-gray-500 mt-2">Loans awaiting approval</p>
            <div className="mt-4 text-purple-600 text-2xl">{pendingCount}</div>
            <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
              View All
            </Button>
          </Card>

          <Card className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg">
            <h3 className="text-lg font-medium text-purple-600">Resolved</h3>
            <p className="text-gray-500 mt-2">Loans fully paid off</p>
            <div className="mt-4 text-purple-600 text-2xl">{resolvedCount}</div>
            <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
              View All
            </Button>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-merriweather-black">
            Approve Loans
          </h2>

          <Table className="min-w-full table-auto bg-white border border-gray-200 rounded-md text-md">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-2 text-left text-purple-600">Amount</th>
                <th className="px-4 py-2 text-left text-purple-600">Reason</th>
                <th className="px-4 py-2 text-left text-purple-600">Lender Address</th>
                <th className="px-4 py-2 text-left text-purple-600">Duration</th>
                <th className="px-4 py-2 text-left text-purple-600">Interest</th>
                <th className="px-4 py-2 text-left text-purple-600">Status</th>
                <th className="px-4 py-2 text-left text-purple-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index} className="hover:bg-purple-50">
                  <td className="px-4 py-2">{loan.amount}</td>
                  <td className="px-4 py-2">{loan.reason}</td>
                  <td className="px-4 py-2 text-purple-600 truncate">
                    {loan.lenderAddress}
                  </td>
                  <td className="px-4 py-2">{loan.duration}</td>
                  <td className="px-4 py-2">{loan.interest}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-sm font-semibold ${
                        loan.status === "pending"
                          ? "text-yellow-500"
                          : loan.status === "active"
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {loan.status === "pending" && (
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => handleDisapprove(index)}
                        >
                          Disapprove
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
