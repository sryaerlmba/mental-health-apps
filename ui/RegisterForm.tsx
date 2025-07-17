import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/Button";
import { useState } from "react";
import { alertSuccess } from "@/utils/swal";
import { useRouter } from "next/navigation";
import { AlertError } from "@/components/Alert";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function RegisterForm() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [data, setData] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
  }>({});

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        setData(errorData);
        return;
      }

      const result = await res.json();
      setData(result);
      await alertSuccess(result.message);
      router.push("/login");
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="mt-2 w-full" onSubmit={handleSubmit}>
        <div className="relative">
          <label className="text-sm text-gray-700">Nama Lengkap</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="masukkan nama lengkap kamu"
              className="w-full py-4 outline-none text-sm pl-2    "
              onChange={handleChange}
              name="fullname"
            />
          </div>
        </div>
        {data?.errors?.fullname && <AlertError msg={data?.errors?.fullname} />}
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Email</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="text"
              placeholder="masukkan email kamu"
              className="w-full py-4 outline-none text-sm pl-2    "
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        {data?.errors?.email && <AlertError msg={data?.errors?.email} />}
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Password</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="buat password yang kuat"
              className="w-full py-4 outline-none text-sm pl-2    "
              onChange={handleChange}
              name="password"
            />
            {showPass ? (
              <FaEyeSlash
                className="text-gray-400 cursor-pointer text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FaEye
                className="text-gray-400 cursor-pointer text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
        </div>
        {data?.errors?.password && <AlertError msg={data?.errors?.password} />}

        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Konfirmasi Password</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type={showPass2 ? "text" : "password"}
              placeholder="ulangi password"
              className="w-full py-4 outline-none text-sm pl-2    "
              onChange={handleChange}
              name="confirmPassword"
            />
            {showPass2 ? (
              <FaEyeSlash
                className="text-gray-400 cursor-pointer text-2xl"
                onClick={() => setShowPass2(!showPass2)}
              />
            ) : (
              <FaEye
                className="text-gray-400 cursor-pointer text-2xl"
                onClick={() => setShowPass2(!showPass2)}
              />
            )}
          </div>
        </div>
        {data?.errors?.confirmPassword && (
          <AlertError msg={data?.errors?.confirmPassword} />
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="mt-5 w-full py-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 shadow-md hover:opacity-90 transition duration-300 flex justify-center items-center gap-2"
        >
          {isLoading ? <LoadingSpinner /> : "Daftar Sekarang"}
        </Button>
      </form>
    </>
  );
}
