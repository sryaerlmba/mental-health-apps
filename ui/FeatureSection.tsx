import HeadFeatureSection from "./HeadFeatureSection";
import { createClient } from "@/utils/supabase/client";
import * as FaIcons from "react-icons/fa";
import FeatureCard from "./FeatureCard";

interface IFeature {
  featureId: string;
  featureTitleId: string;
  featureIcon: string;
  featureExcerptId: string;
  navigation: string;
}

export default async function FeatureSection() {
  const supabase = createClient();
  const { data, error } = await supabase.from("features").select("*");

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data);

  return (
    <section className="mt-20 h-100">
      <div className="mx-auto container xl:py-5 xl:px-20">
        <HeadFeatureSection />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-0">
          {data.map((feature: IFeature) => {
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
