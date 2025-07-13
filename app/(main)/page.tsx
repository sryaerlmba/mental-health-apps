// import { createClient } from "@/utils/supabase/server";
import Hero from "@/components/Hero";
import { FaBrain } from "react-icons/fa";

export default async function Home() {
  return (
    <div>
      <Hero
        title="Yuk rawat kesehatan mentalmu bareng"
        highlight="Judul Apps"
        description="AI curhat, journaling harian, dan pelacak mood — semua dalam satu aplikasi."
        buttonLabel="Mulai Perjalananmu"
        stats={[
          { value: "Aman & Privat", label: "" },
          { value: "24/7 AI Support", label: "" },
          { value: "Gratis", label: "" },
        ]}
      />

      <section className="mt-20 h-100">
        <div className="mx-auto container xl:py-5 xl:px-20">
          <div className="px-5 md:px-0">
            <h1 className="text-center text-gray-800 font-semibold text-2xl">
              All the support you need for a healthier mind
            </h1>
            <p className="text-gray-500 text-center mt-5">
              Blending evidence-based therapy with smart AI tools to help you
              grow, reflect, and feel better every day.
            </p>
          </div>

          <div className="mt-10 flex gap-5 md:flex-row flex-col px-5 md:px-0">
            {/* content */}
            <div className="flex flex-col items-center md:w-1/3 border p-4 border-gray-500 rounded-md">
              <div className="bg-gray-200 p-2 rounded-md">
                <FaBrain className="text-3xl text-purple-300" />
              </div>
              <h1 className="font-semibold mt-3">AI Journal Analysis</h1>
              <p className="text-center text-gray-800 mt-3">
                Get personalized insights from your daily reflections with our
                compassionate AI that understands your emotional patterns.
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <h1>Otak</h1>
              <h1>AI Journal Analysis</h1>
              <p className="text-center">
                Get personalized insights from your daily reflections with our
                compassionate AI that understands your emotional patterns.
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <h1>Otak</h1>
              <h1>AI Journal Analysis</h1>
              <p className="text-center">
                Get personalized insights from your daily reflections with our
                compassionate AI that understands your emotional patterns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
