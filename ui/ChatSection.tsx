import UserChatBubble from "@/components/chat/UserChatBubble";
import AiChatBubble from "@/components/chat/AiChatBubble";
import BubbleLoading from "@/components/chat/BubbleLoading";
import Button from "@/components/Button";
import { FaPaperPlane, FaMessage, FaCircle } from "react-icons/fa6";

export default function ChatSection() {
  return (
    <section className="mt-20 bg-pink-50 md:py-20 md:px-5">
      <div className="mx-auto container xl:py-20 xl:px-20">
        <div className="grid md:grid-cols-2 gap-5 items-center p-10 md:p-0">
          {/* kiri */}
          <div>
            <div>
              <h1 className="font-semibold md:text-5xl text-3xl ">
                Chat dengan AI yang Memahami Perasaan mu
              </h1>
              <p className="mt-5 text-gray-600 text-lg">
                nama apps dirancang khusus untuk memberikan dukungan emosional
                yang empatik. Ceritakan apapun yang kamu rasakan, tanpa takut
                dihakimi.
              </p>
            </div>

            <div className="mt-5">
              <ul className="list-none">
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-purple-300 inline text-sm" />
                  <p>Respons yang personal dan empatik</p>
                </li>
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-pink-300 inline text-sm" />
                  <p>Tersedia 24/7 kapanpun kamu butuh</p>
                </li>
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-green-300 inline text-sm" />
                  <p>Data conversation aman dan privat</p>
                </li>
              </ul>
            </div>
          </div>

          {/* kanan */}
          <div className="ml-auto w-full">
            {/* mockup phone */}
            <div className="w-full md:w-[350px] lg:w-[400px] h-fit bg-white border-8 border-black rounded-[2rem] shadow-xl overflow-hidden relative scrollbar-none">
              <div className="flex justify-between px-4 py-2 text-xs bg-gray-100">
                <p>08:00</p>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 bg-black rounded-sm" />{" "}
                  {/* dummy signal */}
                  <div className="w-4 h-2 bg-black rounded-sm" />{" "}
                  {/* dummy wifi */}
                  <div className="w-6 h-3 bg-green-400 rounded-[0.2rem]" />{" "}
                  {/* dummy battery */}
                </div>
              </div>

              {/* chat heaer */}
              <div className="py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg">
                <div className="flex items-center gap-3 ms-5">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <FaMessage className="text-purple-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xl">
                      nama apps
                    </p>
                    <p className="text-sm font-light text-white/70">Online</p>
                  </div>
                </div>
              </div>

              {/* chat body */}
              <div className="max-h-[450px] overflow-y-auto px-5 py-5 no-scrollbar">
                {/* ai 1 */}
                <AiChatBubble>
                  <p>
                    Hai! Aku di sini untuk mendengarkan. Gimana kabarmu hari
                    ini? 😊
                  </p>
                </AiChatBubble>

                {/* ai user */}
                <UserChatBubble>
                  <p> Lagi stres nih, deadline tugas banyak banget 😰</p>
                </UserChatBubble>

                {/* ai 2 */}
                <AiChatBubble>
                  <p>
                    Aku paham rasanya overwhelmed gitu. Mau coba teknik
                    breathing exercise bareng? 🌱
                  </p>
                </AiChatBubble>

                {/* ai user */}
                <UserChatBubble>
                  <p>Boleeh kita coba bareng bareng!</p>
                </UserChatBubble>

                {/* Typing bubble */}
                <BubbleLoading />
              </div>

              {/* chat box */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
