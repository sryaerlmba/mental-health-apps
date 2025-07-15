import AiChatBubble from "../chat/AiChatBubble";
import UserChatBubble from "../chat/UserChatBubble";
import BubbleLoading from "../chat/BubbleLoading";

export default function ChatBody() {
  return (
    <div className="max-h-[450px] overflow-y-auto px-5 py-5 no-scrollbar">
      {/* ai 1 */}
      <AiChatBubble>
        <p>Hai! Aku di sini untuk mendengarkan. Gimana kabarmu hari ini? 😊</p>
      </AiChatBubble>

      {/* ai user */}
      <UserChatBubble>
        <p> Lagi stres nih, deadline tugas banyak banget 😰</p>
      </UserChatBubble>

      {/* ai 2 */}
      <AiChatBubble>
        <p>
          Aku paham rasanya overwhelmed gitu. Mau coba teknik breathing exercise
          bareng? 🌱
        </p>
      </AiChatBubble>

      {/* ai user */}
      <UserChatBubble>
        <p>Boleeh kita coba bareng bareng!</p>
      </UserChatBubble>

      {/* Typing bubble */}
      <BubbleLoading />
    </div>
  );
}
