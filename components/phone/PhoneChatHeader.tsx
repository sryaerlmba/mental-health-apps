import { FaMessage } from "react-icons/fa6";

export default function PhoneChatHeader() {
  return (
    <div className="py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg">
      <div className="flex items-center gap-3 ms-5">
        <div className="bg-white p-2 rounded-full shadow-md">
          <FaMessage className="text-purple-400 text-lg" />
        </div>
        <div>
          <p className="text-white font-semibold text-xl">nama apps</p>
          <p className="text-sm font-light text-white/70">Online</p>
        </div>
      </div>
    </div>
  );
}
