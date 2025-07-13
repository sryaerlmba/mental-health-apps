import { useState } from "react";

export default function ChatWrapperSection({children} : {children : React.ReactNode}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`transition-all duratino-300 shadow-xl ${
        hovered ? "rotate-0" : "rotate-2"
      } bg-white rounded-2xl p-5 w-[350px] md:w-[500px]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

