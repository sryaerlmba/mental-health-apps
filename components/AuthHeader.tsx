import logo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">
          <Image src={logo} alt="logo care-yuk" width={200} priority />
        </Link>
        <p className="text-center mt-1 text-gray-600">{subtitle}</p>
        <p className="text-center text-sm text-gray-500">{tagline}</p>
      </div>
    </>
  );
}
