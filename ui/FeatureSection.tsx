import HeadFeatureSection from "./HeadFeatureSection";
import * as FaIcons from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { fetchFeatures } from "@/services/features";
import { Ifeature } from "@/type/features";

export default async function FeatureSection() {
  const data = await fetchFeatures();

  return (
    <section className="mt-20 h-100">
      <div className="mx-auto container xl:py-5 xl:px-20">
        <HeadFeatureSection />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-0">
          {data.map((feature: Ifeature) => {
            const IconComponent =
              FaIcons[feature.featureIcon as keyof typeof FaIcons];

            return (
              <FeatureCard
                key={feature.featureId}
                icon={
                  IconComponent ? (
                    <IconComponent className="text-3xl text-purple-300" />
                  ) : (
                    <FaIcons.FaRegQuestionCircle className="text-3xl text-red-400" />
                  )
                }
                title={feature.featureTitleId}
                excerpt={feature.featureExcerptId}
                navigation={feature.navigation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
