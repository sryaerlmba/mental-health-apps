import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/Button";
import { useState } from "react";

export default function RegisterForm() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  return (
    <>
      {/* Form */}
      <form className="mt-2 w-full">
        <div className="relative">
          <label className="text-sm text-gray-700">Nama Lengkap</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="masukkan nama lengkap kamu"
              className="w-full py-4 outline-none text-sm"
            />
          </div>
        </div>
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
              placeholder="buat password yang kuat"
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
        <div className="relative mt-3">
          <label className="text-sm text-gray-700">Konfirmasi Password</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type={showPass2 ? "text" : "password"}
              placeholder="ulangi password"
              className="w-full py-4 outline-none text-sm"
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

        <Button className="mt-5 w-full py-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 shadow-md hover:opacity-90 transition duration-300">
          Daftar Sekarang
        </Button>
      </form>
    </>
  );
}
