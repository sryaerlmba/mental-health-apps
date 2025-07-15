import ChatBody from "./ChatBody";
import ChatBox from "./ChatBox";
import PhoneBar from "./PhoneBar";

export default function PhoneMockup() {
  return (
    <div className="w-full md:w-[350px] lg:w-[400px] h-fit bg-white border-8 border-black rounded-[2rem] shadow-xl overflow-hidden relative scrollbar-none">
      <PhoneBar />
      <ChatBody />
      <ChatBox />
    </div>
  );
}
