import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import n8nIcon from "@/assets/images/N8N.svg";
import makeIcon from "@/assets/images/Make.svg";
import driveIcon from "@/assets/images/Drive.svg";
import fluterIcon from "@/assets/images/Flutterflow.svg";
import wootIcon from "@/assets/images/ChatWoot.svg";
import bubbleIcon from "@/assets/images/Bubble.svg";
import evoIcon from "@/assets/images/EvoAPI.svg";

const integrations = [
  {
    name: "N8N",
    icon: n8nIcon,
    description:
      "N8N é a principal ferramente para criação de automoções e agentes de IA.",
  },
  {
    name: "Make",
    icon: makeIcon,
    description: "Ferramente para criação de automações de menor complexidade.",
  },
  {
    name: "EvolutionAPI",
    icon: evoIcon,
    description:
      "API de comunição com o WhatsApp, para receber e enviar mensagens em automações.",
  },
  {
    name: "Google Drive",
    icon: driveIcon,
    description: "Amplamente usado para armazenamento de dados online.",
  },
  {
    name: "Chatwoot",
    icon: wootIcon,
    description: "Ferramenta de gerenciamento de WhatsApp.",
  },
  {
    name: "Bubble",
    icon: bubbleIcon,
    description: "Criaçao de sistemas LowCode.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 flex justify-center mx-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center md:justify-start">
              <Tag>Ferramentas</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6">
              As melhores ferramentas, melhores{" "}
              <span className="text-violet-700 font-semibold">soluções</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Nossos soluções abrangem uma gama enorme de ferramentas, softwares
              e fluxos de processos, acompanhando o que há de mais moderno no
              mercado.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
