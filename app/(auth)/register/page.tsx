"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

import Button from "@/components/Button";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Bubbles (ornament bg) */}
      <div className="absolute w-20 h-20 bg-purple-100 rounded-full top-10 left-10 opacity-30" />
      <div className="absolute w-16 h-16 bg-pink-100 rounded-full top-16 right-10 opacity-30" />
      <div className="absolute w-12 h-12 bg-blue-100 rounded-full bottom-10 left-20 opacity-30" />

      <div className="flex flex-col md:w-lg">
        <div className="">
          <h1 className="text-center font-bold text-2xl text-purple-600 flex items-center justify-center gap-2">
            <span>💜</span> MindPal
          </h1>
          <p className="text-center mt-1 text-gray-600">
            Bergabung dengan MindPal! ✨
          </p>
          <p className="text-center text-sm text-gray-500">
            Mulai perjalanan healing dan self-care bersamaku
          </p>
        </div>
        <div className="w-full bg-white rounded-2xl shadow-xl p-8 z-10 mt-10">
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
              <label className="text-sm text-gray-700">
                Konfirmasi Password
              </label>
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

          <div className="mt-4 text-center">
            <p>
              Sudah punya akun?
              <Link href="/login">
                <span className="text-purple-600"> Masuk Di sini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
