import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      <section>{children}</section>
      <Footer />
    </div>
  );
}
