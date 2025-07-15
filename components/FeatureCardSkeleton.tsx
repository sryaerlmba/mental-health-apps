export default function FeatureCardSkeleton() {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md p-5 animate-pulse space-y-4">
      {/* Icon Placeholder */}
      <div className="w-10 h-10 bg-gray-200 rounded-md" />

      {/* Title Placeholder */}
      <div className="w-2/3 h-4 bg-gray-200 rounded" />

      {/* Text Placeholder */}
      <div className="w-full h-3 bg-gray-100 rounded" />
      <div className="w-3/4 h-3 bg-gray-100 rounded" />

      {/* CTA Placeholder */}
      <div className="w-1/2 h-3 bg-purple-100 rounded" />
    </div>
  );
}
