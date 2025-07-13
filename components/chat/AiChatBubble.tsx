export default function AiChatBubble({children} : {children: React.ReactNode}) {
  return (
    <div className="bg-pink-100 text-sm text-gray-800 w-fit max-w-[80%] p-3 rounded-xl mb-5">
      {children}
    </div>
  );
}
