// import { createClient } from "@/utils/supabase/server";
import Hero from "@/components/Hero";
import FeatureSection from "@/ui/FeatureSection";
import ChatSection from "@/ui/ChatSection";

import "@/styles/styles.css";

export default async function Home() {
  return (
    <div>
      <Hero
        title="Yuk rawat kesehatan mentalmu bareng"
        highlight="Care Yuk"
        description="AI curhat, journaling harian, dan pelacak mood, semua dalam satu aplikasi."
        buttonLabel="Mulai Perjalananmu"
        stats={[
          { value: "Aman & Privat", label: "" },
          { value: "24/7 AI Support", label: "" },
          { value: "Gratis", label: "" },
        ]}
      />

      <FeatureSection />
      <ChatSection />
    </div>
  );
}
