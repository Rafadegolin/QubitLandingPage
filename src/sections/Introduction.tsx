import Tag from "@/components/Tag";

const text = `Você busca otimizar o dia a dia da sua empresa, mas as soluções tradicionais são complexas e pouco personalizadas, dificultando a produtividade e a evolução..`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40 flex justify-center mx-8">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Nossa missão</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Seus processos merecem mais eficiência.</span>{" "}
          <span className="text-white/15">{text}</span>
          <span className="text-violet-700 block">
            Por isso criamos soluções inovadoras.
          </span>
        </div>
      </div>
    </section>
  );
}
