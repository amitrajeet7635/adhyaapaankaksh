import React from "react";
import { Clipboard } from "lucide-react";

const Assignments = () => {
  return (
    <div className="bg-[#fffff7] font-['Inter'] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Assignments
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Stay tuned! Your assignments will appear here when they are available.
        </p>

        {/* Empty State */}
        <div className="bg-[#fffff7] shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Clipboard size={64} className="text-gray-400 mb-6" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            No Assignments Available
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            You don't have any assignments right now. Check back later for updates!
          </p>

          {/* Future Button (Disabled for now) */}
          <button
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg cursor-not-allowed"
            disabled
          >
            Check for Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
