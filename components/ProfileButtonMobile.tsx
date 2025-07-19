import { handleLogoutFlow } from "@/lib/handleLogout";
import { useRouter } from "next/navigation";

export default function ProfileButtonMobile({
  fullname,
}: {
  fullname: string;
}) {
  const router = useRouter();
  const handleLogout = async () => {
    await handleLogoutFlow(router.push);
  };

  return (
    <div>
      <button className="nline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition duration-300">
        {fullname}
      </button>

      <div>
        <p
          className="cursor-pointer text-red-500 mt-5 px-4"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </div>
  );
}
