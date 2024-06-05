"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useRouter } from "next/navigation";
export function TypewriterEffectSmoothComponent() {
  const router = useRouter();

  const words = [
    {
      text: "Build",
    },
    {
      text: "Your",
    },
    {
      text: "Success",
    },
    {
      text: "Story",
    },
    {
      text: "with",
    },
    {
      text: "Right Hand Venture.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const navigateToContact = () => {
    router.push("/contact");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <p className="text-white font-semibold text-xs sm:text-base  ">
        The road to success starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          onClick={navigateToContact}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm hover:bg-black hover:text-white hover:border-white"
        >
          Contact us!
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */
}
