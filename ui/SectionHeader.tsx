export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-5 md:px-0">
      <h1 className="text-center text-gray-800 font-semibold text-3xl">
        {title}
      </h1>
      <p className="text-gray-500 text-center text-xl mt-5">{subtitle}</p>
    </div>
  );
}
