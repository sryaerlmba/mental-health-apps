import * as FaIcons from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { fetchFeatures } from "@/services/features";
import { Ifeature } from "@/type/featuresType";
import { use } from "react";

export default  function FeatureList() {
  const data = use(fetchFeatures()); 

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-0 text-pink">
      {data.map((feature: Ifeature) => {
        const IconComponent =
          FaIcons[feature.featureIcon as keyof typeof FaIcons];

        const iconColorMap: Record<string, string> = {
          FaBook: "text-green-300",
          FaPenNib: "text-pink-300",
          FaHeart: "text-purple-300",
          FaBrain: "text-sky-300",
        };
        const iconColor = iconColorMap[feature.featureIcon] || "text-gray-400";

        return (
          <FeatureCard
            key={feature.featureId}
            icon={
              IconComponent ? (
                <IconComponent className={`text-3xl ${iconColor}`} />
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
  );
}
