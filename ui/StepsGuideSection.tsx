import SectionHeader from "./SectionHeader";

export default function StepsGuideSection() {
  return (
    <section className="py-10 bg-pink-50 md:py-20 md:px-5">
      <div className="mx-auto container xl:py-20 xl:px-20">
        <SectionHeader
          title="✨ Gimana Cara Kerjanya?"
          subtitle="Langkah mudah buat mulai perjalanan kesehatan mental bareng Care Yuk"
        />

        {/* steps */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-10 px-5 md:px-0">
          {/* 1 */}
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="w-15 h-15 text-2xl rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center  justify-center text-white">
              1
            </p>
            <h1 className="mt-3 text-xl text-gray-800 font-semibold">
              Daftar Gratis
            </h1>
            <p className="text-gray-600 mt-3 text-center">
              Buat akun cuma pakai email. Gampang dan gak ribet!
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="w-15 h-15 text-2xl rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center  justify-center text-white">
              2
            </p>
            <h1 className="mt-3 text-xl text-gray-800 font-semibold">
              Pantau Mood
            </h1>
            <p className="text-gray-600 mt-3 text-center">
              Catat suasana hati tiap hari, biar kamu bisa lebih kenal sama diri
              sendiri.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="w-15 h-15 text-2xl rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center  justify-center text-white">
              3
            </p>
            <h1 className="mt-3 text-xl text-gray-800 font-semibold">
              Journaling{" "}
            </h1>
            <p className="text-gray-600 mt-3 text-center">
              Tuangkan perasaan dan pikiran lewat tulisan dengan bantuan panduan
              yang siap bantu.
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="w-15 h-15 text-2xl rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center  justify-center text-white">
              4
            </p>
            <h1 className="mt-3 text-xl text-gray-800 font-semibold">
              Tumbuh Bareng
            </h1>
            <p className="text-gray-600 mt-3 text-center">
              Ngobrol bareng AI dan baca insight menarik buat bantu kamu
              berkembang setiap hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
