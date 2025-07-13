export default function UserChatBubble({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-sm text-gray-800 w-fit max-w-[80%] p-3 rounded-xl mb-5 ml-auto border border-gray-300">
      {children}
    </div>
  );
}
