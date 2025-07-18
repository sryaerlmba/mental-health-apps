import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/Button";
import { useState } from "react";
import Link from "next/link";
import { useLoadingStore } from "@/stores/loadingStore";
import { useRouter } from "next/navigation";
import { alertError, alertSuccess } from "@/utils/swal";
import { AlertError } from "@/components/Alert";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const { isLoading, setIsLoading } = useLoadingStore();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState<{
    success?: boolean;
    message?: string;
    error?: Record<string, string[]>;
    data?: Record<string, string>;
  }>({});

  // router
  const router = useRouter();

  // handle change
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setData(data);

        if (res.status === 401 || res.status === 500) {
          await alertError(data.message || "Gagal login.");
        }

        return;
      }

      setData(data);
      await alertSuccess(data.message);
      router.push("/");
      console.log(data);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Form */}
      <form className="mt-2 w-full" onSubmit={handleSubmit}>
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Email</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="text"
              placeholder="masukkan email kamu"
              className="w-full py-4 outline-none text-sm pl-2"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        {data?.error?.email && <AlertError msg={data?.error?.email} />}

        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Password</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="masukan password kamu"
              className="w-full py-4 outline-none text-sm pl-2"
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
        {data?.error?.password && <AlertError msg={data?.error?.password} />}

        <div className="mt-5">
          <p className="text-purple-600 text-right">Lupa Password?</p>
        </div>

        <Button className="mt-5 w-full py-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 shadow-md hover:opacity-90 transition duration-300 flex justify-center items-center gap-2">
          {isLoading ? <LoadingSpinner /> : "Login"}
        </Button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Belum punya akun?
            <Link href="/register">
              <span className="text-purple-600"> Daftar sekarang</span>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
