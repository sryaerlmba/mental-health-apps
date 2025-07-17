import logo from "@/public/img/logo.png";
import Image from "next/image";

export default function AuthHeader({
  subtitle,
  tagline,
}: {
  subtitle: string;
  tagline: string;
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image src={logo} alt="logo care-yuk" width={200} />
        <p className="text-center mt-1 text-gray-600">{subtitle}</p>
        <p className="text-center text-sm text-gray-500">{tagline}</p>
      </div>
    </>
  );
}
