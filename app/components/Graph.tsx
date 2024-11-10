import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ComparisonGraph = ({ userPercentile = 40, averagePercentile = 72 }) => {
  // Generate data points for the bell curve
  const generateBellCurveData = () => {
    const data = [];
    for (let x = 0; x <= 100; x += 5) {
      // Creating a rough approximation of a bell curve
      let y = Math.exp(-Math.pow(x - 50, 2) / 500);
      data.push({
        percentile: x,
        value: y,
        highlight: x === userPercentile
      });
    }
    return data;
  };

  const data = generateBellCurveData();

  // Custom dot component for the highlighted point
  const CustomDot = (props: { cx: any; cy: any; payload: any; }) => {
    const { cx, cy, payload } = props;
    if (payload.highlight) {
      return (
        <circle 
          cx={cx} 
          cy={cy} 
          r={6} 
          fill="#6366f1" 
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={3} 
        fill="#a5b4fc"
      />
    );
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <p className="text-gray-600">
          You scored {userPercentile}% percentile which is lower than the 
          average percentile {averagePercentile}% of all the engineers who took this assessment
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <XAxis 
                dataKey="percentile" 
                type="number" 
                domain={[0, 100]}
                tickCount={5}
              />
              <YAxis hide />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="text-sm">
                          Percentile: {payload[0].payload.percentile}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#818cf8"
                strokeWidth={2}
                dot={CustomDot}
                activeDot={{ r: 8 }}
                isAnimationActive={true}
              />
              {/* Vertical line for user's percentile */}
              {userPercentile && (
                <line
                  x1={userPercentile}
                  y1={0}
                  x2={userPercentile}
                  y2="100%"
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  strokeWidth={1}
                />
              )}
            </LineChart>
          </ResponsiveContainer>

          {/* Stats box */}
          <div className="absolute top-4 right-4 bg-white p-3 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">90</span>
              <span className="text-indigo-500">numberOfStudent : 4</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonGraph;