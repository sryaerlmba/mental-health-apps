import Button from "../Button";
import { FaPaperPlane } from "react-icons/fa6";

export default function ChatBox() {
  return (
    <div className="border-t border-gray-300 px-5 py-4 flex items-center gap-3 bg-white">
      <textarea
        placeholder="Ketik pesanmu..."
        rows={2}
        className="w-full resize-none rounded-xl border border-gray-300 bg-gray-100 px-4 py-2 text-sm leading-relaxed outline-none overflow-auto transition-all duration-150"
      />
      <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
        <span className="text-lg">
          <FaPaperPlane />
        </span>
      </Button>
    </div>
  );
}
