import { useState } from "react";
import { alertConfirm, alertSuccess } from "@/utils/swal";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useEffect } from "react";

export function ProfileButton({ fullname }: { fullname: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleLogout = async () => {
    const confirm = await alertConfirm("Kamu yakin ingin keluar?");
    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
        return;
      }

      await alertSuccess(data.message);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition duration-300"
      >
        {fullname}
        <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="bg-white px-4 py-2 mt-2 absolute rounded-md w-full"
          ref={navRef}
        >
          <p className="text-red-700 cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
