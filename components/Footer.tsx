export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-purple-400 to-pink-400 px-5">
      <div className="flex justify-center items-center flex-col text-white gap-3">
        <h1 className="text-2xl font-semibold">Care Yuk - Teman Bicaramu</h1>
        <p>
          Kami hadir buat menemani langkahmu menjaga kesehatan mental. Mulai
          perjalananmu hari ini. 🌿
        </p>
            <p>©{new Date().getFullYear()} Care Yuk. Dibuat dengan 💜 untuk kesehatan mental Gen Z.</p>
      </div>
    </footer>
  );
}
