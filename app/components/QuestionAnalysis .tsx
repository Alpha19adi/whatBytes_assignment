import React from 'react';

const QuestionAnalysis = ({score =12, total = 15 }) => {
  // Calculate percentage for the circle progress
  const percentage = (score / total) * 100;
  const circumference = 2 * Math.PI * 40; // radius is 40
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-700">Question Analysis</h2>
        <span className="text-blue-600 font-medium">{score}/{total}</span>
      </div>
      
      <p className="text-gray-600 mb-8">
        You scored {score} question correct out of {total}. However it still needs some improvements
      </p>

      <div className="relative w-48 h-48 mx-auto">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className="text-blue-500"
            strokeWidth="10"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: strokeDasharray,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        
        {/* Target icon in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;