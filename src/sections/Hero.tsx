"use client";

import Button from "@/components/Button";
import desginExample1Image from "@/assets/images/design-example-1.png";
import desginExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  const [email, setEmail] = useState("");

  const handleContactClick = () => {
    if (!email) {
      alert("Por favor, insira seu e-mail antes de continuar.");
      return;
    }

    const subject = encodeURIComponent("Quero saber mais sobre suas soluções!");
    const body = encodeURIComponent(
      `Olá, quero melhorar a produtividade da minha empresa com as soluções da Qubit!`
    );

    window.location.href = `mailto:qubit.flowdev@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [
        rightDesignScope.current,
        { opacity: [1] },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: [1] },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { y: [0, 20, 0], x: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      id="home"
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="container relative">
        {/* Card esquerda */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={desginExample1Image}
            alt="Design example 1 image"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Rafael" />
        </motion.div>
        {/* Card direita */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={desginExample2Image}
            alt="Design example 2 imagem"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Daniel" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨Mais de 20 empresas impactadas
          </div>
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
              className="bg-transparent px-4 flex-1 w-full outline-none focus:ring-2 focus:ring-violet-700 focus:rounded-full focus:px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              className="whitespace-nowrap ml-2 hover:cursor-pointer"
              size="sm"
              onClick={handleContactClick}
            >
              Contato
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
