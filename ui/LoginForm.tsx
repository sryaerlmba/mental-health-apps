import { FaArrowRight } from "react-icons/fa";

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/Button";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      {/* Form */}
      <form className="mt-2 w-full">
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Email</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="text"
              placeholder="masukkan email kamu"
              className="w-full py-4 outline-none text-sm"
            />
          </div>
        </div>
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Password</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="masukan password kamu"
              className="w-full py-4 outline-none text-sm"
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

        <div className="mt-5">
            <p className="text-purple-600 text-right">Lupa Password?</p>
        </div>

        <Button className="mt-5 w-full py-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 shadow-md hover:opacity-90 transition duration-300">
          Masuk
        </Button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Belum punya akun?
            <Link href="/register">
              <span className="text-purple-600"> Daftar sekarang</span>
            </Link>
          </p>
        </div>

        {/* retun ke home */}
        <hr className="border-gray-300 mt-5" />

        <div className="mt-3">
          <Link href="/">
            <p className="text-center text-gray-600 hover:underline cursor-pointer transition-all duration-300 ease-in-out">
              Kembali ke beranda{" "}
              <FaArrowRight className="inline text-gray-600" />
            </p>
          </Link>
        </div>
      </form>
    </>
  );
}
