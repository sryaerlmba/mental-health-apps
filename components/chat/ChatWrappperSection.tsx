import { useState } from "react";

export default function ChatWrapperSection({children} : {children : React.ReactNode}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`transition-all duratino-300 shadow-xl ${
        hovered ? "lg:rotate-0" : "lg:rotate-2"
      } bg-white rounded-2xl p-5 w-full`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

