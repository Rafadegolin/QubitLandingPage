import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section id="features" className="py-24 flex justify-center mx-8">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Onde problemas viram{" "}
          <span className="text-violet-700 font-semibold">soluções</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Bal bla bla bla"
            description="lbal sdladlas blalslda ldaslda dasd al"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Soluções Inovadoras"
            description="Eleve sua produtividade com soluções que fazem sentido"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                Nós tivemos um{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incrível</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shhadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  />
                </span>{" "}
                crescimento este ano
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Elimine tarefas repetitivas"
            description="Otimize seu tempo, eliminando tarefas que roubam sua produtividade"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Key className="w-28 outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-700 transition-all duration-500 group-hover:translate-y-1">
                  ctrl
                </Key>
                <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-700 transition-all duration-500 group-hover:translate-y-1 delay-150">
                  c
                </Key>
                <Key className="w-28 outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-700 transition-all duration-500 group-hover:translate-y-1 delay-500">
                  ctrl
                </Key>
                <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-700 transition-all duration-500 group-hover:translate-y-1 delay-650">
                  v
                </Key>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-violet-700 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
