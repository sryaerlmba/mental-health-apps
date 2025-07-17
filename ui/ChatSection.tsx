import PhoneMockup from "@/components/phone/PhoneMockup";
import { FaCircle } from "react-icons/fa6";

export default function ChatSection() {
  return (
    <section className=" bg-pink-50 md:py-20 md:px-5">
      <div className="mx-auto container xl:py-20 xl:px-20">
        <div className="grid md:grid-cols-2 gap-5 items-center p-10 md:p-0">
          {/* kiri */}
          <div>
            <div>
              <h1 className="font-semibold md:text-5xl text-3xl ">
                Chat dengan AI yang Memahami Perasaan mu
              </h1>
              <p className="mt-5 text-gray-600 text-lg">
                nama apps dirancang khusus untuk memberikan dukungan emosional
                yang empatik. Ceritakan apapun yang kamu rasakan, tanpa takut
                dihakimi.
              </p>
            </div>

            <div className="mt-5">
              <ul className="list-none">
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-purple-300 inline text-sm" />
                  <p>Respons yang personal dan empatik</p>
                </li>
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-pink-300 inline text-sm" />
                  <p>Tersedia 24/7 kapanpun kamu butuh</p>
                </li>
                <li className="text-gray-600 flex items-center gap-3">
                  <FaCircle className="text-green-300 inline text-sm" />
                  <p>Data conversation aman dan privat</p>
                </li>
              </ul>
            </div>
          </div>

          {/* kanan */}
          <div className="ml-auto w-full">
            {/* mockup phone */}
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
