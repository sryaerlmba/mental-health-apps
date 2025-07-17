export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-5 md:px-0">
      <h1 className="text-center text-gray-800 font-semibold md:text-3xl text-2xl">
        {title}
      </h1>
      <p className="text-gray-500 text-center md:text-xl text-md mt-5">{subtitle}</p>
    </div>
  );
}
