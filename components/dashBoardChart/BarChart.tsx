"use client";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

export default function BarChartComponent({ categoryCount }: any) {
  const data = categoryCount.map((item: any) => {
    return {
      name: item._id,
      value: item.count,
    };
  });

  return (
    <ResponsiveContainer width={"100%"} height={380}>
      <BarChart data={data}>
        <XAxis
          tickLine={false}
          axisLine={false}
          stroke="#000"
          fontSize={12}
          dataKey={"name"}
        />
        <YAxis tickLine={false} axisLine={false} stroke="#000" fontSize={12} />
        <Bar dataKey={"value"} fill="#000" radius={[7, 7, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
