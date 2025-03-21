import Button from "@/components/Button";
import desginExample1Image from "@/assets/images/design-example-1.png";
import desginExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={desginExample1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={desginExample2Image} alt="Design example 2 imagem" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨Mais de 20 empresas impactadas
          </div>
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Rafael" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Daniel" color="red" />
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 mx-4">
          Soluções que impactam!
        </h1>
        <div className="mx-8">
          <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
            A <span className="text-violet-700 font-bold">Qubit</span>{" "}
            impulsiona a produtividade e eficiência das empreas através de
            automações de processos, organização de dados e otimizando
            atendimento ao cliente.
          </p>
          <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-transparent px-4 flex-1 w-full"
            />
            <Button
              variant="primary"
              type="submit"
              className="whitespace-nowrap"
              size="sm"
            >
              Contato
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
