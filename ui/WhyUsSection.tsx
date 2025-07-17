import SectionHeader from "./SectionHeader";
import WhyUsCard from "./WhyUsCard";

export default function WhyUsSection() {
  return (
    <section className="md:py-20 bg-white md:px-5 p-10">
      <div className="mx-auto container xl:py-20 xl:px-20">
        <SectionHeader
          title="Kenapa Pilih Care Yuk?"
          subtitle="Kami percaya bahwa kesehatan mental adalah hal penting. Care Yuk hadir untuk mendampingi kamu menghadapi tantangan sehari-hari dengan cara yang nyaman dan aman."
        />
        <WhyUsCard />
      </div>
    </section>
  );
}
