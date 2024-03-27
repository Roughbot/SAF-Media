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
          stroke="#E3E5E7"
          fontSize={12}
          dataKey={"name"}
        >
          <Label
            value="Categories"
            offset={-4}
            stroke="#E3E5E7"
            position="insideBottom"
          />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} stroke="#E3E5E7" fontSize={12}>
          <Label
            value="Count"
            angle={-90}
            stroke="#E3E5E7"
            position="insideLeft"
          />
        </YAxis>
        <Tooltip
          isAnimationActive={true}
          animationEasing="ease-in-out"
          animationDuration={300}
          cursor={{ fill: "#252728" }}
          contentStyle={{
            background: "#fff",
            border: "1px solid #E3E5E7",
            borderRadius: "5px",
          }}
          itemStyle={{ color: "#000" }}
        />
        <Bar dataKey={"value"} fill="#CDD0D5" radius={[7, 7, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
