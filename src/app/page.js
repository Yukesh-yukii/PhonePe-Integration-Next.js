"use client";

import React from "react";
import axios from "axios";

export default function Page() {
  const handleClick = async () => {
    try {
      const response = await axios.post("/api/payrequest", {
        merchantTransactionId: "MT7850590068188104",
        merchantUserId: "MUID123",
        mobileNumber: "9999999999",
        amount: 100,
      });

      window.open(
        response.data.data.instrumentResponse.redirectInfo.url,
        "_blank"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Pay Request
        </h1>
        <p className="text-gray-600 mb-8">
          Click the button below to initiate a secure payment.
        </p>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Start Payment
        </button>
      </div>
    </div>
  );
}
