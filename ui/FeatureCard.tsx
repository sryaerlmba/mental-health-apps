import { ReactElement } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function FeatureCard({
  icon,
  title,
  excerpt,
  navigation,
}: {
  icon: ReactElement;
  title: string;
  excerpt: string;
  navigation: string;
}) {
  return (
    <div className="flex flex-col justify-between p-4 shadow-xl rounded-md h-full">
      <div>
        <div className="bg-gray-200 p-2 rounded-md w-fit text-purple-300">
          {icon}
        </div>
        <h1 className="font-semibold mt-3 text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-3">{excerpt}</p>
      </div>

      {/* link */}
      <div className="flex items-center mt-3 gap-2 text-purple-500 cursor-pointer">
        <Link
          href={`/${navigation}`}
          className="flex items-center mt-3 gap-2 text-purple-500 cursor-pointer"
        >
          <p className="text-sm">Pelajari lebih lanjut</p>
          <FaArrowRight className="inline text-sm" />
        </Link>
      </div>
    </div>
  );
}
