import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const NumberCounter = () => {
  const [triggered, setTriggered] = useState(false);

  const data = [
    {
      number: 20,
      text: "Clients",
      symbol: "+",
    },
    {
      number: 97,
      text: "Success Rate",
      symbol: "%",
    },
    {
      number: 0.5,
      text: "Revenue Growth",
      symbol: "M+",
    },
    {
      number: 30,
      text: "Projects Completed",
      symbol: "+",
    },
  ];

  const ScrollComponent = ScrollTrigger as any;
  return (
    <div className="bg-black  text-center py-20 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 sm:gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-10 rounded-2xl hover:shadow-white shadow-transparent shadow-md"
          >
            <ScrollComponent
              onEnter={() => setTriggered(true)}
              endTrigger=".grid"
            >
              <div className="text-4xl font-bold text-white">
                <CountUp
                  end={triggered ? item.number : 0}
                  decimals={1}
                  duration={3}
                />
                {item.symbol}
              </div>
              <div className="text-lg text-gray-400">{item.text}</div>
            </ScrollComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;
