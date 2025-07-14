import { FaHeart } from "react-icons/fa";

export default function AuthHeader({
  title,
  subtitle,
  tagline,
}: {
  title: string;
  subtitle: string;
  tagline: string;
}) {
  return (
    <>
      <h1 className="text-center font-bold text-2xl text-purple-600 flex items-center justify-center gap-2">
        <FaHeart className="text-purple-600" /> {title}
      </h1>
      <p className="text-center mt-1 text-gray-600">{subtitle}</p>
      <p className="text-center text-sm text-gray-500">
        {tagline}
      </p>
    </>
  );
}
