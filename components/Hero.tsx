"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Button from "@/components/Button";
import AiChatBubble from "./chat/AiChatBubble";
import BubbleLoading from "./chat/BubbleLoading";
import ChatHeader from "./chat/ChatHeader";
import UserChatBubble from "./chat/UserChatBubble";
import ChatWrapperSection from "./chat/ChatWrappperSection";
import { Ihero } from "@/type/heroType";


export default function Hero({
  title,
  highlight,
  description,
  stats,
  buttonLabel = "Start Your Journey",
}: Ihero) {
  const dotColors = ["bg-green-400", "bg-purple-400", "bg-blue-400"];

  return (
    <section className="lg:h-dvh">
      <div className="w-full h-full bg-purple-50 overflow-x-hidden p-10 md:px-10 lg:p-0">
        <div className="mt-40 mb-25 mx-auto container xl:py-5 xl:px-20 lg:grid lg:grid-cols-2 items-center gap-5 flex flex-col ">
          {/* Left */}
          <div>
            <h1 className="text-5xl font-semibold text-gray-800 leading-snug">
              {title} <span className="text-purple-500">{highlight}</span>
              <FaHeart className="text-purple-500 inline ms-2" />
            </h1>
            <p className="text-lg mt-8 text-gray-500">{description}</p>
            <Button className="mt-8 py-3 px-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
              {buttonLabel} <FaRegHeart className="inline ms-2" />
            </Button>

            {/* Stats (Fitur Ringkas) */}

            <div className="mt-8 flex gap-6 flex-wrap items-center text-sm text-gray-600">
              {stats.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      dotColors[index % dotColors.length]
                    }`}
                  />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-end mt-5 w-full md:p-0">
            <ChatWrapperSection>
              {/* Header */}
              <ChatHeader />

              {/* ai 1 */}
              <AiChatBubble>
                <p>
                  Hai! Aku di sini untuk mendengarkan. Gimana kabarmu hari ini?
                  😊
                </p>
              </AiChatBubble>

              {/* ai user */}
              <UserChatBubble>
                <p> Lagi stres nih, deadline tugas banyak banget 😰</p>
              </UserChatBubble>

              {/* ai 2 */}
              <AiChatBubble>
                <p>
                  Aku paham rasanya overwhelmed gitu. Mau coba teknik breathing
                  exercise bareng? 🌱
                </p>
              </AiChatBubble>

              {/* ai user */}
              <UserChatBubble>
                <p>Boleeh kita coba bareng bareng!</p>
              </UserChatBubble>

              {/* Typing bubble */}
              <BubbleLoading />
            </ChatWrapperSection>
          </div>
        </div>
      </div>
    </section>
  );
}
