import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const NumberCounter = () => {
  const [triggered, setTriggered] = useState(false);

  const data = [
    {
      number: 200,
      text: "Satisfied Clients",
      symbol: "+",
    },
    {
      number: 97,
      text: "Success Rate",
      symbol: "%",
    },
    {
      number: 40,
      text: "Revenue Growth",
      symbol: "M+",
    },
    {
      number: 156,
      text: "Projects Completed",
      symbol: "+",
    },
  ];

  const ScrollComponent = ScrollTrigger as any;
  return (
    <div className="bg-white  text-center py-20 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 sm:gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <ScrollComponent
              onEnter={() => setTriggered(true)}
              onExit={() => setTriggered(false)}
            >
              <div className="text-4xl font-bold text-primary">
                <CountUp end={triggered ? item.number : 0} duration={5} />
                {item.symbol}
              </div>
              <div className="text-lg text-gray-600">{item.text}</div>
            </ScrollComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;
