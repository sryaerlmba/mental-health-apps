// app/(home)/components/FeatureSection.tsx
import SectionHeader from "./SectionHeader";
import { Suspense } from "react";
import FeatureCardSkeleton from "@/components/FeatureCardSkeleton";
import FeatureList from "./FeatureList";

export default function FeatureSection() {
  return (
    <section className="mt-20">
      <div className="mx-auto container xl:py-20 xl:px-20">
        <SectionHeader
          title="Fitur Unggulan Care Yuk"
          subtitle="Semua yang kamu butuhkan untuk menjaga kesehatan mental dalam satu platform"
        />

        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-0 mt-10">
              {Array.from({ length: 4 }).map((_, idx) => (
                <FeatureCardSkeleton key={idx} />
              ))}
            </div>
          }
        >
          <FeatureList />
        </Suspense>
      </div>
    </section>
  );
}
