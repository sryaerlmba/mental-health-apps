import Image from "next/image";
import robot from "@/public/img/robot.png";
import house from "@/public/img/house.png";
import growth from "@/public/img/growth.png";

export default function WhyUsCard() {
  return (
    <div className="grid grid-cols-3 mt-10 gap-5">
      <div className="bg-white p-5 rounded-xl shadow-md">
        <Image src={robot} alt="robot" width={100} />
        <h1 className="text-xl font-semibold text-gray-800 mt-3">
          AI yang Memahami
        </h1>
        <p className="text-gray-600 mt-3">
          Asisten digital yang dirancang untuk mendengarkan dan merespons dengan
          empati, membantu kamu memahami perasaan tanpa merasa dihakimi.
        </p>
      </div>
      <div className="bg-white p-5 rounded-xl shadow-md">
        <Image src={house} alt="robot" width={100} />
        <h1 className="text-xl font-semibold text-gray-800 mt-3">
          Ruang Aman untuk Ekspresimu
        </h1>
        <p className="text-gray-600 mt-3">
          Platform yang memberi kamu tempat tenang untuk mengekspresikan isi
          hati dengan bebas, tanpa tekanan dan penuh privasi. lorem
        </p>
      </div>
      <div className="bg-white p-5 rounded-xl shadow-md">
        <Image src={growth} alt="robot" width={100} />
        <h1 className="text-xl font-semibold text-gray-800 mt-3">
          Pantau Perkembangan Diri
        </h1>
        <p className="text-gray-600 mt-3">
          Fitur journaling dan pelacakan suasana hati membantu kamu mengenali
          pola emosi dan perjalananmu dari waktu ke waktu.
        </p>
      </div>
    </div>
  );
}
