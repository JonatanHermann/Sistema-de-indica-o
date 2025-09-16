import Image from "next/image";
import logo from "../src/assets/logo.svg";
import { Radio } from "lucide-react";
import { SubscriptionForm } from "./subscription-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="min-h-dvh flex justify-center gap-16 flex-col">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="devstage" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">ReferralRank</span> Sua rede, seu impacto
          </h1>
        </div>

        <div className="flex flex-col gap-5 items-stretch md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>
              <span className="text-purple font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Cadastre-se, receba seu link exclusivo e acompanhe quantas pessoas
              você indicou. Compartilhe, suba no ranking e veja sua influência
              crescer
              <br />
              <br />
              Compartilhe seu link e acompanhe seus resultados em tempo real.
            </p>
          </div>

          <SubscriptionForm />
        </div>
      </div>
    </Suspense>
  );
}
