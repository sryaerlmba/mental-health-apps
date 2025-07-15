export default function PhoneBar() {
  return (
    <div className="flex justify-between px-4 py-2 text-xs bg-gray-100">
      <p>08:00</p>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-black rounded-sm" /> {/* dummy signal */}
        <div className="w-4 h-2 bg-black rounded-sm" /> {/* dummy wifi */}
        <div className="w-6 h-3 bg-green-400 rounded-[0.2rem]" />{" "}
        {/* dummy battery */}
      </div>
    </div>
  );
}
