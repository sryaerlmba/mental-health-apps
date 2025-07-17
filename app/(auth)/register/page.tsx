"use client";

import AuthHeader from "@/components/AuthHeader";
import RegisterForm from "@/ui/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen py-10 px-5 md:p-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Bubbles (ornament bg) */}
      <div className="absolute w-20 h-20 bg-purple-100 rounded-full top-10 left-10 opacity-30" />
      <div className="absolute w-16 h-16 bg-pink-100 rounded-full top-16 right-10 opacity-30" />
      <div className="absolute w-12 h-12 bg-blue-100 rounded-full bottom-10 left-20 opacity-30" />

      <div className="flex flex-col md:w-lg">
        {/* head */}
        <div className="">
          <AuthHeader
            subtitle="Bergabung dengan Care Yuk! ✨"
            tagline="Mulai perjalanan healing dan self-care bersamaku"
          />
        </div>

        {/* form */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-8 z-10 mt-10">
          <RegisterForm />

          {/* navigation */}
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
