import logoImage from "@/assets/images/Qubit2.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contato" },
  { href: "#", label: "Políticas de Privacidade" },
  { href: "#", label: "Termos & Condições" },
];

export default function Footer() {
  return (
    <section className="py-16 flex justify-center mx-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image
              src={logoImage}
              alt="Layers logo"
              className="h-9 md:h-12 w-auto"
            />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a href={link.href} className="text-white/50 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white/50 text-sm mt-8">Qubit 2025 &copy;</p>
        </div>
      </div>
    </section>
  );
}
