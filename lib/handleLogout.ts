import { alertConfirm } from "@/utils/swal";
import { alertSuccess } from "@/utils/swal";

// utils/logoutHandler.ts
export async function handleLogoutFlow(callback: (url: string) => void) {
  const confirm = await alertConfirm("Kamu yakin ingin keluar?");
  if (!confirm.isConfirmed) return;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    await alertSuccess(data.message);
    callback("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
}
