"use client";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Label,
  Tooltip,
} from "recharts";

export default function BarChartComponent({ categoryCount }: any) {
  const data = categoryCount.map((item: any) => {
    return {
      name: item._id,
      value: item.count,
    };
  });

  return (
    <ResponsiveContainer width={"100%"} height={420}>
      <BarChart data={data}>
        <XAxis
          tickLine={false}
          axisLine={false}
          stroke="#000"
          fontSize={12}
          dataKey={"name"}
        >
          <Label
            value="Categories"
            offset={-4}
            stroke="#000000"
            position="insideBottom"
          />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} stroke="#000" fontSize={12}>
          <Label
            value="Count"
            angle={-90}
            stroke="#000000"
            position="insideLeft"
          />
        </YAxis>
        <Tooltip />
        <Bar dataKey={"value"} fill="#000" radius={[7, 7, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
